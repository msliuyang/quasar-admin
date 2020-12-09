<template>
  <div class="fit">
    <q-input class="bg-white"
            ref="seatchDeparmentName"
            filled
            v-model="searchDepartment"
            label="搜索部门名称"
        >
        <template v-slot:append>
          <q-icon v-if="searchDepartment !== ''" name="clear" class="cursor-pointer" @click="resetSearchDepartment" />
        </template>
        </q-input>
        <q-scroll-area class="fit"
          :thumb-style="thumbStyle"
          :bar-style="barStyle"
        >
        <div class="q-pa-md bg-grey-10">
          <q-tree
            :nodes="departMentList"
            node-key="label"
            ref="deparmentTree"
            dark
            default-expand-all
            :tick-strategy="tickStrategy"
            :ticked.sync="departmentTicked"
            :filter="searchDepartment"
            :filter-method="filterDepartment"
            @update:ticked="handleDepartmentTreeSelect"
          >
          <template v-slot:default-header="prop">
            <div class="row items-center" style="flex:1">
              <q-icon :name="prop.node.icon || 'share'" color="secondary" size="20px" class="q-mr-sm" />
              <div class="text-primary flex justify-between  items-center" style="flex:1">
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
        </div>
        </q-scroll-area>
  </div>
</template>

<script>
const departMentList = [
  {
    label: '人力资源',
    avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
    children: [
      {
        label: '人事',
        icon: 'restaurant_menu',
        children: [
          { label: '助理' },
          { label: 'Good recipe' }
        ]
      },
      {
        label: '人事1',
        icon: 'restaurant_menu',
        children: [
          { label: '助理' },
          { label: 'Good recipe' }
        ]
      },
      {
        label: '人事2',
        icon: 'restaurant_menu',
        children: [
          { label: '助理' },
          { label: 'Good recipe' }
        ]
      },
      {
        label: '人事3',
        icon: 'restaurant_menu',
        children: [
          { label: '助理' },
          { label: 'Good recipe' }
        ]
      },
      {
        label: '行政',
        icon: 'room_service',
        disabled: false,
        children: [
          { label: '专员' },
          { label: 'Professional waiter' }
        ]
      },
      {
        label: '研发',
        icon: 'photo',
        children: [
          {
            label: '一部',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
          },
          { label: '二部' },
          { label: '三部' }
        ]
      }
    ]
  }
]

export default {
  data() {
    return {
      searchDepartment: '', // 搜索部门
      tickStrategy: 'leaf', // 部门tree模式
      departmentTicked: [], // 已选节点
      departMentList: departMentList,
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#FF9800',
        width: '5px',
        opacity: 0.75
      },
      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#FF9800',
        width: '9px',
        opacity: 0.2
      }
    }
  },
  methods: {
    resetSearchDepartment() {
      this.searchDepartment = ''
      this.$refs.seatchDeparmentName.focus()
    },
    filterDepartment(node, filter) {
      return node.label && node.label.toLowerCase().indexOf(filter) !== -1
    },
    handleDepartmentTreeSelect(val, node, data) {
      console.log(val, node, data)
    }
  }
}
</script>
