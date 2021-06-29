<template>
  <div class="customer animate__animated animate__fadeIn">
      <div class="center">
        <h3 class="title">{{$t("home.casetit")}}</h3>
        <a href="/CustomerCase">
          <div class="content">
            <div class="swiper-pagination"  slot="pagination"></div>
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="slide-left">
                      <div class="logo">
                        <img src="~assets/images/img_logo@2x.png" alt="">
                      </div>
                      <!-- <p>{{$t("home.customercon2")}}</p> -->
                      <p>{{swiperOption.text}}</p>
                    </div> 
                    <img class="img1" src="~assets/images/img_ABIT@2x.png" />
                  </div>
                  <div class="swiper-slide">
                    <div class="slide-left">
                      <div class="logo">
                        <img src="~assets/images/ufologo.png" alt="">
                      </div>
                      <p>{{$t("home.customercon2")}}</p>
                    </div> 
                    <img class="img2" id="imageslide" src="~assets/images/lunbotu.png" />
                  </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
</template>
<script>
export default {
  name: 'home',
  components: {
    SelectLanguage,
  },
  data() {
    return {
      timer1:'',
      timer2:'',
      swiperOption: {
          text:this.$t('home.customercon1'),
          watchSlidesVisibility: true,
          pagination: '.swiper-pagination1',
          slidesPerView: 1,
          spaceBetween: 30,
          centeredSlides: false,
          spaceBetween: 0,
          onSlideChangeEnd: swiper => {
            //放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          },
          //自动播放
          // autoplay:{
          //   delay:3000,
          //   disableOnInteraction:false
          // },
          //指示点
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          //循环
          loop:true,
      },
          currentImg: 0,
          imgList: [
            'swap-img@2x.png',
            'trading-icon@2x.png',
            'income-icon@2x.png',
            'assets-icon@2x.png'
          ],
          currentPerson: 0,
          isSmall: false,
          screenWidth: 0,
          isShow:false
    };
  },
  computed:{
    lang(){
      // console.log(this.$store.state.locale,'this.$store.state.locale##1111');
      return this.$store.state.locale;
    },
  },
}
</script>
<style lang="scss" scoped>
.customer {
    min-width: 1200px;
    height: 684px;
    // background: url('~assets/newimg/bg5@2x.png') 50% no-repeat;
    background-size: cover;
    .center{
      display: flex;
      flex-direction: column;
      position: relative;
      width: 1200px;
      margin: 0 auto;
      .title {
        height: 22px;
        font-size: 18px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 22px;
        margin-top: 120px;
        margin-left:50px;
      }
      .content{
        width: 1200px;
        position: absolute;
        top: 80px;
        left: 0px;
        .swiper-pagination{
          width: 30px;
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: 420px;
          left: 40px;
          /deep/ .swiper-pagination-bullet{
            background: #fff !important;
          }
          /deep/ .swiper-pagination-bullet-active{
            background: #007aff !important;
          }
        }
        .swiper-wrapper{
          .swiper-slide{
            position: relative;
            display: flex;
            .slide-left{
              padding: 130px 0 0 0 ;
              .logo{
                padding: 40px 0 0 50px;
                img{
                  width: 127px;
                  height: 35px;
                }
              }
              p{
                width: 430px;
                padding: 20px 0 0 50px;
                color: #fff;
                font-size: 14px;
                line-height: 20px;
              }
            }
            .img1{
              width: 740px;
              height: 560px;
              // margin-top: 80px;
            }
            .img2{
              width: 700px;
              height: 420px;
              margin:65px  0 0 20px;
            }
          }
        }
      }
    }
  }

@media screen and (max-width: 750px) {
}
</style>
