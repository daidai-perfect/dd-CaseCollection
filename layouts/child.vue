<template>
  <div class="child-contianer">
    <PHeader></PHeader>
    
    <div class="mainContent">
      <nuxt />
    </div>
    <PFooter></PFooter>
    
  </div>
</template>
<script>
import PHeader from '~/components/header.vue';
import PFooter from '~/components/footer.vue';

export default {
  components: {
    PHeader,
    PFooter,
  }
}
</script>
<style lang="scss">

.child-contianer {
  display: flex;
  flex-direction: column;
}

</style>
