<template>
  <div class="browser">
    <div class="app-cont">
      <el-card class="tran-card">
        <div class="address_info">
          <span>数字货币追踪</span>
        </div>
        <div class="form_param">
          <div class="editExample">
            <span @click="fillExam">填写示例</span>
            <span @click="downFile">报告示例</span>
          </div>
          <el-form :inline="true" label-position="top" class="demo-form-inline">
            <div class="btc_option">
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
                <el-option label="USDT(ERC20)" value="USDT(ERC20)"></el-option>
                <el-option label="USDT(TRC20)" value="USDT(TRC20)"></el-option>
              </el-select>
            </div>
            <el-form-item class="w20">
              <el-input v-model="form.transferAddress" placeholder="请输入诈骗嫌疑人地址" class="btc_money"></el-input>
              <el-tooltip
                class="item"
                effect="dark"
                content="每次查询仅支持一个地址，请添加您所知道的汇往该地址的全部转账，不同地址请分开提交查询"
                placement="top-start"
              >
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item label="转账金额" class="w15">
              <el-input v-model="form.transferValue" placeholder="请输入" class="btc_money"></el-input>
            </el-form-item>
            <el-form-item label="转账时间" class="w15">
              <el-date-picker
                v-model="form.transferDate"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                class="btc_money"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="累计转了几次" class="w10">
              <el-input-number
                v-model="form.transferCnt"
                :min="1"
                :max="10"
                label="描述文字"
                class="btc_money"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="转账截图" class="w20">
              <el-upload
                action="http://123.56.232.81:8080/commonFile/upload"
                :file-list="fileList"
                list-type="picture-card"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <!-- <el-form-item label="转账截图" class="w20">
                <el-date-picker v-model="form.date" type="date" placeholder="选择日期" class="btc_money"></el-date-picker>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :file-list="fileList"
                :limit="1"
              >
              
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>-->
            <!-- <div v-for="(item,index) in formList" :key="index">
              <div class="btc_option">
                <img src="@/assets/money.png" class="money_img" />
                <el-select v-model="item.transferCurrency" placeholder="请选择" class="btc_select">
                  <el-option label="ETH" value="ETH"></el-option>
                </el-select>
              </div>
              <el-form-item class="w20">
                <el-input v-model="item.transferAddress" placeholder="请输入诈骗嫌疑人地址" class="btc_money"></el-input>
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="每次查询仅支持一个地址，请添加您所知道的汇往该地址的全部转账，不同地址请分开提交查询"
                  placement="top-start"
                >
                  <i class="el-icon-question"></i>
                </el-tooltip>
              </el-form-item>
              <el-form-item label="转账金额">
                <el-input v-model="item.transferValue" placeholder="请输入" class="btc_money"></el-input>
              </el-form-item>
              <el-form-item label="转账时间" class="w15">
                <el-date-picker
                  v-model="item.transferDate"
                  type="date"
                  placeholder="选择日期"
                  class="btc_money"
                ></el-date-picker>
              </el-form-item>
              <el-form-item label="累计转了几次" class="w10">
                <el-input-number
                  v-model="item.transferCnt"
                  :min="1"
                  :max="10"
                  label="描述文字"
                  class="btc_money"
                ></el-input-number>
              </el-form-item>
              <el-form-item label="转账截图" class="w20">
                <el-date-picker v-model="form.date" type="date" placeholder="选择日期" class="btc_money"></el-date-picker>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :file-list="fileList"
                :limit="1"
              >
              
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  multiple
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
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
                <!-- <el-button
                  type="primary"
                  class="startButton"
                  @click="addNewTran"
                  icon="el-icon-plus"
                >增加一笔新的转账</el-button>-->
                <el-button type="primary" class="startButton" @click="$router.push({path:'fraud/preparationFile'})">返回上一步</el-button>
                <el-button type="primary" class="startButton" @click="startAnalysis">提交</el-button>
              </el-col>
            </el-row>
          </div>
          <el-card class="box-card" v-if="analysisVisble">
            <div slot="header" class="clearfix">
              <!-- <div class="record_legend">
                <p></p>
                <span>查询地址</span>
              </div>
              <div class="record_legend_first">
                <p></p>
                <span>第一层地址</span>
              </div>
              <div class="record_legend_n">
                <p></p>
                <span>第N层地址</span>
              </div>
              <div class="record_legend_inflow">
                <i class="el-icon-right" />
                <span>流入</span>
              </div>
              <div class="record_legend_flowout">
                <i class="el-icon-right" />
                <span>流出</span>
              </div>-->
              <!-- <div class="report_img">
                <img src="@/assets/report.png" />
                <span>生成报告</span>
              </div>-->
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
            </div>
            <grap ref="grapChild" :form="form" />
          </el-card>
        </div>
      </el-card>
      <el-dialog title="支付信息" :visible.sync="paymentVisble" width="30%">
        <span>
          <i class="el-icon-circle-check" />已付款成功
        </span>
        <span>24小时出报告，会给您手机发查询密码，请登录“司法入口”查询。</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="resetForm">再提交一笔</el-button>
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
        transferDate: "",
        transferValue: "",
        transferCnt: 1,
        userId: "1",
        reportType: 1,
        paidStatus: 0
      },
      formList: [
        {
          transferCurrency: "1",
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
        transferDate: "",
        transferValue: "",
        transferCnt: 1,
        userId: "1",
        reportType: 1,
        paidStatus: 1
      };
      this.paymentVisble = false;
    },
    // 填写示例
    fillExam() {
      this.$router.push({ name: "preparationFile" });
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
        console.log(res);
        // this.paymentVisble = true;
        // 先不要支付，因为有问题，直接略过弹出支付成功
        if (res.data) {
          this.$router.push({
            name: "payment",
            query: {
              type: "weixin",
              rouName: "submission",
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
/deep/ .el-upload-list__item {
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
/deep/ .el-icon-circle-check {
  margin-right: 10px;
  font-size: 20px;
}
.removeTran {
  width: 35px;
  height: 35px;
  cursor: pointer;
  line-height: 0;
}
/* /deep/ .el-upload-list {
  position: absolute;
  left: 120px;
  bottom: 0px;
} */
.editExample {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  font-size: 16px;
}
.editExample span {
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}
/deep/ .el-icon-question {
  cursor: pointer;
  color: black;
  line-height: 5px;
  position: absolute;
  right: 12px;
  top: 18px;
}
.solid {
  text-align: center;
  margin-left: 2px;
  margin-right: 2px;
}
.value {
  width: 46%;
}
.form_param {
  height: 100%;
}
.box-card {
  margin-top: 10px;
  height: 80%;
}
/deep/ .box-card > .el-card__body {
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
/deep/ .el-form .el-form-item:nth-of-type(2) {
  vertical-align: bottom;
}
/* /deep/ .el-form-item:nth-of-type(1){
  vertical-align: bottom;
} */
/deep/ .el-form-item:last-child {
  vertical-align: bottom;
}
.level {
  width: 100%;
}
/deep/ .el-card__body {
  padding: 15px;
}
.btc_money {
  width: 100%;
}
.btc_input {
  width: 280px;
  display: block;
  height: 40px;
}
/deep/ .el-input__inner {
  background: #f5f5f5;
}
.tran-card {
  /* height: 100%; */
  margin-top: 30px;
  height: 89%;
}
/deep/ .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 14px;
  color: #151c2c;
  line-height: 16px;
}
.money_img {
  width: 24px;
  height: 24px;
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
}
/deep/ .el-card__header {
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
.address_info span {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  vertical-align: middle;
}
.address {
  padding-left: 18px;
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
/deep/ .el-form-item {
  margin-bottom: 15px;
}
/deep/ .el-input__suffix {
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
.w10 {
  width: 17%;
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
/deep/ .el-form .el-form-item:nth-of-type(2) {
  vertical-align: bottom;
}
/deep/ .el-form-item:last-child {
  vertical-align: bottom;
}
/deep/ .btc_select > .el-input > .el-input__inner {
  border: none;
  background: none;
}
.btc_select {
  width: 180px;
  right: 8px;
}
/deep/ .tran-card > .el-card__body {
  /* height: 100%; */
  height: 100%;
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
/* 移动端 */
@media screen and (max-width: 750px) {
  .removeCont {
    float: right;
    margin: 0;
    /* line-height: 10px; */
    position: relative;
    top: 48px;
    right: 5px;
  }
  /deep/ .el-icon-circle-check {
    margin-right: 10px;
    font-size: 20px;
  }
  .removeTran {
    width: 35px;
    height: 35px;
    cursor: pointer;
    line-height: 0;
  }
  /deep/ .el-upload-list {
    position: absolute;
    left: 120px;
    bottom: 0px;
  }
  .editExample {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    font-size: 16px;
  }
  .editExample span {
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  /deep/ .el-icon-question {
    cursor: pointer;
    color: black;
    line-height: 5px;
    position: absolute;
    right: 12px;
    top: 18px;
  }
  .solid {
    text-align: center;
    margin-left: 2px;
    margin-right: 2px;
  }
  .value {
    width: 46%;
  }
  .form_param {
    height: 100%;
  }
  .box-card {
    margin-top: 10px;
    height: 80%;
  }
  /deep/ .box-card > .el-card__body {
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
  /deep/ .el-form .el-form-item:nth-of-type(2) {
    vertical-align: bottom;
  }
  /* /deep/ .el-form-item:nth-of-type(1){
  vertical-align: bottom;
} */
  /deep/ .el-form-item:last-child {
    vertical-align: bottom;
  }
  .level {
    width: 100%;
  }
  /deep/ .el-card__body {
    padding: 15px;
  }
  .btc_money {
    width: 100%;
  }
  .btc_input {
    width: 280px;
    display: block;
    height: 40px;
  }
  /deep/ .el-input__inner {
    background: #f5f5f5;
  }
  .tran-card {
    /* height: 100%; */
    margin-top: 30px;
    height: 89%;
  }
  /deep/ .el-card__header {
    background: #e5e9ef;
    font-family: PingFang-SC-Bold;
    font-size: 14px;
    color: #151c2c;
    line-height: 16px;
  }
  .money_img {
    width: 24px;
    height: 24px;
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
  }
  /deep/ .el-card__header {
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
  .address_info span {
    font-family: PingFang-SC-Bold;
    font-size: 20px;
    color: #ffffff;
    vertical-align: middle;
  }
  .address {
    padding-left: 18px;
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
  /deep/ .el-form-item {
    margin-bottom: 15px;
  }
  /deep/ .el-input__suffix {
    right: 13px;
  }
  .btc_option {
    position: absolute;
  }
  .w13 {
    width: 15%;
  }
  .w20 {
    width: 20.5%;
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
  /deep/ .el-form .el-form-item:nth-of-type(2) {
    vertical-align: bottom;
  }
  /deep/ .el-form-item:last-child {
    vertical-align: bottom;
  }
  /deep/ .btc_select > .el-input > .el-input__inner {
    border: none;
    background: none;
  }
  .btc_select {
    width: 100px;
    right: 8px;
  }
  /deep/ .tran-card > .el-card__body {
    /* height: 100%; */
    height: 100%;
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
}
</style>