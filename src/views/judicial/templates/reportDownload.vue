<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <span>数字货币项目追踪报告下载</span>
      </div>
      <el-card class="tran-card">
        <div class="file">
          <div class="file_form">
            <img src="@/assets/file.png" />
            <span>报告唯一标识：{{reportNo}}</span>
            <div class="operationButton">
              <img src="@/assets/downFile.png" @click="donwnLoad" />
              <!-- <img src="@/assets/share.png" />
              <img src="@/assets/email.png" @click="sendEmail" />-->
            </div>
          </div>
        </div>
      </el-card>
      <el-dialog :visible.sync="emailVisble" width="30%" title="发送到邮箱">
        <div class="email">
          <el-form :model="emailForm" :inline="true">
            <el-form-item label="接收邮箱：">
              <el-input placeholder="请输入" v-model="emailForm.email" class="emailInput" />
            </el-form-item>
          </el-form>
          <div class="emailButton">
            <el-button type="primary" class="inButton">确定发送</el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emailVisble: false,
      reportNo: "",
      emailForm: {
        email: ""
      }
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      //
      this.reportNo = this.$route.query.reportNo;
      console.log(this.$route);
    },
    donwnLoad() {
      window.open(this.$route.query.msg);
    },
    sendEmail() {
      this.emailVisble = true;
    }
  }
};
</script>

<style scoped>
/deep/ .el-form-item__label {
  font-family: PingFang-SC-Bold;
  font-size: 18px;
  color: #151c2c;
}
.emailButton {
  margin-top: 20px;
  margin-bottom: 30px;
}
.email {
  text-align: center;
}
.emailInput {
  width: 280px;
  height: 40px;
}
.operationButton {
  float: right;
  position: relative;
  top: 15px;
}
.file_form img {
  height: 64px;
  width: 64px;
  margin-left: 30px;
  vertical-align: middle;
}
.file_form span {
  vertical-align: middle;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #333333;
  text-align: center;
  line-height: 16px;
  padding-left: 10px;
}
.file_form {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.file {
  background: #f5f5f5;
  margin-top: 10px;
  /* width: 1320px; */
  height: 120px;
}
.operationButton img {
  height: 18px;
  width: 18px;
  margin-left: 13px;
  margin-right: 13px;
  cursor: pointer;
}
.operationButton img:last-child {
  margin-right: 20px;
}
.addNotmId {
  padding-left: 20px;
}
.addMid {
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-55%);
}
.inButton {
  color: white;
  width: 104px;
  height: 40px;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
}
.report_input {
  height: 250px;
}
.agreement_info {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  /* color: #000000; */
  /* line-height: 20px; */
  color: #999999;
  margin-top: 30px;
}
.hrefTxt {
  color: #000000;
}
.reportCont {
  width: 600px;
  height: 64px;
}
/deep/ .el-input__inner {
  height: 100%;
  background: #f5f5f5 !important;
}
.person_gif {
  position: absolute;
  width: 402px;
  height: 380px;
  right: 22%;
  top: 25%;
}
.person_gif img {
  width: 100%;
  height: 100%;
}
.report_cont {
  align-items: center;
}
/deep/ .el-card__body {
  width: 100%;
}
.report_title {
  width: 377px;
  height: 140px;
  margin-bottom: 5.4vw;
}
.report_title p {
  font-family: PingFang-SC-Bold;
  font-size: 54px;
  color: #333333;
  letter-spacing: 2px;
  line-height: 5;
}
.box-card {
  margin-top: 10px;
}
/deep/ .el-input__inner {
  background: #f5f5f5;
}
/deep/ .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
/deep/ .el-input-group__append {
  color: white;
  background: #0074f8;
  font-size: 20px;
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
/deep/ .el-input__inner {
  background: #f5f5f5;
}
.tran-card {
  height: 90%;
  margin-top: 30px;
  /* height: 640px; */
  /* background: url("../../assets/smallBack.png") no-repeat white; */
  /* background-size: 100% 100%; */
  display: flex;
}
/deep/ .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
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
</style>