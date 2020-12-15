<template>
  <q-page class="q-pa-lg" style="height:100px;">
    <div class="row fit">
      <!-- 角色列表 -->
      <div class="col-md-3 full-height q-pr-md">
        <!-- <div style="height: calc(100% - 110px)"> -->
          <q-scroll-area class="fit rounded-borders shadow-3"  bordered>
        <q-list>
      <template v-for="(item,index) in roleList">
          <q-item-label header :key="item.role">{{item.role}}</q-item-label>
            <q-item v-for="contact in item.list" :key="contact.id" class="q-my-sm" :active=" activeRoleItem === contact.id" active-class="bg-purple-1" clickable v-ripple @click="handleRoleItemClick(contact.id)">
              <q-item-section avatar>
                <q-avatar v-if="item.id === 1" color="primary" text-color="white">
                  {{ contact.letter }}
                </q-avatar>
                <q-avatar v-else>
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

      <q-separator :key="item.role+index"/>
      </template>
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
import { roleList } from '../../../data/user'
import EditRole from './EditRole'
export default {
  name: 'role-list',
  components: {
    EditRole
  },
  data() {
    return {
      activeRoleItem: '',
      roleList: roleList,
      value: '启用'
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    handleRoleItemClick(roleId) {
      this.activeRoleItem = roleId
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
