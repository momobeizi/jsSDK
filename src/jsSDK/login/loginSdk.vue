<template>
  <div class="login-container">
    <it-input v-model="condition.account" placeholder="请输入手机号"></it-input>
    <it-input v-model="condition.veriCode" placeholder="请输入验证码"></it-input>
    <it-button class="login-btn" @click="login">登录</it-button>
    <it-button type="success" icon="weChat" class="wx-login-btn">微信授权登录</it-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      condition: {
        account: '',
        veriCode: ''
      }
    }
  },
  watch: {
    input (o, n) {
      console.log(n)
    }
  },
  methods: {
    login () {
      console.log("登录")
      this.$emit("curfinished", 'login')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  .login-btn {
    margin-top: 15px;
  }
  .wx-login-btn {
    margin-top: 15px;
  }
}
</style>