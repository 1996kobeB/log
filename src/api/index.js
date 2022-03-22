import axios from '@/hooks/axios'

export function getCaptcha() {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/getCaptcha'
  })
}
