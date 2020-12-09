<template>
  <q-page class="q-pa-lg" style="height:100px;">
    <div class="row fit">
      <!-- 角色列表 -->
      <div class="col-md-3 full-height q-pr-md">
        <!-- <div style="height: calc(100% - 110px)"> -->
          <q-scroll-area class="fit rounded-borders shadow-3"  bordered>
        <q-list class="bg-white rounded-borders" bordered>
          <q-item-label header>管理员</q-item-label>
      <q-item v-for="contact in contacts" :key="contact.id" class="q-my-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="delete" color="red-5" />
        </q-item-section>
      </q-item>

      <q-separator />
      <q-item-label header>商家</q-item-label>

      <q-item v-for="contact in offline" :key="contact.id" class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="`https://cdn.quasar.dev/img/${contact.avatar}`">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="delete" color="red-5" />
        </q-item-section>
      </q-item>
    </q-list>
</q-scroll-area>
        <!-- </div> -->
      </div>

      <!-- 添加/修改角色 -->
      <div class="col-md-9 full-height">
        <div class="row q-pl-md">
          <q-btn color="secondary" label="添加角色" />
        </div>
        <div style="height: calc(100% - 50px)">
        <EditRole/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const roleList = [
  {
    name: '商家',
    createTime: '20201012 09:02:03',
    bgColor: 'bg-deep-orange-5',
    statusColor: 'green'
  }
]

const contacts = [{
  id: 1,
  name: 'Ruddy Jedrzej',
  email: 'rjedrzej0@discuz.net',
  letter: 'R'
}, {
  id: 2,
  name: 'Mallorie Alessandrini',
  email: 'malessandrini1@marketwatch.com',
  letter: 'M'
}, {
  id: 3,
  name: 'Elisabetta Wicklen',
  email: 'ewicklen2@microsoft.com',
  letter: 'E'
}, {
  id: 4,
  name: 'Seka Fawdrey',
  email: 'sfawdrey3@wired.com',
  letter: 'S'
}]

const offline = [{
  id: 5,
  name: 'Brunhilde Panswick',
  email: 'bpanswick4@csmonitor.com',
  avatar: 'avatar2.jpg'
}, {
  id: 6,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}, {
  id: 7,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}, {
  id: 8,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}, {
  id: 9,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}, {
  id: 10,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}, {
  id: 11,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}, {
  id: 12,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}, {
  id: 13,
  name: 'Winfield Stapforth',
  email: 'wstapforth5@pcworld.com',
  avatar: 'avatar6.jpg'
}]

import EditRole from './EditRole'
export default {
  name: 'role-list',
  components: {
    EditRole
  },
  data() {
    return {
      contacts,
      offline,
      roleList: roleList,
      value: '启用'
    }
  },
  mounted() {

  },
  created() {

  }
}
</script>

<style lang="scss" scoped>

</style>
