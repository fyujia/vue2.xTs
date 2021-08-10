<template>
  <div>
    <div class="loading" v-if="loading">
      <img src="@img/1.gif" title="jocker" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  props: {
    loading: { type: Boolean, required: true },
  },
  mounted() {
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  img {
    display: block;
    width: 25px;
    height: 25px;
    margin: 40vh auto;
  }
}
</style>
