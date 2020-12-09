import Vue from 'vue'
import axios from 'axios'
import * as authService from '../utils/auth'
import { Loading } from 'quasar'

// Add a request interceptor process.env.API '/backend'
const axiosInstance = axios.create({
  baseURL: process.env.API,
  timeout: 10000,
  withCredentials: true
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
// 请求拦截
axiosInstance.interceptors.request.use(
  config => {
    Loading.show({
      // spinner: QSpinnerGears,
      delay: 500, // ms
      message: 'Some message',
      messageColor: 'blue',
      spinnerSize: 250, // 像素
      spinnerColor: 'white',
      customClass: 'bg-primary'
    })
    console.log('info request token:' + authService.getToken())
    if (authService.getToken()) {
      config.headers.Authorization = 'Bearer ' + authService.getToken()
    } else {
      config.headers.Authorization = ''
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axiosInstance.interceptors.response.use(
  response => {
    Loading.hide()
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = axiosInstance

export { axiosInstance }
