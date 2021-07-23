<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <span>数字货币项目追踪</span>
      </div>
      <el-card class="tran-card">
        <div class="form_param">
          <!-- tab -->
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="受害人地址" name="victim">
              <!--  -->
            </el-tab-pane>
            <el-tab-pane label="诈骗嫌疑人地址" name="liar">
              <!-- -->
            </el-tab-pane>
          </el-tabs>
          <victim :status="tabStatus" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
// 显示の组件
import victim from "./templates/victim";
export default {
  data() {
    return {
      activeName: "victim",
      exchangeName: "",
      searchName: "1",
      tabStatus: "victim",
      form: {
        btc: "1",
        btcAddress: "",
        money: "",
        date: "",
        level: 1,
        flow: "1"
      }
    };
  },
  components: {
    victim
  },
  methods: {
    fetchData() {
      //
    },
    handleClick(val) {
      this.tabStatus = val.name;
    }
  }
};
</script>

<style scoped>
.form_param {
  height: 100%;
}
.w13 {
  width: 13%;
}
.w20 {
  width: 19%;
}
.record_legend span:first-of-type {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f3862d;
  box-shadow: 0 2px 6px 0 rgba(221, 221, 221, 0.6);
}
.clearfix div {
  width: 100px;
  height: 40px;
  display: inline-block;
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
/* ::v-deep .tran-card > .el-card__body:first-of-type {
  padding: 15px;
} */
.btc_money {
  width: 100%;
}
/* ::v-deep .el-form-item__label{
  color: white;
} */
/* .demo-form-inline {
  display: inline-block;
}
.btc_cont {
  display: inline-block;
} */
::v-deep .btc_select > .el-input > .el-input__inner {
  border: none;
  background: none;
}
.btc_select {
  width: 100px;
  position: absolute;
}
.btc_input {
  width: 280px;
  display: block;
  height: 40px;
}
.box-card {
  margin-top: 10px;
}
::v-deep .el-input__inner {
  background: #f5f5f5;
}
.tran-card {
  /* height: 100%; */
  margin-top: 30px;
  height: 89%;
}
::v-deep .tran-card > .el-card__body {
  /* height: 100%; */
  height: 100%;
}
::v-deep .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
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
  color: #ffffff;
  vertical-align: middle;
}
.address {
  padding-left: 18px;
}
</style>