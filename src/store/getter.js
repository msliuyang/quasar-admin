const getters = {
  userInfo: state => state.user.userInfo,
  getToken: state => state.user.token
  // cachePage: state => state.app.cachePage,
  // pageOpenedList: state => state.app.pageOpenedList,
  // currentPath:state=>state.app.currentPath,
  // accessMenu:state=>state.app.accessMenu,
}
export default getters
