<template>
  <div class="browser">
    <div class="app-cont">
      <el-card class="tran-card">
        <div class="address_info">
          <span>资金盘监控</span>
        </div>
        <div class="form_param">
          <div class="editExample">
            <span @click="fillExam">填写示例</span>
            <span @click="downFile">报告示例</span>
          </div>
          <el-form label-position="left" label-width="80px" class="demo-form-inline">
            <!-- <div class="btc_option">
              <img src="@/assets/ETH.png" class="money_img" v-if="form.transferCurrency=='ETH'" />
              <img
                src="@/assets/USDT.png"
                class="money_img"
                v-else-if="form.transferCurrency=='USDT(ERC20)'"
              />
              <img
                src="@/assets/USDT.png"
                class="money_img"
                v-else-if="form.transferCurrency=='USDT(TRC20)'"
              />
              <el-select v-model="form.transferCurrency" placeholder="请选择" class="btc_select">
                <el-option label="ETH" value="ETH"></el-option>
              </el-select>
            </div>-->
            <el-form-item label="ETH" id="ETH">
              <template slot="label">
                <img src="@/assets/ETH.png" class="money_img" />
                <span>ETH</span>
              </template>
              <el-input
                v-model="form.transferAddress"
                placeholder="请输入资金盘项目app充值地址"
                class="btc_money"
              ></el-input>
            </el-form-item>
            <!-- <el-form-item class="w20" label="ETH">
              <el-input
                v-model="form.transferAddress"
                placeholder="请输入资金盘项目app充值地址"
                class="btc_money"
            ></el-input>-->
            <!-- <el-tooltip
                class="item"
                effect="dark"
                content="每次查询仅支持一个地址，请添加您所知道的汇往该地址的全部转账，不同地址请分开提交查询"
                placement="top-start"
              >
                <i class="el-icon-question"></i>
            </el-tooltip>-->
            <el-form-item label="转账截图" class="w20">
              <el-upload
                action="http://123.56.232.81:8080/commonFile/upload"
                :file-list="fileList"
                list-type="picture-card"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <!-- 减 -->
            <!-- <el-form-item label class="removeCont">
              <img
                src="@/assets/remove.png"
                class="removeTran"
                @click="removeTran(index)"
                v-if="formList.length!=1"
              />
            </el-form-item>-->
            <!-- <div v-for="(item,index) in formList" :key="index">
              <div class="btc_option">
                <img src="@/assets/money.png" class="money_img" />
                <el-select v-model="item.btc" placeholder="请选择" class="btc_select">
                  <el-option label="BTC" value="1"></el-option>
                  <el-option label="BTC2" value="2"></el-option>
                </el-select>
              </div>
              <el-form-item class="w20">
                <el-input v-model="item.btcAddress" placeholder="请输入资金盘项目app充值地址" class="btc_money"></el-input>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="每次查询仅支持一个地址，请添加您所知道的汇往该地址的全部转账，不同地址请分开提交查询"
                  placement="top-start"
                >
                  <i class="el-icon-question"></i>
                </el-tooltip>
              </el-form-item>
              <el-form-item label class="removeCont">
                <img
                  src="@/assets/remove.png"
                  class="removeTran"
                  @click="removeTran(index)"
                  v-if="formList.length!=1"
                />
              </el-form-item>
            </div>-->
          </el-form>
          <div class="operation">
            <el-row>
              <el-col :span="24">
                <el-button
                  type="primary"
                  class="startButton"
                  @click="$router.push({path:'/fraud/preparationFileMonitor'})"
                >返回上一步</el-button>
                <el-button type="primary" class="startButton" @click="startAnalysis">提交</el-button>
              </el-col>
            </el-row>
          </div>
          <el-card class="box-card" v-if="analysisVisble">
            <div slot="header" class="clearfix"></div>
            <grap ref="grapChild" :form="form" />
          </el-card>
        </div>
      </el-card>
      <el-dialog title="支付信息" :visible.sync="paymentVisble" width="30%">
        <span>
          <i class="el-icon-circle-check" />
          <span class="success_txt">付款成功，系统将于24小时内生成报告，届时将给您发送查询报告短信，请注意查收！</span>
        </span>
        <!-- <span>24小时出报告，会给您手机发查询密码，请登录“司法入口”查询。</span> -->
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" class="confirmButton" @click="resetForm">确认</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import grap from "../components/grap";
import agreement from "@/components/agreement/agreement";
import * as utils from "@/utils/utils";
import * as Api_report from "@/api/report";
import { mapGetters } from "vuex";
import { getToken } from "@/utils/auth";
export default {
  data() {
    return {
      paymentVisble: false,
      fileList: [],
      disableButton: "",
      date: "",
      exchangeName: "",
      analysisVisble: false,
      searchName: "1",
      btc: "1",
      flow: "",
      form: {
        transferCurrency: "ETH",
        transferAddress: "",
        userId: "",
        reportType: 2,
        paidStatus: 1
      },
      formList: [
        {
          btc: "1",
          btcAddress: "",
          money: "",
          date: "",
          level: 1,
          flow: "1",
          count: 1
        }
      ],
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          this.pickerMinDate = minDate.getTime();
          if (maxDate) {
            this.pickerMinDate = "";
          }
        },
        disabledDate: time => {
          if (this.pickerMinDate !== "") {
            const day30 = (30 - 1) * 24 * 3600 * 1000;
            let maxTime = this.pickerMinDate + day30;
            if (maxTime > new Date()) {
              maxTime = new Date();
            }
            return time.getTime() > maxTime;
          }
          return time.getTime() > Date.now();
        }
      }
    };
  },
  computed: {
    ...mapGetters(["sysUser"])
  },
  mounted() {
    console.log(this.$route.params);
    if (this.$route.params.status) {
      // this.$message.success("支付成功");
      this.paymentVisble = true;
    }
  },
  methods: {
    // 清空表单
    resetForm() {
      // for (const w in this.form) {
      //   if(!w=='')
      //   this.form[w] = "";
      // }
      this.form = {
        transferCurrency: "ETH",
        transferAddress: "",
        userId: "",
        reportType: 2,
        paidStatus: 1
      };
      this.paymentVisble = false;
    },
    // 填写示例
    fillExam() {
      this.$router.push({ name: "preparationFileMonitor" });
    },
    // 移除一笔交易
    removeTran(i) {
      if (this.formList.length == 1) {
        return;
      }
      this.formList.splice(i, 1);
    },
    // 新增新交易
    addNewTran() {
      if (this.formList.length == 9) {
        return;
      }
      this.formList.push({
        btc: "1",
        btcAddress: "",
        money: "",
        date: "",
        level: 1,
        flow: "1"
      });
    },
    downFile() {
      console.log("报告示例");
      // window.open("http://39.96.66.135:8080/profile/template/002.pdf");
    },
    handleAvatarSuccess(res, file) {
      this.getImg(URL.createObjectURL(file.raw));
    },
    getImg(img) {
      return img;
    },
    fetchData() {
      //
    },
    disable(val) {
      this.disableButton = val;
    },
    startAnalysis() {
      if (!getToken()) {
        this.$message.warning("请先登录再进行操作");
        return;
      }
      this.form.userId = this.sysUser.id;
      // 开始生成，然后再跳到支付页面
      Api_report.createReportTask(this.form).then(res => {
        // this.paymentVisble = true;
        // 先不要支付，因为有问题，直接略过弹出支付成功
        if (res.data) {
          this.$router.push({
            name: "payment",
            query: {
              type: "weixin",
              rouName: "submissionMoney",
              reportNo: res.data.reportNo
            }
          });
        }
      });
    },
    selectDate(val) {
      this.form.startTime = val[0];
      this.form.endTime = val[1];
    }
  },
  components: {
    agreement,
    grap
  }
};
</script>

