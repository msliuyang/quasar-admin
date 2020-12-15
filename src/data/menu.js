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
    label: '角色管理',
    path: '/roleList',
    btns: ['add', 'delete'],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '用户管理',
    path: '/UserList',
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
        path: '/#',
        btns: ['update', 'delete']
      },
      {
        icon: 'delete',
        label: '活动信息',
        path: '/#',
        btns: ['update', 'select']
      }
    ],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '订单管理',
    path: '/#',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '佣金管理',
    path: '/#',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '用户管理',
    path: '/authorityList',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '白名单',
    path: '/authorityList',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '角色管理',
    path: '/roleList',
    hidden: false
  },
  {
    icon: 'feedback',
    label: '权限管理',
    path: '/authorityList',
    hidden: false
  },
  {
    icon: 'feedback',
    label: 'App管理',
    path: '/authorityList',
    hidden: false
  }
]

const allMenu = [
  {
    icon: 'feedback',
    label: '店铺审核',
    path: '/authorityList',
    btns: [
      {
        label: '新增',
        check: false,
        value: 'add',
        color: 'positive'
      },
      {
        label: '修改',
        check: false,
        value: 'update',
        color: 'orange'
      },
      {
        label: '删除',
        check: false,
        value: 'delete',
        color: 'red'
      }
    ],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '商品审核',
    path: '/authorityList',
    btns: [
      {
        label: '新增',
        check: false,
        value: 'add',
        color: 'positive'
      },
      {
        label: '修改',
        check: false,
        value: 'update',
        color: 'orange'
      },
      {
        label: '删除',
        check: false,
        value: 'delete',
        color: 'red'
      }
    ],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '首页管理',
    // path: '/appIndex',
    btns: [],
    children: [
      {
        icon: 'perm_identity',
        label: '轮播图',
        path: '/authorityList',
        btns: []
      },
      {
        icon: 'delete',
        label: '活动信息',
        path: '/authorityList',
        btns: []
      }
    ],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '订单管理',
    path: '/authorityList',
    btns: [],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '佣金管理',
    path: '/authorityList',
    btns: [],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '用户管理',
    path: '/authorityList',
    btns: [],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '白名单',
    path: '/authorityList',
    btns: [],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '角色管理',
    path: '/roleList',
    btns: [],
    hidden: false
  },
  {
    icon: 'feedback',
    label: '权限管理',
    path: '/authorityList',
    btns: [],
    hidden: false
  },
  {
    icon: 'feedback',
    label: 'App管理',
    path: '/authorityList',
    btns: [],
    hidden: false
  }
]
export {
  sellerMenu,
  adminMenu,
  allMenu
}
