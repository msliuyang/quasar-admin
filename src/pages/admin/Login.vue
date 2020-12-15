<template>
  <q-layout view="hHh lpR fFf">
         <q-form
          ref="loginForm"
          class="absolute-center"
          style="z-index:2;width: 400px;"
          @submit="handleLogin"
        >
          <q-input
            rounded standout
            v-model="loginForm.telephone"
            label="请输入手机号"
            hint=""
            lazy-rules
            :rules="[ val => val && val.length === 11 || 'Please type telephone']"
          />

      <q-input
        rounded standout
        type="passward"
        v-model="loginForm.passward"
        label="请输入密码"
        autocorrect="off"
        autocapitalize="off"
        autocomplete="off"
        spellcheck="false"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || '密码不能为空',
          val => val.length > 0 && val.length < 10 || '长度在1-10个字符'
        ]"
      />

      <div class="flex justify-center">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

    <q-img class="absolute-full" src="../../statics/img/login-bg.png"  style="z-index:-1;">
        <div class="absolute-top text-center" style="z-index:1;">
          <span class="text-h3">管理员后台管理系统</span>
        </div>
    </q-img>
    <!-- <div class="row full-width bg-blue-grey-2">
      <div class="row bg-primary fit">
      <q-btn v-permission="['function_edit']" small round push glossy dense icon="edit" color="primary" @click="editFunction(props.value)"></q-btn>
      <q-btn v-permission="['function_del']" small round push glossy dense icon="delete" color="red" @click="delFunction(props.value)"></q-btn>
      </div>
    </div> -->

  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        telephone: '15622333632',
        passward: '123456'
      }
    }
  },
  created() {
    // this.handleLogin()
  },
  methods: {
    async handleLogin() {
      localStorage.setItem('loginType', 'admin')
      this.$router.push({
        path: '/roleList'
      })
      // const params = {
      //   tel: '',
      //   password: '==',
      //   loginType: '2',
      //   type: '3'
      // }
      // this.$store
      //   .dispatch('login', params)
      //   .then(res => {
      //     // localStorage.setItem('isAdmin', 0)
      //     localStorage.setItem('permission', JSON.stringify(['function_edit', 'function_add']))
      //     console.log('admin')
      //     this.$router.push({
      //       path: '/storeList'
      //     })
      //   })
      //   .catch(ex => {
      //   })
    }
  }
}
</script>
