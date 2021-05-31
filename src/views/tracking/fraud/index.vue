<template>
  <div class="browser">
    <div class="app-cont">
      <!-- <div class="address_info">
        <span>资产追踪</span>
      </div>-->
      <el-card class="tran-card">
        <div class="address_info">
          <span>资产追踪</span>
        </div>
        <div class="desc">
          <p
            class="address"
          >链审科技针对利用数字货币进行相关犯罪的案件，提供从区块链地址到实际控制人的全方面追踪。司法机构只需要提供涉案的数字货币信息，链审科技将利用大数据和独有的标签库，锁定涉案资金的去向，以及定位犯罪嫌疑人的真实身份。</p>
        </div>
        <!-- <el-button type="primary" @click="fetchData" class="agree_button">确定</el-button>
        <div class="operation">-->
        <el-row>
          <el-col :span="24">
            <div class="move">
              <div @mouseleave="mous(1)" @mouseenter="mous2(1)">
                <div v-show="!currencyMove">
                  <el-card class="operCard operCardOne">
                    <!-- <img src="@/assets/img/iocn2@2x.png" /> -->
                    <span class="operCardSpan">数字货币追踪</span>
                  </el-card>
                  <!-- <el-button class="operButotn" type="text">数字货币追踪</el-button> -->
                </div>
                <div v-show="currencyMove">
                  <div class="flex-cont_hide" @click="changeStatus('/fraud/preparationFile')">
                    <!-- <div>
                      <p class="flex-desc">电信、网络诈骗案件</p>
                      <div class="flex-data" >
                        <p class="btn-border" style="font-size:20px," @click="changeStatus('/fraud/preparationFile')">数字货币追踪</p>
                      </div>
                    </div>-->
                    <p class="flex-desc">电信、网络诈骗案件</p>
                    <p class="flex-desc">数字货币追踪服务</p>
                    <div class="flex-data" style="margin-top:20px">
                      <p class="btn-border">数字货币追踪</p>
                    </div>
                  </div>
                </div>
              </div>
              <div @mouseleave="mous(2)" @mouseenter="mous2(2)">
                <div v-show="!moneyMove">
                  <el-card class="operCard">
                    <!-- <img src="@/assets/img/iocn2@2x.png" /> -->
                    <span class="operCardSpan">资产盘监控</span>
                  </el-card>
                  <!-- <el-button class="operButotn" type="text">资金盘监控</el-button> -->
                </div>
                <div v-show="moneyMove">
                  <div
                    class="flex-cont_hide"
                    @click="changeStatus('/fraud/preparationFileMonitor')"
                  >
                    <!-- <p class="flex-desc"></p>
                    <p class="flex-desc"></p>

                    <div class="flex-data" >
                    <p class="btn-border" ></p>-->
                    <p class="flex-desc">网络传销、网络赌博非法集资</p>
                    <p class="flex-desc">等案件的资金定位、监控</p>
                    <div class="flex-data" style="margin-top:20px">
                      <p class="btn-border">资金盘监控</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      helpVisble: false,
      exchangeName: "",
      form: {},
      status: 1,
      currencyMove: false,
      moneyMove: false
    };
  },
  methods: {
    changeStatus(routeName) {
      this.$router.push({
        path: routeName
      });
    },
    mous(status) {
      switch (status) {
        case 1:
          this.currencyMove = false;
          break;
        case 2:
          this.moneyMove = false;
          break;
      }
    },
    mous2(status) {
      console.log("chufale");
      switch (status) {
        case 1:
          this.currencyMove = true;
          break;
        case 2:
          this.moneyMove = true;
          break;
      }
    }
  }
};
</script>

<style scoped>
.btn-border {
  /* height: 50px; */
  margin: 0 auto;
  /* line-height: 50px; */
  cursor: pointer;
  color: white;
  font-size: 20px !important;
}
.title {
  font-size: 24px;
  color: #0ea7ff;
  font-weight: 700;
  margin-bottom: 20px;
}
.flex-cont {
  width: 300px;
  height: 200px;
  /* background: rgb(19, 90, 245); */
  display: flex;
  justify-content: space-around;
  padding-top: 25px;
}
.flex-cont_hide {
  transition: all 1.75s ease-in-out;
  width: 320px;
  height: 223px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* justify-content: space-around; */
  background: #196dff;
}

.flex-data {
  /* margin-top: 20px; */
  background: #14469d;
  padding: 0 24px;
  width: 200px;
  height: 52px;
  line-height: 52px;
  text-align: center;
}
.flex-desc {
  color: white;
  font-size: 16px;
  margin: 5px;
  height: 40px;
}

