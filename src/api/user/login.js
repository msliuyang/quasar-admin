import { axiosInstance } from '../../boot/axios'
// import qs from 'qs'

export function login(params) {
  return axiosInstance({
    url: '/login',
    method: 'post',
    data: params
  })
}

export function logout() {
  return axiosInstance({
    url: '/auth/logout',
    method: 'post'
  })
}

export function getMenu() {
  return axiosInstance({
    url: '/getMenu',
    method: 'get'
  })
}

export function getStore() {
  return axiosInstance({
    url: '/shop/shopUnFreeze',
    method: 'get'
  })
}

export function getUserInfo() {
  return axiosInstance({
    url: '/user/info',
    method: 'get'
  })
}
