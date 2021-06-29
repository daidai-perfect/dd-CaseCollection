<template>
  <div class="home-container">111</div>
</template>
<script>
export default {
  name: "home",
  layout: "case",
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  .center {
    width: 1097px;
    margin: 0 auto;
  }
}

@keyframes flashing {
  from {
    box-shadow: 0px 0px 1px 1px rgba(#ffd89e, 0.8);
  }
  to {
    box-shadow: 0px 0px 5px 5px rgba(#ffd89e, 0.8);
  }
}
@media screen and (max-width: 750px) {
}
</style>
