import Vue from 'vue'
import VueRouter from 'vue-router'
// import { routes } from './routes'
import routes from './routes'
// import { getToken } from '../utils/token'
// import store from '../store'

Vue.use(VueRouter)
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

// const whiteList = ['/login', '/403']// 设置白名单，避免死循环

// function hasPermission(router, accessMenu) {
//   if (whiteList.indexOf(router.path) !== -1) {
//     return true
//   }
//   const menu = Util.getMenuByName(router.name, accessMenu)
//   if (menu.name) {
//     return true
//   }
//   return false
// }

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
  return Router
}

// 地址栏改变，比$route(to)先触发
// Router.beforeEach(async (to, from, next) => {
//   if (getToken()) {
//   } else {
//     if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })

// export default Router
