<template>
<div class="fit">
    <q-input class="bg-white"
        ref="searchUser"
        filled
        v-model="searchUser"
        label="搜索用户手机号或昵称"
    />
    <q-scroll-area class="fit"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
    <q-list class="rounded-borders bg-white">
      <template v-for="(item,index) in 3">
          <!-- <q-item-label header :key="index">{{item}}</q-item-label> -->
        <template v-for="j in 5">
          <q-item clickable v-ripple :key="`item-${index}${j}`" :active=" j == 1 " active-class="bg-purple-1" @click="handleUserItemClick(j)">
            <q-item-section avatar>
              <!-- <q-avatar icon="folder" color="primary" text-color="white" /> -->
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section top class="gt-sm">
              <!-- <q-item-label class="q-mt-sm">后台管理员</q-item-label> -->
              <q-item-label class="q-mt-sm">15607109327</q-item-label>
            </q-item-section>

            <q-item-section top>
              <q-item-label lines="1">
                <span class="text-weight-medium">会飞的鱼</span>
              </q-item-label>
              <q-item-label caption lines="1">
                后台管理员
              </q-item-label>
              <!-- <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
                <span class="cursor-pointer">Open in GitHub</span>
              </q-item-label> -->
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>2017 05:00:00</q-item-label>
              <div class="text-orange">
                <q-icon name="star" />
                <q-icon name="star" />
                <q-icon name="star" />
              </div>
              <q-item-label caption>23</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </template>
    </q-list>
    </q-scroll-area>
      <div class="q-pa-md flex flex-center">
        <q-pagination
          v-model="currentPage"
          color="teal"
          :max="10"
          :max-pages="6"
          :boundary-numbers="true"
        >
        </q-pagination>
      </div>
</div>
</template>

<script>
const userList = [
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
      searchUser: '', // 搜索用户：手机号||名称
      currentPage: 1, // 当前页
      userList: userList,
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
  methods: {
    resetSearchDepartment() {
      this.searchUser = ''
      this.$refs.searchUser.focus()
    }
  }
}
</script>
