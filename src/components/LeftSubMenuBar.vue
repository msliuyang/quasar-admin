<template>
  <div>
    <div v-for="(item,index) in routerPath" :key="index">
    <!-- 当菜单item标识为 ItemLabel 时，显示Label_text，不渲染为菜单 -->
      <!-- <q-item-label v-if="item.isItemLabel" header class="text-weight-bold text-uppercase">
        {{item.Label_text}}
      </q-item-label> -->

      <template v-if="item.children">
        <q-expansion-item :to="item.path" :header-class=" activeMenu === item.path ? 'text-primary' : 'text-white'" @click="handleMenuItem(item)">
         <template v-slot:header>
          <q-item-section avatar>
            <q-avatar :icon="item.icon" color="primary" text-color="white" size="24px"/>
          </q-item-section>

          <q-item-section>
            {{item.label}}
          </q-item-section>
        </template>
        <!-- 进入下一次递归 -->
        <LeftSubMenuBar :router-path="item.children" :init-level="initLevel+0.3"/>
        </q-expansion-item>
      </template>

      <template v-else>
        <q-expansion-item :to="item.path" expand-icon="1"
        :header-inset-level="initLevel"
        exact
        :active="true"
        :header-class=" activeMenu === item.path ? 'text-primary' : 'text-white'"
         @click="handleMenuItem(item)">
         <template v-slot:header>
          <q-item-section avatar>
            <q-avatar :icon="item.icon" color="primary" text-color="white" size="24px"/>
          </q-item-section>
          <q-item-section>
            {{item.label}}
          </q-item-section>
        </template>
        </q-expansion-item>
      </template>

    </div>
  </div>
</template>

<script>

export default {
  name: 'LeftSubMenuBar',
  data () {
    return {
      activeMenu: ''
    }
  },
  props: ['routerPath', 'initLevel'],
  methods: {
    handleMenuItem(item) {
      this.activeMenu = item.path
      console.log(item)
    }
  },
  created() {
    this.activeMenu = this.$route.path
    console.log(this.$route)
  }
}
</script>

<style lang="scss" scoped>
.q-item__section--avatar{
  min-width: auto;
}
</style>
