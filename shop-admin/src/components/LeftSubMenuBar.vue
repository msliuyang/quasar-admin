<template>
  <div>
    <div v-for="(item,index) in routerPath" :key="index">
    <!-- 当菜单item标识为 ItemLabel 时，显示Label_text，不渲染为菜单 -->
      <!-- <q-item-label v-if="item.isItemLabel" header class="text-weight-bold text-uppercase">
        {{item.Label_text}}
      </q-item-label> -->

      <template v-if="item.children">
          <q-expansion-item
            expand-separator
            :header-inset-level="initLevel"
            :to="item.path"
            :icon="item.icon"
            :label="item.label"
          >
          <!-- 进入下一次递归 -->
          <LeftSubMenuBar :router-path="item.children" :init-level="initLevel+0.3"/>
          </q-expansion-item>
      </template>

      <template v-else>
        <q-expansion-item
          :header-inset-level="initLevel"
          expand-icon="1"
          :to="item.path"
          :icon="item.icon"
          :label="item.label"
        >
        </q-expansion-item>
      </template>

    </div>
  </div>
</template>

<script>

export default {
  name: 'LeftSubMenuBar',
  data () {
    return {}
  },
  props: ['routerPath', 'initLevel']
}
</script>
