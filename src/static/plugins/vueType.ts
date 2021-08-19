import { VueConstructor } from "vue/types";

type VueType = {
  prototype: { $name: string };
  component: (arg0: string, arg1: VueConstructor<Vue>) => void;
};

export default VueType;
