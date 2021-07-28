<template>
  <div class="case-container">
    <div class="case-body">
      <div class="left-sidebar pc-left-sidebar">
        <span class="line"></span>
        <h3 class="title">CATEGORY</h3>
        <div class="list">
          <a href="#" :class="identification==1?'active':''" @click="otherCase(1)">
            <span>数字货币传销-Plus Token</span>
            <!-- <img src="@/assets/img/right@3x.png" /> -->
          </a>
          <a href="#" :class="identification==2?'active':''" @click="otherCase(2)">
            <span>数字货币诈骗-HT搬砖套利</span>
            <!-- <img src="@/assets/img/right@3x.png" /> -->
          </a>
          <a href="#" :class="identification==3?'active':''" @click="otherCase(3)">
            <span>数字货币洗钱-火币OTC</span>
            <!-- <img src="@/assets/img/right@3x.png" /> -->
          </a>
        </div>
      </div>
      <div class="case-main">
        <div class="top">
          <img src="../../assets/newimg/英文横logo@2x.png" alt="">
          <p class="con">行业案例</p>
          <span class="line"></span>
          <p class="con1">链审科技针对利用数字货币进行相关犯罪的案件，提供从区块链地址到实际控制人的全方面追踪。司法机构只需要提供涉案的数字货币信息，链审科技将利用大数据和独有的标签库，锁定涉案资金的去向，以及定位犯罪嫌疑人的真实身份。</p>
        </div>
        <div v-if="identification==1">
          <Case1></Case1>
        </div>
        <div v-else-if="identification==2">
          <Case2></Case2>
        </div>
        <div v-else-if="identification==3">
          <Case3></Case3>
        </div>
      </div>
      <span class="back" @click="$router.push({name:'industryCase'})">BACK</span>
    </div>
  </div>
</template>
<script>
import Case1 from "./case/case1.vue";
import Case2 from "./case/case2.vue";
import Case3 from "./case/case3.vue";

export default {
  name: "case-index",
  components: {
    Case1,
    Case2,
    Case3
  },
  watch: {
    // '$route': {
    //     handler: 'routeWatch',
    //     immediate: true
    // }
  },
  data() {
    return {
      showMenu: false,
      showH5Menu: false,
      identification: 1
    };
  },
  mounted() {
    if (this.$route.query.identification) {
      this.identification = this.$route.query.identification;
    }
  },
  methods: {
    toggleMenu() {
      this.showH5Menu = !this.showH5Menu;
    },
    otherCase(val) {
      this.identification = val;
    },
  }
};
</script>
<style lang="scss" scoped>
.case-body {
  background: white;
  position: relative;
  padding-bottom: 100px;
  .back{
    display: inline-block;
    width: 119px;
    height: 40px;
    line-height: 40px;
    background: #FFFFFF;
    border: 1px solid #288E86;
    border-radius: 25px;
    text-align: center;
    color: #000;
    cursor: pointer;
    position: absolute;
    left:0 ;
    right:0 ;
    margin: auto;
  }
  .left-sidebar{
    width: 370px;
    height: 222px;
    background: #EEEEEE;
    padding-left: 40px;
    position: fixed;
    top: 350px;
    right: 150px;
    .line{
      display: inline-block;
      width: 50px;
      height: 3px;
      background: #3BB094;
      margin: 40px 0 0px;
    }
    .title{
      font-size: 14px;
      font-weight: normal;
      color: #24344B;
    }
    .list{
      display: flex;
      flex-direction: column;
      a{
        text-decoration: none;
        font-size: 11px;
        color: #656A72;
        line-height: 30px;
      }
      .active{
        color: #3BB094;
      }
    }
  }
}
.case-container {
  .case-main {
    width: 743px;
    margin: 0px auto;
    padding-top: 60px;
    .top{
      width: 100%;
      background: #fff;
      text-align: center;
      img{
        width: 228px;
        height: 51px;
      }
      .con{
        font-size: 30px;
        font-weight: normal;
        color: #344257;
        letter-spacing:0px;
      }
      .con1{
        width:743px;
        font-size: 16px;
        font-weight: normal;
        color: #878888;
        line-height: 30px;
        margin: 20px auto 30px;
      }
    }
  }
}

@media screen and (max-width: 1300px) {

}

@media screen and (max-width: 750px) {

}
</style>