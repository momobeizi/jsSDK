# jssdk

 [TOC]
# 背景介绍
本文主要介绍使用vue、elementUI开发一个有登录、以及其他功能的jsSDK包，给第三方的人调用，方便第三方用户集成开发。
# 实操步骤
## 初始化项目
### 1. 初始化vue 项目
`vue create jssdk`
具体操作请查阅[vue-cli-创建一个项目](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)或其相关博客内容
### 2. 查阅vue-cli构建目标内容
查阅地址[vue-cli-构建目标](https://cli.vuejs.org/zh/guide/build-targets.html)
### 3. 具体操作步骤
#### 1. 在package.json文件中添加命令
```
  "lib": "vue-cli-service build --target lib --inline-vue --name jssdk src/jssdk/index.js"
```
其中 `--name` 后是包名，以及入口路径
#### 2. 添加入口文件
新建`src>jsSDK>index.js`
```js
/* eslint-disable no-unused-vars */
import Vue from "vue";
import { Button, Input } from "element-ui";
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
        ability: 'login',
        success: Function
      };
    }
    this.options = Object.assign({}, options);
    console.log(this.options)
    const el = this.options.el;
    new Vue({
      render: (h) => h(require(`./${options.ability}/${options.ability}Sdk.vue`).default, { props: this.options }),
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
```
其中我们引用了elementUI的组件，还需要进行一些elementUI按需引入的配置参考[elementUI官网介绍](https://element.eleme.cn/#/zh-CN/component/quickstart)
#### 3. 效果图
最后实际效果图如下：![](https://img2022.cnblogs.com/blog/2814255/202210/2814255-20221030114252257-1408378706.png)
代码目录：
![](https://img2022.cnblogs.com/blog/2814255/202210/2814255-20221030114337234-1142739048.png)

## github demo地址
`https://github.com/momobeizi/jsSDK.git`
