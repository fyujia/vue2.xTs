import App from "./App.vue";
import Vue from "vue";
import router from "vue-router";
import index from "./index";

index();

new Vue({
  render: (h) => h(App),
  // @ts-ignore  忽略下一行ts语法检查
  router,
}).$mount("#app");

Vue.prototype.$name = 'Cool UI'

if (module.hot) {
  // ts报错：NodeModules上不存在hot属性 解决：npm install --save-dev @types/webpack-env
  module.hot.accept();
}
