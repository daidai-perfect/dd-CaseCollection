<template>
  <div class="home-container" :lang="lang">
    <div class="banner">
      <header>
        <div class="webheader">
          <div class="logo animate__animated animate__fadeIn">
            <img src="~/assets/images/logo-zerone@2x.png"/>
          </div>
          <!-- <nav class="animate__animated animate__fadeIn">
            <a>{{$t('header.ProductService')}}</a>
            <a>{{$t('header.CustomerCase')}}</a>
            <a>{{$t('header.link')}}</a>
          </nav> -->
          <!-- <SelectLanguage></SelectLanguage> -->
          <nav class="animate__animated animate__fadeIn">
              <div @click="openList">
                <span>{{$t('header.ProductService')}}</span>
                <img src="~/assets/images/arrow-down-nor@2x.png"/>
              </div>
              <ul class="service-list" v-show="isShow" @click="closeList">
                <li>
                  <a href="/SpotTradingSystem">{{$t("home.servicecon1")}}</a>
                  <a href="/ContractTradingSystem">{{$t("home.servicecon2")}}</a>
                  <a href="/WalletCloudSystem">{{$t("home.servicecon3")}}</a>
                  <a href="/OTCTradingSystem">{{$t("home.servicecon4")}}</a>
                  <a href="/SmartContractDevelopment">{{$t("home.servicecon5")}}</a>
                </li>
                <li>
                  <a href="/DeFiApplicationDevelopment">{{$t("home.servicecon6")}}</a>
                  <a href="/DigitalCurrencyWalletDevelopment">{{$t("home.servicecon7")}}</a>
                  <a href="/BlockchainPublicChainDevelopment">{{$t("home.servicecon8")}}</a>
                  <a href="/QuantitativeStrategyAndMarketMakingServices">{{$t("home.servicecon9")}}</a>
                </li>
              </ul>
              <a href="/CustomerCase">{{$t('header.CustomerCase')}}</a>
              <span class="linkSpan" @click="jump">{{$t('header.link')}}</span>
              <SelectLanguage></SelectLanguage>
            </nav>
        </div>
      </header>
      <div class="center">
        <div class="left">
          <h3 class="title animate__animated animate__backInLeft">
            {{$t("home.bannerTit")}}
          </h3>
          <p class="titleo">
            {{$t("home.bannerTit1")}}
          </p>
          <p class="con animate__animated animate__backInLeft">{{$t('home.bannerCon')}}</p>
          <div @click="jump">
            <div class="button">
              <span>{{$t("footer.link")}}</span>
              <!-- <img src="~/assets/newimg/contact.png" alt=""> -->
            </div>
          </div>
        </div>
        <div class="service animate__animated animate__fadeIn">
          <img class="titclass" src="~assets/newimg/bannertit.png" alt="">
          <h3 class="title">{{$t("home.service")}}</h3>
          <div class="center">
            <ul class="list">
              <li>
                <div class="img-box">
                  <a href="/SpotTradingSystem"><img src="~/assets/images/icon_System1@2x.png"/></a>
                </div>
                <a href="/SpotTradingSystem"><p>{{$t("home.servicecon1")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/ContractTradingSystem"><img src="~/assets/images/icon_System2@2x.png"/></a>
                </div>
                <a href="/ContractTradingSystem"><p>{{$t("home.servicecon2")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/WalletCloudSystem"><img src="~/assets/images/icon_System3@2x.png"/></a>
                </div>
                <a href="/WalletCloudSystem"><p>{{$t("home.servicecon3")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/OTCTradingSystem"><img src="~/assets/images/icon_System4@2x.png"/></a>
                </div>
                <a href="/OTCTradingSystem"><p>{{$t("home.servicecon4")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/SmartContractDevelopment"><img src="~/assets/images/icon_System5@2x.png"/></a>
                </div>
                <a href="/SmartContractDevelopment"><p>{{$t("home.servicecon5")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/DeFiApplicationDevelopment"><img src="~/assets/images/icon_System6@2x.png"/></a>
                </div>
                <a href="/DeFiApplicationDevelopment"><p>{{$t("home.servicecon6")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/DigitalCurrencyWalletDevelopment"><img src="~/assets/images/icon_System7@2x.png"/></a>
                </div>
                <a href="/DigitalCurrencyWalletDevelopment"><p>{{$t("home.servicecon7")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/BlockchainPublicChainDevelopment"><img src="~/assets/images/icon_System8@2x.png"/></a>
                </div>
                <a href="/BlockchainPublicChainDevelopment"><p>{{$t("home.servicecon8")}}</p></a>
              </li>
              <li>
                <div class="img-box">
                  <a href="/QuantitativeStrategyAndMarketMakingServices"><img src="~/assets/images/icon_System9@2x.png"/></a>
                </div>
                <a href="/QuantitativeStrategyAndMarketMakingServices"><p>{{$t("home.servicecon9")}}</p></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <div class="ourAdvantage animate__animated animate__fadeIn">
      <img class="titclass" src="~assets/newimg/tit.png" alt="">
      <h3 class="title">{{$t('home.advantageTitadd')}}</h3>
      <div class="center">
        <div class="content">
          <div class="content1">
            <div class="top1">
              <p>{{$t('home.ourAdvantagetit1')}}</p>
            </div>
            <div class="buttom">
              <p>{{$t('home.ourAdvantagecon1')}}</p>
            </div>
          </div>
          <div class="content1 content2">
            <div class="top2">
              <p>{{$t('home.ourAdvantagetit2')}}</p>
            </div>
            <div class="buttom">
              <p>{{$t('home.ourAdvantagecon2')}}</p>
            </div>
          </div>
          <div class="content1 content3">
            <div class="top3">
              <p>{{$t('home.ourAdvantagetit3')}}</p>
            </div>
            <div class="buttom">
              <p>{{$t('home.ourAdvantagecon3')}}</p>
            </div>
          </div>
          <div class="content1">
            <div class="top4">
              <p>{{$t('home.ourAdvantagetit4')}}</p>
            </div>
            <div class="buttom">
              <p>{{$t('home.ourAdvantagecon4')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

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
    
  </div>
</template>
<script>

import SelectLanguage from '../../components/select-language';
// import '../../assets/css/index/swiper.css'
// import {swiper,swiperSlide} from 'vue-awesome-swiper'

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
  watch:{
    lang:{
      immediate:true,
      handler:'langWatch'
    },
  },
  mounted() {
    // this.swiper.slideTo(0, 0, false);
  },
  methods:{
    jump(){
      let scene_dom = document.querySelector('.link-jump');
      let scene_top = Math.floor(scene_dom.getBoundingClientRect().top);
      this.scrollTo(scene_top);
      this.timer2 = setTimeout(()=>{
        document.getElementById("contactUs").classList.add('active')
      },300)
      
      this.timer2 = setTimeout(()=>{
        document.getElementById("contactUs").classList.remove('active')
      },1200)
      // this.timer1 = setTimeout(()=>{
      //   this.isActive = true;
      // },200)
      // this.timer2 = setTimeout(()=>{
      //   this.isActive = false;
      // },800)
      // clearTimeout(timer);
    },
    scrollTo(num) {
      window.scrollTo({
        top: num,
        behavior: 'smooth',
      });
    },
    openList() {
      // this.isShow = true;
      this.isShow=!this.isShow
    },
    closeList() {
      this.isShow = false;
    },
    langWatch(newVal){
      if(newVal){
        this.swiperOption.text = this.$t('home.customercon1'); 
      }
    },
    switchLang(lang) {
      setCookie('lang', lang);
      this.$store.dispatch('setLanguage', lang);
      this.$i18n.locale = lang;
      this.isShow = false;
    },
    selectPerson(index) {
      this.currentPerson = index;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer1,this.timer2)
  }
}
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  .center {
    width: 1097px;
    margin: 0 auto;
  }
  .banner {
    min-width: 1200px;
    height: 1637px;
    // display: flex;
    // align-items: center;
    background: url('~assets/newimg/mainbanner_bg@2x.png') 50% no-repeat;
    background-size:cover;
    header {
      background: none;
      .webheader {
        width: 1097px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 60px;
        .logo {
          img {
            width: 117px;
          }
        }
        // nav {
        //   flex: 1;
        //   display: flex;
        //   align-items: center;
        //   justify-content: flex-end;
        //   .dropdown-box {
        //     margin-right: 24px;
        //   }
        //   >a {
        //     font-size: 14px;
        //     color: #ACACAC;
        //     margin-right: 24px;
        //   }
        // }
        nav {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          .service-list {
            position: absolute;
            right:30px;
            top: 30px;
            background: rgba( #000,0.8);
            width: 570px;
            z-index: 99999;
            display: flex;
            li {
              height:200px;
              line-height: 40px;
              color:#ACACAC;
              padding: 0px 0px 0 30px;
              cursor: pointer;
              font-size: 12px;
              display: flex;
              flex-direction: column;
              &:hover {
                // background: lighten($color: #272A38, $amount: 5);
              }
              &:nth-child(2){
                margin-left: -130px;
              }
              a{
                width: 290px;
                font-size: 12px;
                font-weight: 400;
                color: #FFFFFF;
                line-height:40px;
              }
            }
          }
          >a {
            font-size: 14px;
            // color: #ACACAC;
            color: #fff;
            margin-left: 30px;
          }
          a{
            cursor:pointer;
          }
          span{
            font-size: 14px;
            // color: #ACACAC;
            color: #fff;
            cursor:pointer;
          }
          .linkSpan{
            margin:0 40px 0 54px;
          }
          img {
            width: 14px;
            margin-left: 4px;
            margin-right: 24px;
            cursor:pointer;
          }
        }
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items:flex-start;
      .service {
        // min-width: 1200px;
        position: relative;
        .titclass{
          width: 115px;
          height: 64px;
          color:#fff;
          position: absolute;
          top: 155px;
          left: 0;
          right: 0;
          margin:0 auto;
        }
        .title {
          width: 100%;
          color: #fff;
          text-align: center;
          padding-top: 30px;
          font-size: 18px;
          font-weight: 500;
          line-height: 22px;
        }
        .center{
          width: 1097px;
          margin: 0 auto;
          }
          
        .list {
          display: flex;
          // flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          li {
            width: 33%;
            text-align: center;
            margin-top: 48px;
            .img-box {
              img {
                width: 202px;
                height: 202px;
              }
            }
            p {
              width: 65%;
              margin: 0 auto;
              font-size: 16px;
              color: #fff;
            }
          }
        }
      }
    }
    .title {
      font-size: 40px;
      color: #FFFFFF;
      font-weight: 700;
      width: 575px;
      margin-top: 144px;
    }
    .titleo{
      font-size: 38px;
      font-weight: bold;
      // color: #fff;
      line-height: 42px;
      margin-top: 20px;
      background: linear-gradient(to right, #0038FF 30%, #00FBC0 60%);
      background-clip: text;
      color: transparent;
      // background-color: angular-gradient(270deg, #00FBC0 50%, #0038FF 80%);
    }
    .con {
      font-size: 16px;
      color: #ACACAC;
      line-height: 1.6;
      margin-top: 60px;
      width: 438px;
    }
    .button{
      cursor: pointer;
      width:180px;
      height: 40px;
      border-radius: 32px;
      background: #0038FF;
      line-height: 40px;
      margin-top: 50px;
      text-align: center;
      font-weight: bold;
      color: #fff;
    }
  }  
  
  .ourAdvantage {
    min-width: 1200px;
    min-height: 650px;
    background: #ffffff;
    padding-top: 90px;
    border-radius: 50px;
    position: relative;
    // background: url('~assets/images/bg4@2x.png') 50% no-repeat;
    // background-size:cover;
    .titclass{
      width: 115px;
      height: 64px;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      margin:0 auto;
    }
    .title{
      height: 22px;
      font-size: 18px;
      font-weight: 500;
      color: #0F358E;
      line-height: 22px;
      text-align: center;
      margin-bottom: 80px;
    }
    .center {
      text-align: center;
      .content2{
        margin: 0 10px;
      }
      .content3{
        margin: 0 10px;
      }
      .content{
        display: flex;
        justify-content: center;
        padding-bottom: 70px;
        .content1{
        width: 260px;
        height: 440px;
        background: #FFFFFF;
        border: 1px solid rgba(0, 145, 255, 0.1);   
        .top1{
          width: 260px;
          height: 140px;
          background: url('~assets/newimg/img-1@2x.png');
          background-size: 100% 100%;
          p{
            width: 60%;
            padding: 30px 0 50px 20px;
            text-align: left;
            font-size: 14px;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 21px;
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
          }
        }
        .top2{
          width: 260px;
          height: 140px;
          background: url('~assets/newimg/img-2@2x.png');
          background-size: 100% 100%;
          p{
            width: 83%;
            padding: 30px 0 50px 20px;
            text-align: left;
            font-size: 14px;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 21px;
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
          }
        }
        .top3{
          width: 260px;
          height: 140px;
          background: url('~assets/newimg/img-3@2x.png');
          background-size: 100% 100%;
          p{
            width: 76%;
            padding: 30px 0 50px 20px;
            text-align: left;
            font-size: 14px;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 21px;
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
          }
        }
        .top4{
          width: 260px;
          height: 140px;
          background: url('~assets/newimg/img-4@2x.png');
          background-size: 100% 100%;
          p{
            width: 60%;
            padding: 30px 0 50px 20px;
            text-align: left;
            font-size: 14px;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 21px;
            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
          }
        }
        .buttom{
          p{
            // width: 220px;
            height: 240px;
            padding: 20px;
            text-align: left;
            font-size: 12px;
            font-weight: 400;
            color: #000000;
            line-height: 22px;
            line-height: 20px;
          }
        }
        .content2{
          .top{
            background: url('~assets/images/advan2.png') !important;
          }
        }
      }
      }
    }
  }
  .customer {
    min-width: 1200px;
    height: 684px;
    background: url('~assets/newimg/bg5@2x.png') 50% no-repeat;
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
  
}

@keyframes flashing {
  from {
    box-shadow: 0px 0px 1px 1px rgba(#FFD89E, 0.8);
  }
  to {
    box-shadow: 0px 0px 5px 5px rgba(#FFD89E, 0.8);
  }
}
@media screen and (max-width: 750px) {

}
</style>
