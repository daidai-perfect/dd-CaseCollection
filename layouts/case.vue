<template>
  <div class="layout-contianer">
    <PHeader></PHeader>
    <div class="body">
      <div class="top"></div>
      <div class="buttom"></div>
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
  .top {
    width: 80%;
    height: 500px;
    margin: 50px auto;
  }
}
</style>
