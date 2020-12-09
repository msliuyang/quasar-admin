<template>
  <div class="fit">
    <div class="q-pa-md row items-center no-wrap">
      <div class="col">
        <div class="text-h6 text-grey">添加新用户信息</div>
      </div>

      <div class="col-auto">
        <q-btn color="primary" label="保存" />
      </div>
    </div>
    <q-separator inset />
    <q-scroll-area class="fit"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
      >

    <q-card class="fit" flat>
      <q-card-section>
        <q-form
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="userForm.name"
            label="请输入昵称"
            hint="* 昵称3-10个字符"
            autocorrect="off"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />

          <q-input
            filled
            type="number"
            v-model="userForm.telephone"
            label="请输入手机号"
            hint="* 手机号长度在11个字符"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please type your age',
              val => val > 0 && val < 100 || 'Please type a real telephone'
            ]"
          />

           <q-select clearable filled color="purple-12" v-model="userForm.department" :options="departmentOption" label="请选择部门">
             <template v-slot:before>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                </q-avatar>
              </template>
           </q-select>

           <q-select clearable filled color="purple-12" v-model="userForm.role" :options="roleOption" label="请选择角色">
             <template v-slot:before>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                </q-avatar>
              </template>
           </q-select>

          <!-- 角色菜单 -->
           <!-- <LeftMenuBar/> -->

           <q-list style="max-width: 350px">
            <q-item-label header>角色拥有菜单</q-item-label>

            <q-item disabled>
              <q-item-section avatar top>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">我的店铺</q-item-label>
                <!-- <q-item-label caption>February 22nd, 2019</q-item-label> -->
              </q-item-section>

              <q-item-section side>
                <q-icon name="info" color="green" />
              </q-item-section>
            </q-item>

            <q-item disabled>
              <q-item-section avatar top>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">我的商品</q-item-label>
                <!-- <q-item-label caption>February 22nd, 2019</q-item-label> -->
              </q-item-section>

              <q-item-section side>
                <q-icon name="info" color="green" />
              </q-item-section>
            </q-item>

            <q-item disabled>
              <q-item-section avatar top>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">我的佣金</q-item-label>
                <!-- <q-item-label caption>February 22nd, 2019</q-item-label> -->
              </q-item-section>

              <q-item-section side>
                <q-icon name="info" color="green" />
              </q-item-section>
            </q-item>

            <q-item disabled>
              <q-item-section avatar top>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">个人中心</q-item-label>
                <!-- <q-item-label caption>February 22nd, 2019</q-item-label> -->
              </q-item-section>

              <q-item-section side>
                <q-icon name="info" color="green" />
              </q-item-section>
            </q-item>

           </q-list>

          <!-- <q-field label="" standout :dense="true">
            <template v-slot:control> -->
              <!-- <q-radio keep-color v-model="userForm.role" val="seller" label="商家" color="orange" />
              <q-radio keep-color v-model="userForm.role" val="admin" label="管理员" color="red" />
              <q-radio keep-color v-model="userForm.role" val="other" label="其他" color="teal" /> -->
            <!-- </template>
          </q-field> -->

          <!-- <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
          </div> -->
        </q-form>
      </q-card-section>
    </q-card>
      </q-scroll-area>
  </div>
</template>

<script>
// const UserList = [

// ]

export default {
  data() {
    return {
      departmentOption: [
        '研发部', '财务部', '人力资源', '行政'
      ],
      roleOption: [
        '商家', '管理员', '平台客服', '运维', '测试'
      ],
      userForm: {
        name: '',
        telephone: '',
        department: '研发部',
        role: '商家'
      },
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
      this.userKey = ''
      this.$refs.userKey.focus()
    }
  }
}
</script>
