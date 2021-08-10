<template>
  <div>
    <div class="loading" v-if="loading">
      <img src="@img/1.jpg" title="jocker"/>
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
  mounted() {},
  methods: {},
});
</script>

<style></style>
