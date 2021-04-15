<template>
  <div class="browser">
    <div class="app-cont">
      <!-- <div class="address_info">
        <span>数字货币追踪-准备材料</span>
      </div>-->
      <el-card class="tran-card">
        <div class="address_info">
          <span>数字货币追踪-准备材料</span>
        </div>
        <div class="flex-cont">
          <div class="stepIer">
            <div class="stepCont">
              <div class="numRadius">1</div>
              <div class="dashLine"></div>
              <div class="step">
                <img src="@/assets/address.png" />
                <p>
                  嫌疑人数字货币收款地址
                  <i class="el-icon-question" @click="seeDetail(1)" />
                </p>
              </div>
            </div>
            <div class="stepCont">
              <div class="numRadius">2</div>
              <div class="dashLine"></div>
              <div class="step">
                <img src="@/assets/moneyDai.png" />
                <p>
                  转账币种及金额
                  <i class="el-icon-question" @click="seeDetail(2)" />
                </p>
              </div>
            </div>
            <!-- <div class="dashLine"></div> -->
            <div class="stepCont">
              <div class="numRadius">3</div>
              <div class="step">
                <img src="@/assets/date.png" />
                <p>
                  转账时间
                  <i class="el-icon-question" @click="seeDetail(3)" />
                </p>
              </div>
            </div>
          </div>
          <el-row style="text-align:center;">
            <el-col :span="24">
              <el-button type="primary" class="startButton" @click="fetchData">我已准备好</el-button>
            </el-col>
          </el-row>
        </div>
        <!-- <el-steps :active="3" align-center>
          <el-step>
            <div slot="title">
              <img src="@/assets/address.png" />
              <p>嫌疑人数字货币收款地址</p>
            </div>
          </el-step>
          <el-step>
            <div slot="title">
              <img src="@/assets/moneyDai.png" />
              <p>嫌疑人数字货币收款地址</p>
            </div>
          </el-step>
          <el-step>
            <div slot="title">
              <img src="@/assets/date.png" />
              <p>嫌疑人数字货币收款地址</p>
            </div>
          </el-step>
        </el-steps>-->
        <!-- <el-form :model="form" size="small" label-width="auto" label-position="left">
          <el-row :gutter="24" class="submitRow">
            <el-col :span="24">
              <el-form-item label="嫌疑人数字货币收款地址">
                <i class="el-icon-question" @click="seeDetail(1)" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="submitRow">
            <el-col :span="24">
              <el-form-item label="转账币种及金额">
                <i class="el-icon-question" @click="seeDetail(2)" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="submitRow">
            <el-col :span="24">
              <el-form-item label="转账时间">
                <i class="el-icon-question" @click="seeDetail(3)" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>-->
        <!-- <el-button type="primary" @click="fetchData" class="agree_button">确定</el-button>
        <div class="operation">-->
      </el-card>
    </div>
    <el-dialog title="说明/帮助" :visible.sync="helpVisble" width="50%" class="helpDialog">
      <div v-if="status==1">
        <p class="explain">
          嫌疑人数字货币收款地址：是指数字货币流向了哪个地址。在电信诈骗案件中，是嫌疑人向受害者提供的收款地址。在灰产和洗钱案件中，是负责发货的嫌疑人提供的收款地址。
          以IMtoken钱包为例，下图划线部分即为嫌疑人数字货币收款地址。
        </p>
        <div class="explainCont">
          <img src="@/assets/file1.png" class="explainImg" />
        </div>
      </div>
      <div v-else-if="status==2">
        <p class="explain">
          转账币种及金额：是指需要监控的数字货币种类和金额。
          以IMtoken钱包为例，下图划线部分为需要提供的信息，币种是USDT，金额是200。
        </p>
        <div class="explainCont">
          <img src="@/assets/file2.png" class="explainImg" />
        </div>
      </div>
      <div v-else-if="status==3">
        <p class="explain">
          转账时间：是指发生这笔资金交易的具体时间。
          以IMtoken钱包为例，下图划线部分为具体该笔转账的时间。
        </p>
        <div class="explainCont">
          <img src="@/assets/file3.png" class="explainImg" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      helpVisble: false,
      exchangeName: "",
      form: {},
      status: 1
    };
  },
  methods: {
    fetchData() {
      this.$router.push({ name: "submission" });
    },
    seeDetail(num) {
      this.status = num;
      this.helpVisble = true;
    }
  }
};
</script>

<style scoped>
.flex-cont {
  position: relative;
  top: 45%; /*偏移*/
  transform: translateY(35%);
}
.stepIer {
  height: 300px;
  text-align: center;
}
.dashLine {
  border: 1px dashed #0074F8;
  display: inline-block;
  position: absolute;
  top: 25px;
  /* left: 100px; */
  right: -150px;
  width: 300px;
  height: 0px;
}
.stepCont {
  display: inline-block;
  text-align: center;
  width: 28%;
  position: relative;
}
.stepCont img {
  width: 72px;
  height: 72px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.stepCont p {
  color: #333333;
}
.numRadius {
  height: 51px;
  width: 51px;
  color: #0074f8;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  border: 1px solid #0074f8;
  margin: 0px auto;
}
/* /deep/ .el-step__line {
  border-style: dashed;
} */
.address_info {
  margin-bottom: 20px;
}
.submitRow {
  text-align: center;
  padding-right: 140px;
}
/deep/ .el-form-item__content {
  float: none;
  display: inline-block;
  margin: 0 !important;
}
/deep/ .el-form-item__label-wrap {
  display: inline-block;
  float: none;
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
  font-size: 20px;
  /* display: flex;
  align-items: center; */
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
  padding-left: 18px;
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
    font-size: 20px;
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
    padding-left: 18px;
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