import { axiosInstance } from '../boot/axios'

export function fetchPermission() {
  return axiosInstance.get('/user/info')
}

// 获取用户列表
export function getUserList() {
  return axiosInstance.get('/user/list')
}
// 获取角色列表
export function getRoleList() {
  return axiosInstance.get('/role/list')
}
// 获取所有权限
export function getAllPermissiion() {
  return axiosInstance.get('/permission/all')
}
// 获取一级权限列表
export function getFirstLevel() {
  return axiosInstance.get('/permission/resource')
}
// 获取次级权限列表
export function getNextLevel(id) {
  return axiosInstance.get(`/permission/level?id=${id}`)
}
export function login(data) {
  return axiosInstance.post('/login', data)
}
