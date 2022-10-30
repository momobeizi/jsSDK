<template>
  <div>
    <el-input v-model="input" placeholder="请输入账号"></el-input>
    <el-button class="countdown-button">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '222'
    }
  }
}
</script>