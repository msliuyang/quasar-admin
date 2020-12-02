export function getToken() {
  return localStorage.getItem('TokenKey')
}

export function setToken(tokenVlaue) {
  console.log('token22')
  localStorage.setItem('TokenKey', tokenVlaue)
}

export function removeToken() {
  localStorage.removeItem('TokenKey')
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem('userInfo'))
}

export function setUserInfo(userInfo) {
  if (Object.keys(userInfo).length > 0) {
    localStorage.setItem('userInfo', userInfo)
  }
}

export function removeUserInfo() {
  localStorage.removeItem('userInfo')
}
