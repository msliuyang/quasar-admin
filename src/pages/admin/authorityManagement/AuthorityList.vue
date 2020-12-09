<template>
  <q-page class="q-pa-md" style="height:100px;">

    <div class="row fit">
      <!-- 部门列表 -->
      <div class="col-md-4 full-height q-pr-md">
        <div style="height: calc(100% - 56px)">
        <DepartmentTree/>
        </div>
      </div>

      <!-- 用户列表 -->
      <div class="col-md-5 full-height q-pr-md">
        <div style="height: calc(100% - 110px)">
        <UserList/>
        </div>
      </div>

      <!-- 新增/修改 用户信息 -->
      <div class="col-md-3 full-height">
        <div class="row q-pb-md">
          <q-btn color="secondary" label="添加用户" />
        </div>
        <div style="height: calc(100% - 122px)">
        <EditUser/>
        </div>
      </div>
    </div>

    <!-- <q-card dark bordered class="bg-grey-9">
        <q-card-section>
          <div class="text-h6">添加新用户</div>
          <q-btn color="purple" label="保存" />
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <q-checkbox dense v-model="orange" label="Orange" color="orange" />
        </q-card-section>
      </q-card> -->

     <!-- <q-drawer
      v-model="editUserAuthorityDrawer"
      side="right"
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area class="fit">
        <q-tab-panels
      v-model="panel"
      animated
      swipeable
      vertical
    >
      <q-tab-panel name="addUserAuthoiy">
        <div class="text-h6">添加新用户</div>

      </q-tab-panel>

      <q-tab-panel name="updateUserAuthoiy">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="text-h6">Movies</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
      </q-scroll-area>
    </q-drawer> -->
    <!-- <q-btn v-permission="['function_edit']" small round push glossy dense icon="edit" color="primary" @click="editFunction(props.value)"></q-btn>
    <q-btn v-permission="['function_del']" small round push glossy dense icon="delete" color="red" @click="delFunction(props.value)"></q-btn> -->
  </q-page>
</template>

<script>
import DepartmentTree from '../../../components/user/DepartmentTree'
import UserList from '../../../components/user/UserList'
import EditUser from '../../../components/user/EditUser'
import * as Menu from '../../../data/menu'
export default {
  name: 'PageIndex',
  components: {
    DepartmentTree,
    UserList,
    EditUser
  },
  data () {
    return {
      currentPage: 1,
      searchDepartment: '', // 搜索部门
      departmentTicked: [],
      tickStrategy: 'leaf', // 部门tree模式
      panel: 'addUserAuthoiy',
      orange: true,
      editUserAuthorityDrawer: true,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ],
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      }
    }
  },
  created () {
    this.filterPrimaryMenu()
  },
  methods: {
    filterDepartment(node, filter) {
      return node.label && node.label.toLowerCase().indexOf(filter) !== -1
    },

    filterPrimaryMenu() {
      const resultMenu = Menu.adminMenu.filter(item => {
        return !item.children
        // if (!item.children) {
        //   return item
        // }
      })
      console.log(77, resultMenu)
    },
    getTableList () {
      localStorage.setItem('isAdmin', 0)
      localStorage.setItem('permission', JSON.stringify(['function_edit', 'function_add']))
    },
    handleTreeNodeClick() {
      console.log('node')
    },
    handleUserItemClick(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
>>>.text-primary{
  display: flex;
  justify-content: space-between;
}
</style>
