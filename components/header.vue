<template>
    <header>
        <div class="webheader">
            <div class="logo animate__animated animate__fadeIn">
                <!-- <button @click="goHome"><img src="~/assets/images/logo-zerone@2x.png"/></button> -->
                <a href="/home"><img src="~/assets/images/logo-zerone@2x.png"/></a>
            </div>
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
                <!-- <li @click="goHome('/ContractTradingSystem')">{{$t("home.servicecon2")}}</li>
                <li @click="goHome('/WalletCloudSystem')">{{$t("home.servicecon3")}}</li>
                <li @click="goHome('/OTCTradingSystem')">{{$t("home.servicecon4")}}</li>
                <li @click="goHome('/SmartContractDevelopment')">{{$t("home.servicecon5")}}</li>
                <li @click="goHome('/DeFiApplicationDevelopment')">{{$t("home.servicecon6")}}</li>
                <li @click="goHome('/DigitalCurrencyWalletDevelopment')">{{$t("home.servicecon7")}}</li>
                <li @click="goHome('/BlockchainPublicChainDevelopment')">{{$t("home.servicecon8")}}</li>
                <li @click="goHome('/QuantitativeStrategyAndMarketMakingServices')">{{$t("home.servicecon9")}}</li> -->
              </ul>
              <a href="/CustomerCase">{{$t('header.CustomerCase')}}</a>
              <span class="linkSpan" @click="jump">{{$t('header.link')}}</span>
              <SelectLanguage></SelectLanguage>
            </nav>
        </div>
    </header>
</template>
<script>
import SelectLanguage from '@/components/select-language';
export default {
  name: 'p-header',
  components: {
    SelectLanguage,
  },
  data() {
    return {
      timer1:'',
      timer2:'',
      isShow:false
    }
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
    },
    scrollTo(num) {
      window.scrollTo({
        top: num,
        behavior: 'smooth',
      });
    },
    goHome(url){
      this.$router.push(url);
    },
    openList() {
      // this.isShow = true;
      this.isShow=!this.isShow
    },
    closeList() {
      this.isShow = false;
    },
  },
  beforeDestroy() {
    clearInterval(this.timer1,this.timer2)
  }
}
</script>
<style lang="scss" scoped>
header {
  background: rgb(6, 3, 36);
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
        button{
            background: transparent;
            img {
                width: 117px;
            }
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
            margin-right: 30px;
          }
        }
      }
      >a {
        font-size: 14px;
        // color: #ACACAC;
        color: #fff;
        margin-left:30px;
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
@media screen and (max-width: 750px) {
}
</style>
