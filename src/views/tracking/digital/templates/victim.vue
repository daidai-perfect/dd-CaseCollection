<template>
  <div class="vic_cont">
    <!-- 受害人 -->
    <el-form :inline="true" label-position="top" :model="form" class="demo-form-inline">
      <div class="btc_option">
        <img src="@/assets/money.png" class="money_img" />
        <el-select v-model="form.btc" placeholder="请选择" class="btc_select">
          <el-option label="BTC" value="1"></el-option>
          <el-option label="BTC2" value="2"></el-option>
        </el-select>
      </div>
      <el-form-item class="w20">
        <el-input v-model="form.btcAddress" placeholder="请输入诈骗嫌疑人地址" class="btc_money"></el-input>
      </el-form-item>
      <el-form-item label="交易金额(BTC)" class="w20">
        <el-input v-model="form.money" placeholder="请输入" class="btc_money"></el-input>
      </el-form-item>
      <el-form-item label="生效日期" class="w20">
        <el-date-picker v-model="form.date" type="date" placeholder="选择日期" class="btc_money"></el-date-picker>
        <!-- <el-date-picker
          v-model="form.date"
          type="daterange"
          range-separator="-"
          :picker-options="pickerOptions"
          start-placeholder
          end-placeholder
          class="btc_money"
        ></el-date-picker>-->
      </el-form-item>
      <!-- <el-form-item label="挖掘层数≤" class="w13">
        <el-input-number
          v-model="form.level"
          controls-position="right"
          :min="1"
          :max="3"
          class="level"
        ></el-input-number>
      </el-form-item>-->
      <el-form-item label="资金流向" class="w13">
        <el-select v-model="form.flow" multiple placeholder="请选择" class="level">
          <el-option label="流入" value="1"></el-option>
          <el-option label="流出" value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div class="operation">
      <el-row>
        <el-col :span="3">
          <el-button type="primary" class="startButton" @click="startAnalysis">开始分析</el-button>
        </el-col>
        <el-col :span="10">
          <agreement @disable="disable" />
        </el-col>
      </el-row>
    </div>
    <el-card class="box-card" v-if="analysisVisble">
      <div slot="header" class="clearfix">
        <div class="record_legend">
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
        </div>
        <div class="report_img">
          <img src="@/assets/report.png" />
          <span>生成报告</span>
        </div>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <grap />
    </el-card>
  </div>
</template>

<script>
import grap from "../components/grap";
import agreement from "@/components/agreement/agreement";
export default {
  props: {
    status: {
      type: String,
      default: "victim"
    }
  },
  data() {
    return {
      disableButton: "",
      exchangeName: "",
      analysisVisble: false,
      searchName: "1",
      form: {
        btc: "1",
        btcAddress: "",
        money: "",
        date: "",
        level: 1,
        flow: "1"
      },
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
  watch: {
    status(val) {
      this.resetForm();
    }
  },
  mounted() {
    this.resetForm();
  },
  components: {
    grap,
    agreement
  },
  methods: {
    disable(val) {
      this.disableButton = val;
    },
    resetForm() {
      this.analysisVisble = false;
      for (const w in this.form) {
        if (!(w == "date" || w == "flow" || w == "btc")) {
          this.form[w] = "";
        }
      }
      this.form.flow = [];
      this.form.date = "";
      this.form.btc = "1";
    },
    startAnalysis() {
      if (this.disableButton == false) {
        this.$message.warning("请先阅读并接受协议！");
        return;
      }
      console.log(this.form);
      // this.resetForm();
      this.analysisVisble = true;
    }
  }
};
</script>

<style scoped>
.vic_cont {
  height: 100%;
  width: 100%;
}
.report_img span {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
  vertical-align: middle;
  padding-left: 5px;
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
::v-deep .el-form-item {
  margin-bottom: 15px;
}
::v-deep .el-input__suffix {
  right: 13px;
}
.btc_option {
  position: absolute;
}
.money_img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
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
.w13 {
  width: 15%;
}
.w20 {
  width: 20.5%;
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
::v-deep .box-card > .el-card__body {
  padding: 0;
  /* height: calc(100vh - 48vh); */
  height: 100%;
}
.btc_money {
  width: 100%;
}
::v-deep .btc_select > .el-input > .el-input__inner {
  border: none;
  background: none;
}
.btc_select {
  width: 100px;
  right: 8px;
}
.btc_input {
  width: 280px;
  display: block;
  height: 40px;
}
.box-card {
  margin-top: 10px;
  height: 74%;
}
::v-deep .el-input__inner {
  background: #f5f5f5;
}
::v-deep .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
::v-deep .el-input__inner {
  background: #f5f5f5;
}
::v-deep .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
</style>