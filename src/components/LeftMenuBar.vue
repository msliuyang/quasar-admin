<template>
  <q-list>
    <LeftSubMenuBar :router-path="menuList" :init-level="0"/>
  </q-list>
</template>

<script>
import LeftSubMenuBar from 'components/LeftSubMenuBar.vue'
import * as Menu from '../data/menu'
export default {
  name: 'left-menu-bar',
  components: { LeftSubMenuBar },
  data() {
    return {
      menuList: []
    }
  },
  created() {

  },
  mounted() {
    this.getMenuList()
  },
  methods: {
    getMenuList() {
      // this.$store.getters.userInfo.id
      // console.log(this.$route.path)
      const loginType = this.$route.path
      if (loginType === '/roleList') {
        this.menuList = Menu.adminMenu
      } else if (loginType === '/storeInfo') {
        this.menuList = Menu.sellerMenu
      } else {
        this.menuList = []
      }
      // console.log(111, this.$store.getters.userInfo)
      // const user = this.$store.state.user.userInfo
    }
  }
}
</script>
