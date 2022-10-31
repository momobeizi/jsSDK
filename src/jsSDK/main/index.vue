<template>
  <component :is="activeComponent" @curfinished="handlerFinished"></component>
</template>

<script>
import login from '@/jsSDK/login/loginSdk.vue';
import auth from '@/jsSDK/auth/authSdk.vue';
export default {
  name: 'mainIndex',
  props: {
    el: String,
    ability: Array,
    appId: [String, Number],
    success: Function
  },
  components: {
    login,
    auth
  },
  data () {
    return {
      activeComponent: ''
    }
  },
  created () {
    this.activeComponent = this.ability[0]
  },
  methods: {
    handlerFinished (componentName) {
      let lastChild = this.ability[this.ability.length - 1]
      if (this.ability.length > 1 && lastChild != componentName) {
        let index = this.ability.indexOf(componentName);
        this.activeComponent = this.ability[index + 1]
      } else {
        this.success && this.success();
      }
    }
  }
}
</script>

<style>

</style>