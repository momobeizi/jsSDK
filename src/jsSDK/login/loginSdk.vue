<template>
  <div>
    <el-input v-model="input" placeholder="请输入账号"></el-input>
    <el-button class="countdown-button" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '222'
    }
  },
  methods:{
    login(){
      console.log("登录")
      this.$emit("curfinished",'login')
    }
  }
}
</script>