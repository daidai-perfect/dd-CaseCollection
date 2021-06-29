<template>
  <div class="layout-contianer" :lang='lang'>
    <!-- <PHeader></PHeader> -->
    <div class="body">
      <nuxt />
    </div>
    <PFooter></PFooter>
  </div>
</template>
<script>
// import PHeader from '~/components/header.vue';
import PFooter from '~/components/footer.vue';

export default {
  components: {
    // PHeader,
    PFooter
  },
  computed:{
    lang(){
      console.log(this.$store.state.locale,'this.$store.state.locale##');
      return this.$store.state.locale;
    },
  },
  mounted() {
    // this.$store.dispatch('setCurrentAddress');
  }
}
</script>
<style lang="scss">
.layout-contianer {
  display: flex;
  flex-direction: column;
}
</style>
