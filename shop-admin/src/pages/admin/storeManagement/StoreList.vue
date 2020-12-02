<template>
  <q-page class="q-pa-md">
    <!-- 搜索栏 -->
    <q-form
      @submit="handleSearch"
      class="q-gutter-md"
    >
    <q-input outlined v-model="searchForm.keyword"/>
    </q-form>
    <!-- 店铺列表 -->
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      searchForm: {
        keyword: '测试成功~啊哈哈哈~~~我飘了~~~~~'
      }
    }
  },
  created () {
    console.log('storeinfo')
    this.getTableList()
  },
  methods: {
    getTableList () {

    },
    handleSearch() {

    }
  }
}
</script>
