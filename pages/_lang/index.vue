<template>
  <div class="home-container" :lang="lang">
    <div class="banner">
      <header>
        <div class="webheader">
          <div class="logo animate__animated animate__fadeIn">
            <img src="~/assets/images/logo.png" />
          </div>
          <nav class="animate__animated animate__fadeIn">
            <div @click="openList">
              <span>{{ $t("header.ProductService") }}</span>
              <img src="~/assets/images/arrow-down-nor@2x.png" />
            </div>
            <ul class="service-list" v-show="isShow" @click="closeList">
              <li>
                <a href="/SpotTradingSystem">{{ $t("home.servicecon1") }}</a>
                <a href="/ContractTradingSystem">{{
                  $t("home.servicecon2")
                }}</a>
                <a href="/WalletCloudSystem">{{ $t("home.servicecon3") }}</a>
                <a href="/OTCTradingSystem">{{ $t("home.servicecon4") }}</a>
                <a href="/SmartContractDevelopment">{{
                  $t("home.servicecon5")
                }}</a>
              </li>
              <li>
                <a href="/DeFiApplicationDevelopment">{{
                  $t("home.servicecon6")
                }}</a>
                <a href="/DigitalCurrencyWalletDevelopment">{{
                  $t("home.servicecon7")
                }}</a>
                <a href="/BlockchainPublicChainDevelopment">{{
                  $t("home.servicecon8")
                }}</a>
                <a href="/QuantitativeStrategyAndMarketMakingServices">{{
                  $t("home.servicecon9")
                }}</a>
              </li>
            </ul>
            <span @click="caseJump">{{ $t("header.CustomerCase") }}</span>
            <span class="linkSpan" @click="jump">{{ $t("header.link") }}</span>
            <SelectLanguage></SelectLanguage>
          </nav>
        </div>
      </header>
      <div class="center">
        <div class="left">
          <h3 class="title animate__animated animate__backInLeft">
            {{ $t("home.bannerTit") }}
          </h3>
          <p class="titleo">
            {{ $t("home.bannerTit1") }}
          </p>
          <!-- <p class="con animate__animated animate__backInLeft">
            {{ $t("home.bannerCon") }}
          </p> -->
          <div @click="jump">
            <div class="button">
              <span>{{ $t("footer.link") }}</span>
              <!-- <img src="~/assets/newimg/contact.png" alt=""> -->
            </div>
          </div>
        </div>
        <div class="service animate__animated animate__fadeIn">
          <img class="titclass" src="~assets/newimg/bannertit.png" alt="" />
          <h3 class="title">{{ $t("home.service") }}</h3>
          <div class="center">
            <ul class="list">
              <li><a href="/case">轮播图</a></li>
              <li><a href="">复制组件</a><Copy :copyInfo ='copyinfo'></Copy></li>
              <li><a href="/border-color">边框颜色渐变</a></li>
              <li><a href="">轮播图</a></li>
              <li><a href="/case">轮播图</a></li>
              <li><a href="/case">轮播图</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectLanguage from "../../components/select-language";
import Copy from "../../components/copy";
// import '../../assets/css/index/swiper.css'
// import {swiper,swiperSlide} from 'vue-awesome-swiper'

