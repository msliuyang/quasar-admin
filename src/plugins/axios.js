// axios应用插件文件(src/plugins/axios.js)

import axios from 'axios'

console.log(3333)

export default ({ app, router, Vue }) => {
  console.log(22, app, router, Vue)
  axios.defaults.baseURL = process.env.API
  Vue.prototype.$axios = axios
}
