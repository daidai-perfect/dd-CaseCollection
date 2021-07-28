<template>
  <div class="home-container">
    <div class="top">
      <div class="center">
        <div class="swiper-pagination" slot="pagination"></div>
        <div v-swiper:mySwiper="swiperOption" style="display: flex">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="~assets/images/banner_bg@2x.png" alt="" />
            </div>
          </div>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="~assets/images/lunbotu.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttom"></div>
  </div>
</template>
<script>
export default {
  name: "home",
  layout: "case",
  data() {
    return {
      swiperOption: {
        text: this.$t("home.customercon1"),
        watchSlidesVisibility: true,
        pagination: ".swiper-pagination1",
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        spaceBetween: 0,
        onSlideChangeEnd: (swiper) => {
          //放swiper的回调方法
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        },
        //自动播放
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        //指示点
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        //循环
        loop: true,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  .center {
    width: 1097px;
    margin: 0 auto;
  }
  .top {
    width: 1097px;
    margin: 150px auto;
    position: relative;
    .swiper-pagination {
      position: absolute;
      top: 500px;
      left: 500px;
      z-index: 99999;
      /deep/.swiper-pagination-bullet {
        background: #fff;
        opacity: 0.8;
        margin: 0 10px;
      }
      /deep/.swiper-pagination-bullet-active {
        background: blue;
        opacity: 0.8;
      }
    }
    .swiper-wrapper {
      img {
        width: 800px;
        height: 400px;
        margin-left: 150px;
      }
    }
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
