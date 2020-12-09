export default ({ app, router, store, Vue }) => {
  Vue.directive('permission', {
    bind: function (el, binding, vnode) {
      // localStorage.setItem('isAdmin', 0)
      // localStorage.setItem('permission', ['function_edit', 'function_add'])
      // console.log(localStorage.permission, el, binding, vnode)
      const needPermissions = binding.value
      const permissions = JSON.parse(localStorage.getItem('permission'))
      // const permissions = ['function_edit', 'function_add']
      const isAdmin = localStorage.getItem('isAdmin')
      const hasPermission = permissions.some(s => {
        return needPermissions.indexOf(s) > -1
      })
      console.log(hasPermission, isAdmin)
      if (!hasPermission) {
        el.style.display = 'none'
      }
    }
  })
}
