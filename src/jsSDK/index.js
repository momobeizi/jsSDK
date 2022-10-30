/* eslint-disable no-unused-vars */
import Vue from "vue";
import { Button, Input } from "element-ui";
import main from "@/jsSDK/main/index.vue"
Vue.use(Button);
Vue.use(Input);


class jsSDK {
  constructor(options, callback) {
    if (!jsSDK.instance) {
      jsSDK.render(options, callback);
      jsSDK.instance = this;
    }
  }

  static render (options, callback) {
    if (options === void 0) {
      options = {
        el: "#app",
        appId: "",
        ability: ['login'],
        success: Function
      };
    }
    this.options = Object.assign({}, options);
    console.log(this.options)
    const el = this.options.el;
    new Vue({
      render: (h) => h(main, { props: this.options }),
      props: {
        ...options
      },
      mounted () {
        callback && callback();
      }
    }).$mount(el);
  }

  static init (options, callback) {
    if (!this.instance) {
      this.instance = new jsSDK(options, callback);
    }
    return this.instance;
  }
}

export default jsSDK;