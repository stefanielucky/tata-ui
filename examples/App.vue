<template>
  <div id="app">
    <hm-button type="success" @click="visible=true">显示登录框</hm-button>
    <hm-dialog title="用户登录" :visible.sync="visible" width="30%">
      <hm-form :model="model" label-width="80px">
        <hm-form-item label="用户名">
          <hm-input v-model="model.username" placeholder="请输入用户名" clearable></hm-input>
        </hm-form-item>
        <hm-form-item label="用户密码">
          <hm-input v-model="model.password" placeholder="请输入用户密码" show-password></hm-input>
        </hm-form-item>
        <hm-form-item label="即时配送">
          <hm-switch v-model="model.soon" active-color="green" inactive-color="red"></hm-switch>
        </hm-form-item>
        <hm-form-item label="爱好">
          <hm-checkbox-group v-model="model.hobby">
            <hm-checkbox label="篮球"></hm-checkbox>
            <hm-checkbox label="足球"></hm-checkbox>
            <hm-checkbox label="乒乓球"></hm-checkbox>
          </hm-checkbox-group>
        </hm-form-item>
        <hm-form-item label="性别">
          <hm-radio-group v-model="model.gender">
            <hm-radio label="1">男</hm-radio>
            <hm-radio label="0">女</hm-radio>
          </hm-radio-group>
        </hm-form-item>
      </hm-form>
      <template v-slot:footer>
        <hm-button type="primary" @click="login">登录</hm-button>
        <hm-button @click="visible=false">取消</hm-button>
      </template>
    </hm-dialog>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      visible: false,
      model: {
        username: '',
        password: '',
        soon: '',
        hobby: [],
        gender: '0'
      }
    }
  },
  methods: {
    login () {
      alert('登录成功，退出')
      this.visible = false
    }
  }
}
</script>

<style lang="scss">
</style>
