<template>
  <div class="container">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input
              type="password"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              required
              lay-verify="required"
              placeholder="请输入验证码"
              autocomplete="off"
              class="layui-input"
            />
          </div>
        </div>
        <button type="button" class="layui-btn">立即登录</button>
        <a href="https://www.layuiweb.com" class="link">忘记密码？</a>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    console.log('lll')
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
}
</style>
