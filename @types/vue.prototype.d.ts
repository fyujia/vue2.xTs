export {}; // 这句不能删
declare module "vue/types/vue" {
  interface Vue {
    $name: string;
    component: (arg0: string, arg1: VueConstructor<Vue>) => void;
    prototype: {
      $name: string;
    };
  }
}
