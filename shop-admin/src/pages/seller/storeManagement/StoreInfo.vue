<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    > -->
    <q-btn v-permission="['function_edit']" small round push glossy dense icon="edit" color="primary" @click="editFunction(props.value)"></q-btn>
    <q-btn v-permission="['function_del']" small round push glossy dense icon="delete" color="red" @click="delFunction(props.value)"></q-btn>
    storeinfo
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
    }
  },
  created () {
    console.log('storeinfo')
    this.getTableList()
  },
  methods: {
    getTableList () {

    }
  }
}
</script>
