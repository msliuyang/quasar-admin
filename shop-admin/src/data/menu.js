const sellerMenu = [
  {
    icon: 'feedback',
    label: '店铺管理',
    path: '/storeInfo',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '商品管理',
    path: '/storeInfo',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '订单管理',
    path: '/storeInfo',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '佣金管理',
    path: '/storeInfo',
    hidden: false
  }
]

const adminMenu = [
  {
    icon: 'feedback',
    label: '店铺审核',
    path: '/storeList',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '商品审核',
    path: '/goodsAudit',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '首页管理',
    // path: '/appIndex',
    children: [
      {
        icon: 'perm_identity',
        label: '轮播图',
        path: '/banner'
      },
      {
        icon: 'delete',
        label: '活动信息',
        path: '/activityInfo'
      }
    ],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '订单管理',
    path: '/orderManagement',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '佣金管理',
    path: '/commissionManagement',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '用户管理',
    path: '/userManagement',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '白名单',
    path: '/whiteList',
    hidden: false
  },
  {
    icon: 'feedback',
    label: 'App管理',
    path: '/appManagement',
    hidden: false
  }
]

export {
  sellerMenu,
  adminMenu
}
