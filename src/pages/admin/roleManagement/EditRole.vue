<template>
  <div class="fit">
    <div class="row q-pa-md no-wrap q-col-gutter-md">
      <div class="col-md-3">
        <q-input
            class="bg-white"
            filled
            stack-label
            label="请输入角色名称"
            v-model="userRole.name"
            hint="* 昵称3-10个字符"
            autocorrect="off"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
      </div>
      <div class="col-md-3">
        <q-field label="角色类型" class="bg-white"  stack-label standout :dense="true">
          <template v-slot:control>
            <q-radio keep-color v-model="userRole.type" val="seller" label="商家" color="orange" />
            <q-radio keep-color v-model="userRole.type" val="admin" label="管理员" color="red" />
            <q-radio keep-color v-model="userRole.type" val="other" label="其他" color="teal" />
          </template>
        </q-field>
      </div>

      <div class="col-md-3">
        <q-field label="角色状态" class="bg-white"  stack-label standout :dense="true">
          <template v-slot:control>
            <q-radio keep-color v-model="userRole.type" val="seller" label="启用" color="green" />
            <q-radio keep-color v-model="userRole.type" val="admin" label="禁用" color="red" />
          </template>
        </q-field>
      </div>

      <div class="col-auto">
        <q-btn color="primary" label="保 存" size="lg" @click="handleSaveRole"/>
      </div>
    </div>
    <div class="q-pa-md" style="height: calc(100% - 127px)">
      <q-toolbar class="bg-grey-3 text-primary shadow">
        <q-toolbar-title class="text-subtitle1">角色菜单权限<q-checkbox class="q-pl-md" v-model="checkAllMenus" label="全选" @input="handleCheckAllChange"/></q-toolbar-title>
      </q-toolbar>
      <div class="row fit">
         <div class="col-md-4 bg-grey-10">
           <q-scroll-area class="fit rounded-borders shadow-3"  bordered>
            <q-tree
            :nodes="MenuList"
            node-key="label"
            ref="deparmentTree"
            dark
            default-expand-all
            :tick-strategy="tickStrategy"
            :ticked.sync="departmentTicked"
            :filter="searchDepartment"
            :selected.sync="departmentSelected"
            :filter-method="filterDepartment"
            @update:selected ="handleDepartmentTreeSelect"
            @update:ticked="handleDepartmentTreeTicked"
          >
          <template v-slot:default-header="prop">
            <div class="row items-center" style="flex:1">
              <q-icon :name="prop.node.icon || 'share'" color="teal" size="20px" class="q-mr-sm" />
              <div :class=" departmentSelected  === prop.node.label ? 'text-orange-10' : 'text-primary'" class="flex justify-between  items-center" style="flex:1;">
                <span style="flex:1">{{ prop.node.label }}</span>
                <q-btn color="grey-7" round flat icon="more_vert" @click.stop>
                <!-- <q-btn color="primary" label="..." @click.stop> -->
                <q-menu content-class="" auto-close>
                  <q-list style="min-width: 50px">
                    <q-item clickable>
                      <q-icon name="add" color="deep-orange" size="20px" class="q-mr-sm" />
                    </q-item>
                    <q-item clickable>
                      <q-icon name="edit" color="deep-orange" size="20px" class="q-mr-sm" />
                    </q-item>
                    <q-item clickable>
                      <q-icon name="delete" color="negative" size="20px" class="q-mr-sm" />
                    </q-item>
                    <q-separator dark />
                  </q-list>
                </q-menu>
                </q-btn>
                <!-- <span>
                  <q-icon name="add" color="deep-orange" size="20px" class="q-mr-sm" />
                  <q-icon name="edit" color="deep-orange" size="20px" class="q-mr-sm" />
                  <q-icon name="delete" color="negative" size="20px" class="q-mr-sm" />
                </span> -->
              </div>
            </div>
          </template>
          </q-tree>
           </q-scroll-area>
         </div>

         <div class="col-md-8">
           <q-scroll-area class="fit rounded-borders shadow-3"  bordered>
           <template v-for="menu in checkedMenuList">
             <div class="q-pa-md" :key="menu.label">
             <div class="text-subtitle1"  :class=" departmentSelected === menu.label ? 'text-deep-orange' : 'text-primary'" >
               {{menu.label}} —— 按钮权限
               <!-- <q-checkbox v-model="menu.label" :label="menu.label" toggle-indeterminate/> -->
              </div>
              <div class="q-pa-sm q-pb-lg">
              <template v-for="item in menu.btns">
                <q-checkbox v-model="item.check" :label="item.label" :color="item.color" class="q-pr-md" :key="item.label"/>
              </template>
              </div>
             </div>
            </template>
           </q-scroll-area>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Menu from '../../../data/menu'
export default {
  name: 'edit-role',
  data() {
    return {
      checkAllMenus: false,
      userRole: {
        name: '',
        status: '',
        type: ''
      },
      group: [],
      btnsOption: [],
      MenuList: Menu.allMenu,
      selectedMenuList: [],
      checkedMenuList: [],
      departmentSelected: '',
      searchDepartment: '', // 搜索部门
      tickStrategy: 'leaf', // 部门tree模式
      departmentTicked: [] // 已选节点
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    filterDepartment(node, filter) {
      return node.label && node.label.toLowerCase().indexOf(filter) !== -1
    },
    handleDepartmentTreeSelect(node) {
      console.log(this.departmentTicked)
      // this.departmentSelected = node
      this.checkedMenuList = []
      this.filterMenu(this.MenuList, [...this.departmentTicked, node])
    },
    filterMenu(MenuList = [], node = []) {
      MenuList.forEach(item => {
        if (node.some(n => n === item.label)) {
          this.checkedMenuList.push(item)
        }
        if (item.children && item.children.length > 0) {
          this.filterMenu(item.children, node)
        }
      })
    },
    handleDepartmentTreeTicked(node) {
      // this.departmentTicked = node
      console.log(node)
      this.departmentSelected = ''
      if (node.length > 0) {
        this.MenuList.filter(item => {
          if (item.btns.length > 0) {
            item.btns.map(btn => {
              btn.check = true
            })
          }
        })
        this.checkedMenuList = []
        this.filterMenu(this.MenuList, node)
        console.log(this.checkedMenuList)
      } else {

      }
      console.log(node, this.checkedMenuList)
    },
    handleCheckAllChange(val, event) {

    },
    handleSaveRole() {
      console.log(this.checkedMenuList)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
