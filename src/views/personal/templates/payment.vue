<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <span>账单生成，等待支付</span>
      </div>
      <el-card class="tran-card">
        <div class="form_param">
          <p>选择支付方式：</p>
          <div class="money">
            <div class="block wx">
              <img src="@/assets/zfb.png" class="moneyZfbImg" />
            </div>
            <div class="block zfb" id="qrcode">
              <img src="@/assets/wx.png" class="moneyImg" />
            </div>
          </div>
          <div class="opButton">
            <el-button type="primary" @click="submitMoney">支付完成</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as Api_tool from "@/api/tool";
import { Loading } from "element-ui";
// 生成二维码
import QRCode from "qrcodejs2";
export default {
  data() {
    return {};
  },
  mounted() {
    this.payment();
  },
  computed: {
    ...mapGetters(["sysUser"])
  },
  methods: {
    payment() {
      var data = {
        money: 5000,
        payType: "NATIVE",
        tradeNo: this.$route.query.reportNo,
        userId: this.sysUser.id
      };
      Api_tool.paymentWX(data).then(res => {
        this.qrcode(res.data.codeUrl);
      });
    },
    qrcode(url) {
      let qrcode = new QRCode("qrcode", {
        width: 148,
        height: 150, // 高度
        text: url // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      });
      console.log(qrcode);
    },
    submitMoney() {
      // 判断有没有支付成功，没成功传error，成功传success
      // Api_tool.whetherPay().then(res => {
      //   console.log(res);
      // });
      let loading = Loading.service({
        fullscreen: true,
        text: "正在加载，请稍候！",
        spinner: "el-icon-loading",
        background: "rgba(0,0,0,0.7)"
      });
      setTimeout(() => {
        loading.close();
        Api_tool.whetherPay({
          reportNo: this.$route.query.reportNo
        }).then(res => {
          console.log(res, "支付状态?");
          if (res.data) {
            this.$router.push({
              name: this.$route.query.rouName,
              params: { status: "success" }
            });
          }
        });
      });
    }
  }
};
</script>

<style scoped>
/* #qrcode img{
  padding-top: 30px;
} */

#qrcode {
  margin: 0;
  padding: 5px;
  padding-left: 30px;
  padding-top: 65px;
}
.moneyZfbImg {
  width: 148px;
  height: 40px;
  margin-top: 10px;
}
.moneyImg {
  width: 148px;
  height: 40px;
  margin-top: 20px;
  position: absolute;
  top: -10px;
  right: 25%;
}
.zfb {
  float: right;
}
.money {
  margin: 0 auto;
  width: 50%;
  height: 380px;
}
.block {
  width: 280px;
  height: 300px;
  background: #f5f5f5;
  border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0px 0px;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  position: relative;
}
.form_param p {
  font-family: PingFang-SC-Bold;
  font-size: 24px;
  color: #333333;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 500;
}
.form_param {
  text-align: center;
  position: relative;
  top: 15%; /*偏移*/
  height: 100%;
}
.wx {
  float: left;
  /* margin-right: 50px; */
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
/* /deep/ .tran-card > .el-card__body:first-of-type {
  padding: 15px;
} */
.btc_money {
  width: 100%;
}
/* /deep/ .el-form-item__label{
  color: white;
} */
/* .demo-form-inline {
  display: inline-block;
}
.btc_cont {
  display: inline-block;
} */
/deep/ .btc_select > .el-input > .el-input__inner {
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
/deep/ .el-input__inner {
  background: #f5f5f5;
}
.tran-card {
  /* height: 100%; */
  margin-top: 30px;
  height: 89%;
}
/deep/ .tran-card > .el-card__body {
  /* height: 100%; */
  height: 100%;
}
/deep/ .el-card__header {
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