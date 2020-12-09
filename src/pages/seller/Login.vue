<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-btn v-permission="['function_edit']" small round push glossy dense icon="edit" color="primary" @click="editFunction(props.value)"></q-btn>
      <q-btn v-permission="['function_del']" small round push glossy dense icon="delete" color="red" @click="delFunction(props.value)"></q-btn>
      <!-- <router-view /> -->
    </q-page-container>

  </q-layout>
</template>
<script>
// import { login } from '../../api/permission'
export default {
  data () {
    return {
    }
  },
  created() {
    this.handleLogin()
  },
  methods: {
    async handleLogin() {
      const params = {
        tel: '',
        password: '==',
        loginType: '3',
        type: '3'
      }
      // const loginResult = await login(params)
      // console.log(loginResult)
      this.$store
        .dispatch('login', params)
        .then(res => {
          // localStorage.setItem('isAdmin', 0)
          localStorage.setItem('permission', JSON.stringify(['function_edit', 'function_add']))
          console.log('seller')
          this.$router.push({
            path: '/index'
          })
        })
        .catch(ex => {
        })
    }
  }
}
</script>
