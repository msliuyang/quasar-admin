import * as authService from '../../utils/auth'
import * as loginService from '../../api/user/login'
const user = {
  state: {
    token: authService.getToken(),
    userInfo: {
      name: '',
      status: '',
      tel: '',
      myInviteCode: '',
      avatar: ''
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 登录
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginService.login(userInfo).then(response => {
          console.log(response)
          if (response.error_no === '0') {
            const data = response.data
            commit('SET_USERINFO', data)
            commit('SET_TOKEN', data.token)
            authService.setToken(data.token)
            authService.setUserInfo(JSON.stringify(data))
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({ commit }, state) {
      return new Promise((resolve, reject) => {
        loginService.logout().then((response) => {
          commit('SET_TOKEN', '')
          commit('SET_USERINFO', {
            name: '',
            avatar: ''
          })
          authService.removeToken()
          resolve()
        }).catch(error => {
          commit('SET_TOKEN', '')
          commit('SET_USERINFO', {
            name: '',
            avatar: ''
          })
          authService.removeToken()
          reject(error)
        })
      })
    },
    GetUserInfo({ commit }, state) {
      return new Promise((resolve, reject) => {
        loginService.getUserInfo().then((response) => {
          const data = response.data.data
          const userInfo = {
            name: data.userName,
            avatar: data.avatarUrl
          }
          commit('SET_USERINFO', userInfo)
          const userRole = data.userRole
          const userPermission = data.userPermission
          const permission = [...userRole, ...userPermission]
          const isAdmin = data.isAdmin
          localStorage.setItem('permission', JSON.stringify(permission))
          localStorage.setItem('isAdmin', isAdmin)
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
