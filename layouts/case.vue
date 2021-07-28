<template>
  <div class="layout-contianer">
    <PHeader></PHeader>
    <div class="body">
      <nuxt />
    </div>
  </div>
</template>
<script>
import PHeader from "~/components/header.vue";
export default {
  name: "case",
  components: {
    PHeader,
  },
};
</script>
<style lang="scss">
.layout-contianer {
  display: flex;
  flex-direction: column;
}
</style>
