<template>
  <div class="it-input">
    <input class="it-input__inner" type="text" ref="input" v-bind="$attrs" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'itInput',
  data () {
    return {

    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value);
    },
  }
}
</script>

<style lang="scss" scoped>
.it-input {
  width: 100%;
  height: 75px;
  .it-input__inner {
    background-image: none;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #dcdfe6;
    box-sizing: border-box;
    display: inline-block;
    line-height: 75px;
    height: 75px;
    font-size: 20px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    color: #000;
    outline: 0;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &::placeholder {
      font-weight: 400;
      color: #c1c0c6;
    }
  }
}
</style>