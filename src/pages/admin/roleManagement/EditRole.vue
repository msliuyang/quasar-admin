<template>
  <div class="fit">
    <div class="row q-pa-md no-wrap q-col-gutter-md">
<div class="custom-shape-divider-top-1608023674">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
      <div class="col-md-3">
        <q-input
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
        <q-field label="角色类型"  stack-label standout :dense="true">
          <template v-slot:control>
            <q-radio keep-color v-model="userRole.type" val="seller" label="商家" color="orange" />
            <q-radio keep-color v-model="userRole.type" val="admin" label="管理员" color="red" />
            <q-radio keep-color v-model="userRole.type" val="other" label="其他" color="teal" />
          </template>
        </q-field>
      </div>

      <div class="col-md-3">
        <q-field label="角色状态" stack-label standout :dense="true">
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
        type: '',
        menu: []
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
        // console.log(this.checkedMenuList)
      } else {

      }
    },
    handleCheckAllChange(val, event) {
      if (val) {
        this.departmentTicked = this.filterCheck(this.MenuList)
        // this.filterCheck(this.MenuList)
        // console.log(this.departmentTicked)
        this.handleDepartmentTreeTicked(this.departmentTicked)
      } else {
        this.departmentTicked = []
        this.checkedMenuList = []
      }
    },
    filterCheck(arr) {
      let menu = []
      arr.forEach(item => {
        if (item.children && item.children.length > 0) {
          menu = menu.concat(this.filterCheck(item.children))
        } else {
          menu.push(item.label)
        }
      })
      return menu
    },
    handleSaveRole() {
      console.log(this.checkedMenuList)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-shape-divider-top-1608023674 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1608023674 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
}

.custom-shape-divider-top-1608023674 .shape-fill {
    fill: #F5A623;
    opacity: 0.3;
}
</style>
