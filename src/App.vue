<template>
  <div @click="clkBtn" id="app">
    <p>
      {{ msg }}
    </p>
    <co-loading :loading="loading"></co-loading>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      loading: true,
      msg: "this is a simple Vue Project !",
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  },
  methods: {
    clkBtn() {
      console.log(this);
      console.log(this.$name);
    },
  },
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
body {
  margin: 0;
}
</style>
