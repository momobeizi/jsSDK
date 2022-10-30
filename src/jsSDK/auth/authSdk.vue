<template>
  <div>
    <it-button @click="finishedAuth">实名完成</it-button>
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