/deep/ .el-button--text {
  color: #333333;
}
.operCard {
  width: 320px;
  height: 223px;
  cursor: pointer;
  padding-top: 158px;
  background: #eaf1fd url("../../../assets/img/iocn2@2x.png") 40px 30px/240px
    130px no-repeat;
}
.operCardOne {
  background: #eaf1fd url("../../../assets/img/icon1@2x.png") 40px 30px/240px
    130px no-repeat;
}
.operCardSpan {
  font-size: 20px;
  font-family: "PingFangSC-Medium";
  font-weight: 500;
}
/* .operCard img {
  display: block;
	width: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
} */
.desc {
  width: 90%;
  /* text-align: center; */
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 120px;
}
.address {
  margin-bottom: 10px;
  line-height: 35px;
  color: #333333;
  text-indent: 35px;
}
.move {
  display: flex;
  justify-content: space-evenly;
  /* align-items: flex-end; */
  margin-top: 20px;
  text-align: center;
}
/* .operButotn {
  height: 100px;
  width: 160px;
  font-size: 22px;
} */
.explainImg {
  width: 50%;
  height: 800px;
}
.explainCont {
  text-align: center;
  margin-top: 20px;
}
.explain {
  font-size: 21px;
  margin-top: 0;
}
/* .startButton {
  width: 100px;
} */
/deep/ .el-col-3 {
  width: 10%;
}
/deep/ .el-col-10 {
  line-height: 3;
}
.operation {
  margin-bottom: 20px;
}
.file {
  font-weight: 550;
}
.file_email {
  margin-right: 50px;
}
.file_txt {
  margin-top: 40px;
  margin-bottom: 30px;
}
.file_txt p {
  text-indent: 30px;
}
.file_txt_title {
  text-indent: 10px !important;
}
.box-card {
  margin-top: 30px;
}
.selectType {
  width: 400px;
  height: 40px;
}
/deep/ .el-input__inner {
  background: #f5f5f5;
}
.agree_button {
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
}
.tran-card {
  /* height: 100%; */
  margin-top: 30px;
  height: 89%;
  font-size: 23px;
  background: url("../../../assets/smallBack.png") no-repeat 100% 100%/100% 100%
    white;
  display: flex;
}
/deep/ .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
.overview-card {
  width: 100%;
  height: 100%;
}
.overview_info {
  margin-top: 30px;
  width: 100%;
  height: 226px;
}
.transactions_info {
  margin-top: 25px;
  width: 100%;
  height: 552px;
  margin-bottom: 25px;
}
.address_info span {
  font-family: PingFangSC-Medium;
  font-size: 24px;
  vertical-align: middle;
  font-weight: 400;
  line-height: 30px;
}
.address_info {
  position: relative;
  left: 10px;
}
.app-cont {
  width: 73%;
  margin: 0 auto;
  color: white;
  margin-top: 25px;
}
.browser {
  width: 100%;
  height: 100%;
  display: flex;
}
.address {
  /* padding-left: 18px; */
}
/deep/ .el-form-item__label {
  font-size: 23px;
}
/deep/ .el-icon-question {
  font-size: 23px;
  cursor: pointer;
  color: black;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  .address_info {
    position: relative;
    left: 10px;
  }
  .desc {
    width: 90%;
    /* text-align: center; */
    margin: 0 auto;
    margin-top: 30px;
  }
  .address {
    margin-bottom: 10px;
    line-height: 35px;
    color: #333333;
  }
  .move {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  /* .operButotn {
    height: 80px;
    width: 120px;
  } */
  /* .explainImg {
    width: 50%;
    height: 800px;
  } */
  .explainCont {
    text-align: center;
    margin-top: 20px;
  }
  .explain {
    font-size: 21px;
    margin-top: 0;
  }
  /* .startButton {
  width: 100px;
} */
  /deep/ .el-col-3 {
    width: 10%;
  }
  /deep/ .el-col-10 {
    line-height: 3;
  }
  .operation {
    margin-bottom: 20px;
  }
  .file {
    font-weight: 550;
  }
  .file_email {
    margin-right: 50px;
  }
  .file_txt {
    margin-top: 40px;
    margin-bottom: 30px;
  }
  .file_txt p {
    text-indent: 30px;
  }
  .file_txt_title {
    text-indent: 10px !important;
  }
  .box-card {
    margin-top: 30px;
  }
  .selectType {
    width: 400px;
    height: 40px;
  }
  /deep/ .el-input__inner {
    background: #f5f5f5;
  }
  .agree_button {
    display: block;
    margin-top: 20px;
    margin-bottom: 8px;
  }
  .tran-card {
    /* height: 100%; */
    margin-top: 30px;
    height: 89%;
    background: url("../../../assets/smallBack.png") no-repeat white;
    font-size: 18px;
    display: flex;
  }
  /deep/ .el-card__header {
    background: #e5e9ef;
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    color: #151c2c;
    line-height: 16px;
  }
  .overview-card {
    width: 100%;
    height: 100%;
  }
  /deep/ .el-card__body {
    width: 100%;
  }
  .overview_info {
    margin-top: 30px;
    width: 100%;
    height: 226px;
  }
  .transactions_info {
    margin-top: 25px;
    width: 100%;
    height: 552px;
    margin-bottom: 25px;
  }
  .address_info span {
    font-family: PingFang-SC-Bold;
    font-size: 20px;
    color: #ffffff;
    vertical-align: middle;
  }
  .app-cont {
    width: 90%;
    margin: 0 auto;
    color: white;
    margin-top: 57px;
  }
  .browser {
    width: 100%;
    height: 100%;
    display: flex;
  }
  /deep/ .el-form-item__label {
    font-size: 23px;
  }
  /deep/ .el-icon-question {
    font-size: 23px;
    cursor: pointer;
    color: black;
  }
  .operCard {
    width: 120px;
    height: 120px;
    cursor: pointer;
    padding-top: 87px;
    background: #eaf1fd url("../../../assets/img/iocn2@2x.png") 10px 20px/100px
      70px no-repeat;
  }
  .operCardOne {
    background: #eaf1fd url("../../../assets/img/icon1@2x.png") 10px 20px/100px
      70px no-repeat;
  }
}
</style>
