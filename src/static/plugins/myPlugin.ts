/**
 * Vue 提供的插件注册机制很简单，
 * 每个插件都需要实现一个静态的install方法，
 * 当我们执行Vue.use注册插件的时候，就会执行这个install方法，
 * 并且在这个install方法的第一个参数我们可以拿到Vue对象，
 * 这样的好处就是作为插件的编写方不需要再额外去import Vue了
 */

import loading from "@/componments/loading/loading.vue";
import { VueConstructor } from "vue";
export default function(Vue: {
  prototype: { $name: string };
  component: (arg0: string, arg1: VueConstructor<loading>) => void;
}) {
  Vue.prototype.$name = "Cool UI";
  Vue.component("coLoading", loading);
}
