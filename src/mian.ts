import App from "./App.vue";
import Vue from "vue";
import router from "vue-router";
import index from "./index";
import prototype from "./static/plugins/myPlugin";

index();

Vue.use(prototype);

new Vue({
  render: (h) => h(App),
  // @ts-ignore  忽略下一行ts语法检查
  router,
}).$mount("#app");

if (module.hot) {
  // ts报错：NodeModules上不存在hot属性 解决：npm install --save-dev @types/webpack-env
  module.hot.accept();
}
