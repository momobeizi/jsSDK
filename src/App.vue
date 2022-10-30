<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="jssdk"></div>
  </div>
</template>

<script>
import jsSDK from "@/jsSDK/index.js"
export default {
  name: 'App',
  mounted () {
    /* eslint-disable */
    jsSDK.init({
      el: "#jssdk",
      ability: 'login',
      success: function () {
        top.location.href = "https://www.baidu.com";
      }
    },
      function () {
        console.log("初始化完成");
      })
    console.log(jsSDK)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
