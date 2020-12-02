<template>
  <q-list style="min-width: 100px">
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
      if (loginType === '/home') {
        this.menuList = Menu.adminMenu
      } else {
        this.menuList = Menu.sellerMenu
      }
      console.log(111, this.$store.getters.userInfo)
      // const user = this.$store.state.user.userInfo
    }
  }
}
</script>
