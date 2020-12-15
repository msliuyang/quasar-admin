
const routes = [
  {
    path: '/',
    component: () => import('pages/seller/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('pages/admin/Login.vue')
  },
  {
    path: '/home',
    component: () => import('layouts/Admin.vue'),
    children: [
      { path: '/roleList', component: () => import('pages/admin/roleManagement/RoleList.vue') },
      { path: '/userList', component: () => import('pages/admin/userManagement/UserList.vue') },
      { path: '/adminTest', component: () => import('pages/Index.vue') },
      { path: '/storeList', component: () => import('pages/admin/storeManagement/StoreList.vue') },
      { path: '/authorityList', component: () => import('pages/admin/authorityManagement/AuthorityList.vue') }
    ]
  },
  {
    path: '/index',
    component: () => import('layouts/Seller.vue'),
    children: [
      { path: '/storeInfo', component: () => import('pages/seller/storeManagement/StoreInfo.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