export default {
  name: "home",
  components: {
    SelectLanguage,
    Copy
  },
  data() {
    return {
      timer1: "",
      timer2: "",
      copyinfo:'复制组件',
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
        // autoplay:{
        //   delay:3000,
        //   disableOnInteraction:false
        // },
        //指示点
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        //循环
        loop: true,
      },
      currentImg: 0,
      imgList: [
        "swap-img@2x.png",
        "trading-icon@2x.png",
        "income-icon@2x.png",
        "assets-icon@2x.png",
      ],
      currentPerson: 0,
      isSmall: false,
      screenWidth: 0,
      isShow: false,
    };
  },
  computed: {
    lang() {
      // console.log(this.$store.state.locale,'this.$store.state.locale##1111');
      return this.$store.state.locale;
    },
  },
  watch: {
    lang: {
      immediate: true,
      handler: "langWatch",
    },
  },
  mounted() {
    // this.swiper.slideTo(0, 0, false);
  },
  methods: {
    caseJump() {
      let scene_dom = document.querySelector(".service");
      let scene_top = Math.floor(scene_dom.getBoundingClientRect().top);
      this.scrollTo(scene_top);
    },
    jump() {
      let scene_dom = document.querySelector(".link-jump");
      let scene_top = Math.floor(scene_dom.getBoundingClientRect().top);
      this.scrollTo(scene_top);
      this.timer2 = setTimeout(() => {
        document.getElementById("contactUs").classList.add("active");
      }, 300);

      this.timer2 = setTimeout(() => {
        document.getElementById("contactUs").classList.remove("active");
      }, 1200);
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
        behavior: "smooth",
      });
    },
    openList() {
      // this.isShow = true;
      this.isShow = !this.isShow;
    },
    closeList() {
      this.isShow = false;
    },
    langWatch(newVal) {
      if (newVal) {
        this.swiperOption.text = this.$t("home.customercon1");
      }
    },
    switchLang(lang) {
      setCookie("lang", lang);
      this.$store.dispatch("setLanguage", lang);
      this.$i18n.locale = lang;
      this.isShow = false;
    },
    selectPerson(index) {
      this.currentPerson = index;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer1, this.timer2);
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
  .banner {
    min-width: 1200px;
    height: 1637px;
    // display: flex;
    // align-items: center;
    background: url("~assets/newimg/mainbanner_bg@2x.png") 50% no-repeat;
    background-size: cover;
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
            height: 50px;
          }
        }
        nav {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          .service-list {
            position: absolute;
            right: 30px;
            top: 30px;
            background: rgba(#000, 0.8);
            width: 570px;
            z-index: 99999;
            display: flex;
            li {
              height: 200px;
              line-height: 40px;
              color: #acacac;
              padding: 0px 0px 0 30px;
              cursor: pointer;
              font-size: 12px;
              display: flex;
              flex-direction: column;
              &:hover {
                // background: lighten($color: #272A38, $amount: 5);
              }
              &:nth-child(2) {
                margin-left: -130px;
              }
              a {
                width: 290px;
                font-size: 12px;
                font-weight: 400;
                color: #ffffff;
                line-height: 40px;
              }
            }
          }
          > a {
            font-size: 14px;
            // color: #ACACAC;
            color: #fff;
            margin-left: 30px;
          }
          a {
            cursor: pointer;
          }
          span {
            font-size: 14px;
            // color: #ACACAC;
            color: #fff;
            cursor: pointer;
          }
          .linkSpan {
            margin: 0 40px 0 54px;
          }
          img {
            width: 14px;
            margin-left: 4px;
            margin-right: 24px;
            cursor: pointer;
          }
        }
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .service {
        // min-width: 1200px;
        position: relative;
        .titclass {
          width: 115px;
          height: 64px;
          color: #fff;
          position: absolute;
          top: 155px;
          left: 0;
          right: 0;
          margin: 0 auto;
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
        .center {
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
            margin-top: 60px;
            a {
              color: rgb(0, 192, 211);
            }
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
      color: #ffffff;
      font-weight: 700;
      width: 575px;
      margin-top: 144px;
    }
    .titleo {
      font-size: 38px;
      font-weight: bold;
      // color: #fff;
      line-height: 42px;
      margin-top: 20px;
      background: linear-gradient(to right, #0038ff 30%, #00fbc0 60%);
      background-clip: text;
      color: transparent;
      // background-color: angular-gradient(270deg, #00FBC0 50%, #0038FF 80%);
    }
    .con {
      font-size: 16px;
      color: #acacac;
      line-height: 1.6;
      margin-top: 60px;
      width: 438px;
    }
    .button {
      cursor: pointer;
      width: 180px;
      height: 40px;
      border-radius: 32px;
      background: #0038ff;
      line-height: 40px;
      margin-top: 50px;
      text-align: center;
      font-weight: bold;
      color: #fff;
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
