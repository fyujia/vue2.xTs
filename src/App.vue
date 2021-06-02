<template>
  <div @click="clkBtn">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: "this is a simple Vue Project !",
    };
  },
  mounted() {},
  methods: {
    clkBtn() {
      console.log(this);
      console.log(this.$name);
    },
  },
});
</script>

<style></style>
