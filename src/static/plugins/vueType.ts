import { VueConstructor } from "out/production/Cool UI/node_modules/vue/types";

type VueType = {
  prototype: { $name: string };
  component: (arg0: string, arg1: VueConstructor<Vue>) => void;
};

export default VueType;
