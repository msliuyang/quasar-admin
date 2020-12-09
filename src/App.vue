<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import * as authService from './utils/auth'
export default {
  name: 'App',
  created() {
    this.$store.state.user.token = authService.getToken()
    this.$store.state.user.userInfo = authService.getUserInfo()
    console.log('f5', this.$store.state)
  }
}
</script>

<style lang="scss">
body{
  font-size: 16px;
}
</style>

<style lang="stylus">
body
  &.cordova .tag
    color $primary
  &.desktop .tag
    color $secondary
  &.mobile .tag
    color $tertiary
</style>
