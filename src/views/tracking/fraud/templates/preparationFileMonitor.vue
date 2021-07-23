<template>
  <div class="browser">
    <div class="app-cont">
      <el-card class="tran-card">
        <div class="address_info">
          <span>资金盘监控-准备材料</span>
        </div>
        <div class="flex-cont">
          <div class="stepIer">
            <div class="stepCont">
              <!-- <div class="numRadius">1</div> -->
              <div class="step">
                <img src="@/assets/address.png" />
                <p>
                  任意传销参与人在项目APP中的充值地址
                  <i class="el-icon-question" @click="seeDetail" />
                </p>
              </div>
            </div>
          </div>
          <el-row class="submitRow">
            <el-col :span="24">
              <el-button type="primary" class="startButton" @click="fetchData">我已准备好</el-button>
            </el-col>
          </el-row>
        </div>
        <!-- <el-form :model="form" label-width="auto" label-position="right" size="small">
          <el-row :gutter="24" class="submitRow">
            <el-col :span="24">
              <el-form-item label="任意传销参与人在项目APP中的充值地址">
                <i class="el-icon-question" @click="seeDetail" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>-->
      </el-card>
    </div>
    <el-dialog title="说明/帮助" :visible.sync="helpVisble" width="50%" class="helpDialog">
      <p class="explain">每一个传销项目都有一个载体，一般为APP，会让投资人注册账号，每个账号会对应一个充值地址。以下图为例，图中画线部分为该传销项目APP提供的充值地址。</p>
      <br />
      <p class="explain">注意：该地址需已经实际充值参与该传销项目，否则追踪数据会有偏差。</p>
      <div class="explainCont">
        <img src="@/assets/file4.png" class="explainImg" />
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
      form: {}
    };
  },
  methods: {
    fetchData() {
      this.$router.push({ name: "submissionMoney" });
    },
    seeDetail(num) {
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
  border: 1px dashed #0074f8;
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
  width: 30%;
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
  font-size: 20px;
  width: 100%;
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
.address_info {
  margin-bottom: 20px;
}
.submitRow {
  text-align: center;
}
::v-deep .el-form-item__content {
  float: none;
  display: inline-block;
  margin: 0 !important;
}
::v-deep .el-form-item__label-wrap {
  display: inline-block;
  float: none;
}
.explainImg {
  width: 58%;
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
::v-deep .el-col-3 {
  width: 10%;
}
::v-deep .el-col-10 {
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
::v-deep .el-input__inner {
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
}
::v-deep .el-card__header {
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
::v-deep .el-form-item__label {
  font-size: 23px;
}
::v-deep .el-icon-question {
  font-size: 23px;
  cursor: pointer;
  color: black;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  .startButton {
    width: 240px;
    height: 40px;
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 16px;
    /* margin-left: 30px; */
  }
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
    border: 1px dashed #0074f8;
    display: inline-block;
    position: absolute;
    top: 15px;
    /* left: 100px; */
    right: -34px;
    width: 65px;
    height: 0px;
  }
  .stepCont {
    display: inline-block;
    text-align: center;
    width: 33%;
    position: relative;
  }
  .stepCont img {
    width: 50px;
    height: 50px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .stepCont p {
    color: #333333;
    position: absolute;
    font-size: 10px;
    /* left: 14px; */
  }
  .numRadius {
    height: 30px;
    width: 30px;
    color: #0074f8;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 24px;
    border: 1px solid #0074f8;
    margin: 0px auto;
  }
  /* ::v-deep .el-step__line {
  border-style: dashed;
} */
  .address_info {
    margin-bottom: 20px;
  }
  .submitRow {
    text-align: center;
    /* padding-right: 140px; */
  }
  ::v-deep .el-form-item__content {
    float: none;
    display: inline-block;
    margin: 0 !important;
  }
  ::v-deep .el-form-item__label-wrap {
    display: inline-block;
    float: none;
  }
  .explainImg {
    width: 100%;
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
  ::v-deep .el-col-3 {
    width: 10%;
  }
  ::v-deep .el-col-10 {
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
  ::v-deep .el-input__inner {
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
  ::v-deep .el-card__header {
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
  .address {
    padding-left: 18px;
  }
   ::v-deep .el-form-item__label {
    font-size: 23px;
  }
  ::v-deep .el-icon-question {
    font-size: 16px;
    cursor: pointer;
    color: black;
  }
  ::v-deep .el-dialog {
    width: 85% !important;
  }
  ::v-deep .el-dialog__title{
    font-size: 16px;
  }
  ::v-deep .el-dialog__close{
    font-size: 18px;
  }
}
</style>