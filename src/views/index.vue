<template>
  <div class="container">
    <div class="layui-container">
      <Form
        class="layui-form layui-form-pane"
        action=""
        :validation-schema="userSchema"
      >
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <Field
              name="email"
              type="text"
              placeholder="请输入用户名"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid">
            <ErrorMessage name="email" class="error-msg" />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-inline">
            <Field
              type="password"
              name="password"
              placeholder="请输入密码"
              class="layui-input"
            />
          </div>
          <div class="layui-form-mid">
            <ErrorMessage name="password" class="error-msg" />
          </div>
        </div>
        <div class="layui-form-item svg-box">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <Field
              type="text"
              name="valid"
              placeholder="请输入验证码"
              class="layui-input"
            />
          </div>
          <div
            class="layui-form-mid svg"
            v-html="captcha"
            @click="handlCaptcha"
          ></div>
          <div class="layui-form-block">
            <ErrorMessage name="valid" class="error-msg" />
          </div>
        </div>
        <button type="button" class="layui-btn">立即登录</button>
        <a href="https://www.layuiweb.com" class="link">忘记密码？</a>
      </Form>
    </div>
  </div>
</template>
<script>
import { Field, Form, ErrorMessage, configure } from 'vee-validate'
import { getCaptcha } from '@/api/index'
import { onMounted, ref } from '@vue/runtime-core'
import { object, string } from 'yup'
export default {
  components: { Field, Form, ErrorMessage },

  setup() {
    // 验证码初始化
    const captcha = ref('')
    // 点击后切换验证码
    const handlCaptcha = () => {
      getCaptcha().then((res) => {
        if (res.status === 200 && res.data.code === 200) {
          captcha.value = res.data.data.data
        }
      })
    }
    const userSchema = object({
      // 从后往前进行判断
      email: string().required('请输入账号').email('请输入正确的邮箱格式'),
      password: string().min(8, '不符合最小长度要求').required('请输入密码'),
      valid: string().length(4, '验证码长度要求4位').required('请输入验证码')
    })
    // 验证配置
    configure({
      validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
      validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
      validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
      validateOnModelUpdate: true // controls if `update:modelValue` events should trigger validation with `handleChange` handler
    })
    onMounted(() => {
      handlCaptcha()
    })
    return {
      captcha,
      handlCaptcha,
      userSchema
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background: #e0e0e0;
}
.layui-container {
  background: #ffffff;
  input {
    width: 190px;
  }
  .link {
    margin-left: 10px;
    &:hover {
      color: #009688;
    }
  }
  .svg {
    position: absolute;
    top: -15px;
    left: 320px;
  }
}
.svg-box {
  position: relative;
}
.error-msg {
  color: red;
}
</style>
