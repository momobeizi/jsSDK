<template>
  <div>
    <el-button @click="finishedAuth">实名完成</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    finishedAuth () {
      this.$emit('curfinished', 'auth')
    }
  }
}
</script>
