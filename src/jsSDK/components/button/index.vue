<template>
  <button class="it-button" @click="handleClick" :class="[
      type ? 'it-button--' + type : ''
    ]">
    <template v-if="icon">
      <img v-if="icon=='weChat'" class="it-button-icon" src="./images/weChat.png" alt="">
    </template>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name:'itButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="scss" scoped>
.it-button {
  display: inline-block;
  line-height: 18px;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .it-button-icon {
    margin-right: 5px;
    width: 20px;
    height: auto;
  }
}
.it-button--default {
  background: #4d43d7;
  border-color: #4d43d7;
  color: #fff;
}
.it-button--success {
  background: #07c160;
  border-color: #07c160;
  color: #fff;
}
</style>