<style scoped>
.success_txt {
  font-size: 20px;
  font-weight: 500;
}
::v-deep .el-upload-list__item {
  width: 7.708vw;
  height: 7.708vw;
}
.removeCont {
  float: right;
  margin: 0;
  /* line-height: 10px; */
  position: relative;
  top: 48px;
  right: 5px;
}
::v-deep .el-icon-circle-check {
  margin-right: 10px;
  font-size: 20px;
}
.removeTran {
  width: 35px;
  height: 35px;
  cursor: pointer;
  line-height: 0;
}
/* ::v-deep .el-upload-list {
  position: absolute;
  left: 120px;
  bottom: 0px;
} */
.editExample {
  width: 39.063vw;
  font-size: 16px;
  position: absolute;
  top: -60px;
  left: 845px;
}
.editExample span {
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid rgb(44, 134, 243);
  border-radius: 8px;
  color: rgb(44, 134, 243);
  padding: 5px 10px;
}
/* ::v-deep .el-icon-question {
  cursor: pointer;
  color: black;
  line-height: 5px;
  position: absolute;
  right: 12px;
  top: 18px;
} */
.solid {
  text-align: center;
  margin-left: 2px;
  margin-right: 2px;
}
.value {
  width: 46%;
}
.form_param {
  /* width: 1200px; */
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.box-card {
  margin-top: 10px;
  height: 80%;
}
.demo-form-inline {
  width: 750px;
  margin: 50px auto 0;
}
::v-deep .box-card > .el-card__body {
  padding: 0;
  /* height: calc(100vh - 48vh); */
  height: 100%;
}
.report_img {
  float: right;
  width: 100px;
  height: 20px;
  text-align: right;
  cursor: pointer;
}
.report_img img {
  width: 20px;
  height: 22px;
  vertical-align: middle;
}
.record_legend p {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f3862d;
  vertical-align: middle;
  box-shadow: 0 2px 6px 0 rgba(221, 221, 221, 0.6);
}
.record_legend_first p {
  display: inline-block;
  background: #4a90e2;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(50, 142, 233, 0.2);
  box-shadow: 0 2px 6px 0 rgba(221, 221, 221, 0.6);
  vertical-align: middle;
}
.record_legend_n p {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #f5a623;
  border: 2px solid rgba(255, 163, 0, 0.2);
  box-shadow: 0 2px 6px 0 rgba(221, 221, 221, 0.6);
  vertical-align: middle;
  border-radius: 50%;
}
.clearfix div {
  margin-left: 25px;
  display: inline-block;
}
.clearfix div:first-of-type {
  margin: 0;
}
.clearfix span {
  vertical-align: middle;
  padding-left: 5px;
}
.clearfix {
  background: #e5e9ef;
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
::v-deep .el-form .el-form-item:nth-of-type(2) {
  vertical-align: bottom;
}
/* ::v-deep .el-form-item:nth-of-type(1){
  vertical-align: bottom;
} */
::v-deep .el-form-item:last-child {
  vertical-align: bottom;
}
.level {
  width: 100%;
}
::v-deep .el-card__body {
  padding: 15px;
}
::v-deep .el-input__icon el-icon-date ::after {
  width: 64.302vw;
}
::v-deep.el-input__prefix .el-icon-date {
  width: 64.302vw;
}
::v-deep.el-input--prefix .el-input__inner {
  padding-left: 15px;
}
.btc_input {
  width: 280px;
  display: block;
  height: 40px;
}

.tran-card {
  /* height: 100%; */
  margin-top: 30px;
  height: 89%;
}
::v-deep .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 14px;
  color: #151c2c;
  line-height: 16px;
}
.money_img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  /* position: absolute;
  top: 8px;
  left: 8px; */
}
::v-deep .el-form-item span {
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
.selectType {
  width: 280px;
  height: 40px;
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
  font-size: 14px;
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
.address_info {
  width: 263px;
  height: 90px;
  padding: 21px 84px 39px 32px;
}
.address_info span {
  width: 147px;
  height: 30px;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 30px;
}
.address {
  padding-left: 18px;
}
::v-deep .el-col-3 {
  width: 10%;
}
::v-deep .el-col-10 {
  line-height: 3;
}
.operation {
  margin: 50px auto;
  display: flex;
  justify-content: center;
}
::v-deep .el-form-item {
  margin-bottom: 15px;
}
::v-deep .el-input__suffix {
  right: 13px;
}
.btc_option {
  position: absolute;
}
.w13 {
  width: 20%;
}
.w20 {
  width: 35%;
}
.w15 {
  width: 22%;
}
::v-deep.w10 .el-input__inner {
  width: 150px;
}
::v-deep.w10 .el-input-number {
  width: 150px;
}
::v-deep.w10 .el-input {
  width: 150px;
}
.clearfix div {
  margin-left: 25px;
  display: inline-block;
}
.clearfix div:first-of-type {
  margin: 0;
}
.clearfix span {
  vertical-align: middle;
  padding-left: 5px;
}
.clearfix {
  background: #e5e9ef;
  font-family: PingFang-SC-Regular;
  font-size: 14px;
  color: #151c2c;
  line-height: 16px;
}
::v-deep .el-form .el-form-item:nth-of-type(2) {
  vertical-align: bottom;
}
::v-deep .el-form-item:last-child {
  vertical-align: bottom;
}
::v-deep .btc_select > .el-input > .el-input__inner {
  border: none;
  background: none;
  width: 640px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}
.btc_select {
  /* width: 105px; */
  /* right: 8px; */
}
::v-deep .tran-card > .el-card__body {
  /* height: 100%; */
  height: 100%;
}

::v-deep.el-input__inner {
  border: none;
  background: none;
  width: 640px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
}

/* ::v-deep.el-input__inner:nth-child(4){
  border: none;
  background: none;
  width: 650px;
  height:40px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
} */
::v-deep .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
::v-deep .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  .confirmButton {
    width: 40px;
    height: 35px;
  }
  ::v-deep .el-dialog {
    width: 60% !important;
  }
  .success_txt {
    font-size: 16px;
    font-weight: 500;
  }
  ::v-deep .el-upload-list__item {
    width: 7.708vw;
    height: 7.708vw;
  }
  .removeCont {
    float: right;
    margin: 0;
    /* line-height: 10px; */
    position: relative;
    top: 48px;
    right: 5px;
  }
  ::v-deep .el-icon-circle-check {
    margin-right: 10px;
    font-size: 20px;
  }
  .removeTran {
    width: 35px;
    height: 35px;
    cursor: pointer;
    line-height: 0;
  }
  /* ::v-deep .el-upload-list {
  position: absolute;
  left: 120px;
  bottom: 0px;
} */
  .editExample {
    width: 200px;
    font-size: 16px;
    position: absolute;
    top: -60px;
    left: 125px;
  }
  .editExample span {
    font-size: 10px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    border: 2px solid rgb(44, 134, 243);
    border-radius: 8px;
    color: rgb(44, 134, 243);
    padding: 5px 10px;
  }
  /* ::v-deep .el-icon-question {
  cursor: pointer;
  color: black;
  line-height: 5px;
  position: absolute;
  right: 12px;
  top: 18px;
} */
  .solid {
    text-align: center;
    margin-left: 2px;
    margin-right: 2px;
  }
  .value {
    width: 46%;
  }
  .form_param {
    /* width: 1200px; */
    height: 100%;
    margin: 0 auto;
    position: relative;
  }
  .box-card {
    margin-top: 10px;
    height: 80%;
  }
  .demo-form-inline {
    width: 750px;
    margin: 50px auto 0;
  }
  ::v-deep .box-card > .el-card__body {
    padding: 0;
    /* height: calc(100vh - 48vh); */
    height: 100%;
  }
  .report_img {
    float: right;
    width: 100px;
    height: 20px;
    text-align: right;
    cursor: pointer;
  }
  .report_img img {
    width: 20px;
    height: 22px;
    vertical-align: middle;
  }
  .record_legend p {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f3862d;
    vertical-align: middle;
    box-shadow: 0 2px 6px 0 rgba(221, 221, 221, 0.6);
  }
  .record_legend_first p {
    display: inline-block;
    background: #4a90e2;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(50, 142, 233, 0.2);
    box-shadow: 0 2px 6px 0 rgba(221, 221, 221, 0.6);
    vertical-align: middle;
  }
  .record_legend_n p {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #f5a623;
    border: 2px solid rgba(255, 163, 0, 0.2);
    box-shadow: 0 2px 6px 0 rgba(221, 221, 221, 0.6);
    vertical-align: middle;
    border-radius: 50%;
  }
  .clearfix div {
    margin-left: 25px;
    display: inline-block;
  }
  .clearfix div:first-of-type {
    margin: 0;
  }
  .clearfix span {
    vertical-align: middle;
    padding-left: 5px;
  }
  .clearfix {
    background: #e5e9ef;
    font-family: PingFang-SC-Regular;
    font-size: 16px;
    color: #151c2c;
    line-height: 16px;
  }
  ::v-deep .el-form .el-form-item:nth-of-type(2) {
    vertical-align: bottom;
  }
  /* ::v-deep .el-form-item:nth-of-type(1){
  vertical-align: bottom;
} */
  ::v-deep .el-form-item:last-child {
    vertical-align: bottom;
  }
  .level {
    width: 100%;
  }
  ::v-deep .el-card__body {
    padding: 15px;
  }
  ::v-deep .el-input__icon el-icon-date ::after {
    width: 64.302vw;
  }
  ::v-deep.el-input__prefix .el-icon-date {
    width: 64.302vw;
  }
  ::v-deep.el-input--prefix .el-input__inner {
    padding-left: 15px;
  }
  .btc_input {
    width: 280px;
    display: block;
    height: 40px;
  }

  .tran-card {
    /* height: 100%; */
    margin-top: 30px;
    height: 89%;
  }
  ::v-deep .el-card__header {
    background: #e5e9ef;
    font-family: PingFang-SC-Bold;
    font-size: 14px;
    color: #151c2c;
    line-height: 16px;
  }
  .money_img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    /* position: absolute;
  top: 8px;
  left: 8px; */
  }
  ::v-deep .el-form-item span {
    vertical-align: middle;
  }
  .app-cont {
    width: 90%;
    margin: 0 auto;
    color: white;
    margin-top: 25px;
  }
  .browser {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .selectType {
    width: 280px;
    height: 40px;
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
    font-size: 14px;
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
  .address_info {
    width: 263px;
    height: 90px;
    padding: 21px 84px 39px 32px;
    padding-left: 0px;
  }
  .address_info span {
    width: 147px;
    height: 30px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 30px;
  }
  .address {
    padding-left: 18px;
  }
  ::v-deep .el-col-3 {
    width: 10%;
  }
  ::v-deep .el-col-10 {
    line-height: 3;
  }
  .operation {
    margin: 50px auto;
    display: flex;
    justify-content: center;
  }
  ::v-deep .el-form-item {
    margin-bottom: 15px;
  }
  ::v-deep .el-input__suffix {
    right: 13px;
  }
  .btc_option {
    position: absolute;
  }
  .w13 {
    width: 20%;
  }
  .w20 {
    width: 35%;
  }
  .w15 {
    width: 22%;
  }
  ::v-deep.w10 .el-input__inner {
    width: 160px;
  }
  ::v-deep.w10 .el-input-number {
    width: 150px;
  }
  ::v-deep.w10 .el-input {
    width: 150px;
  }
  .clearfix div {
    margin-left: 25px;
    display: inline-block;
  }
  .clearfix div:first-of-type {
    margin: 0;
  }
  .clearfix span {
    vertical-align: middle;
    padding-left: 5px;
  }
  .clearfix {
    background: #e5e9ef;
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: #151c2c;
    line-height: 16px;
  }
  ::v-deep .el-form .el-form-item:nth-of-type(2) {
    vertical-align: bottom;
  }
  ::v-deep .el-form-item:last-child {
    vertical-align: bottom;
  }
  ::v-deep .btc_select > .el-input > .el-input__inner {
    border: none;
    background: none;
    width: 640px;
    height: 30px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
  }
  .btc_select {
    /* width: 105px; */
    /* right: 8px; */
  }
  ::v-deep .tran-card > .el-card__body {
    /* height: 100%; */
    height: 100%;
  }

  ::v-deep.el-input__inner {
    border: none;
    background: none;
    width: 220px;
    height: 30px;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
  }

  /* ::v-deep.el-input__inner:nth-child(4){
  border: none;
  background: none;
  width: 650px;
  height:40px;
  background: #FFFFFF;
  border-radius: 4px;
  border: 1px solid #D9D9D9;
} */
  ::v-deep .el-card__header {
    background: #e5e9ef;
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    color: #151c2c;
    line-height: 16px;
  }
  ::v-deep .el-card__header {
    background: #e5e9ef;
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    color: #151c2c;
    line-height: 16px;
  }
  .money_img {
    margin-right: 5px;
  }
  .startButton {
    width: 100px;
    margin-right: 10px;
    height: 40px;
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 16px;
    /* margin-left: 30px; */
  }
  ::v-deep .el-input-number__increase {
    right: -8px;
    width: 20px;
  }
  ::v-deep .el-input-number__decrease {
    right: -8px !important;
    width: 20px;
  }
  ::v-deep .el-form-item__label {
    font-size: 13px;
  }
  ::v-deep .el-input__inner {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>