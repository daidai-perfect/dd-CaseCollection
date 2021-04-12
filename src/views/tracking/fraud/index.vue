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
              <div
                @click="changeStatus('/fraud/preparationFile')"
                @mouseleave="mous"
                @mouseenter="mous2"
              >
                <div v-if="currencyMove==false">
                  <el-card class="operCard">
                    <img src="@/assets/btc.png" />
                  </el-card>
                  <el-button class="operButotn" type="text">数字货币追踪</el-button>
                </div>
                <div :class="currencyMove?'currencyMove':'default'">
                  <el-card class="operCard">
                    <img src="@/assets/btc.png" />
                  </el-card>
                  <el-button class="operButotn" type="text">数字货</el-button>
                </div>
              </div>

              <el-tooltip
                class="item"
                effect="dark"
                content="我们提供针对各类涉及数字货币的网络传销、网络赌博案件和非法集资案件的资金流向查控、沉淀资金定位及监控服务。。"
                placement="top-start"
              >
                <div @click="changeStatus('/fraud/preparationFileMonitor')">
                  <el-card class="operCard">
                    <img src="@/assets/opertion.png" />
                  </el-card>
                  <el-button class="operButotn" type="text">资金盘监控</el-button>
                </div>
              </el-tooltip>
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
      currencyMove: false
    };
  },
  methods: {
    changeStatus(routeName) {
      this.$router.push({
        path: routeName
      });
    },
    mous() {
      console.log(123);
      // this.currencyMove=true;

      this.currencyMove = false;
    },
    mous2() {
      console.log(456);
      this.currencyMove = true;
    }
  }
};
</script>

<style scoped>
.default {
  display: none;
}
.currencyMove {
  display: block;
}
/deep/ .el-button--text {
  color: #333333;
}
.operCard {
  width: 196px;
  height: 158px;
  cursor: pointer;
}
.operCard img {
  width: 120px;
  height: 120px;
}
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
  align-items: flex-end;
  margin-top: 20px;
  text-align: center;
}
.operButotn {
  height: 100px;
  width: 160px;
  font-size: 22px;
}
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
  background: url("../../../assets/smallBack.png") no-repeat white;
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
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  vertical-align: middle;
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
  .operButotn {
    height: 80px;
    width: 120px;
  }
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
  /deep/ .el-form-item__label {
    font-size: 23px;
  }
  /deep/ .el-icon-question {
    font-size: 23px;
    cursor: pointer;
    color: black;
  }
}
</style>