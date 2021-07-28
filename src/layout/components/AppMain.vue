<template>
  <div class="back">
    <router-view />
  </div>
</template>

<!--<script>
// import * as utils from "@/utils/mobile";
// var mo = function(e) {
//   e.preventDefault();
// };
// export default {
//   watch: {
//     $route(to, from) {
//       this.isBrowser(to);
//     }
//   },
//   mounted() {
//     this.isBrowser(this.$route);
//   },
//   methods: {
//     isBrowser(to) {
//       console.log(to);
//       if (utils.isMobile() && to.meta.title == "浏览器测试") {
//         document.body.style.overflow = "hidden";
//         document.addEventListener("touchmove", mo, false); //禁止页面滑动
//       } else {
//         document.body.style.overflow = ""; //出现滚动条
//         document.removeEventListener("touchmove", mo, false);
//       }
//     }
//   }
// };
// </script>
-->

<style scoped>
.back {
  /* height: 100%; */
  width: 100%;
  margin-top: 125px;
  /* background-color: #eee; */
}
@media screen and (max-width: 750px) {
  .back {
    margin-top: 0;
  }
}
</style>