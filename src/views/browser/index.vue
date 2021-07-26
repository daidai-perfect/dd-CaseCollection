<template>
  <div class="browser">
    <div class="center">
      <span class="titTop">Welcome to</span>
      <h3 class="tit">CHAINAUDIT</h3>
      <span class="titbom">更适合执法机构的区块链浏览器</span>
      <span class="line"></span>
      <div class="bro_input">
        <img class="search" src="../../assets/newimg/放大镜@2x.png" @click="getCurrencyRecord" alt="">
        <el-input placeholder="搜索地址/交易" v-model="form.value" class="input-with-select" spellcheck="false">
          <el-select v-model="form.select" slot="prepend" placeholder="请选择" class="selectType">
            <el-option label="ETH" value="ETH"></el-option>
            <!-- <el-option label="DASH" value="2"></el-option> -->
            <el-option label="USDT(ERC20)" value="USDT"></el-option>
            <el-option label="USDT(TRC20)" value="TRON"></el-option>
          </el-select>
        </el-input>
        <agreement @disable="disable" />
      </div>
      <div class="keep">
        <span @click="toBei" style="cursor: pointer;">京ICP备2020047292号-1</span>
        <span style="display:inline-block;margin-left:20px" >京公网安备 11010502044280号</span>
      </div>
    </div>
  </div>
</template>

<script>
import agreement from "@/components/agreement/agreemenIndex";
export default {
  data() {
    return {
      form: {
        value: "",
        select: "ETH"
      },
      disableButton: ""
    };
  },
  components: {
    agreement
  },
  methods: {
    toBei() {
      window.open("http://beian.miit.gov.cn/");
    },
    //
    disable(val) {
      this.disableButton = val;
    },
    // 跳转到浏览器交易记录
    getCurrencyRecord() {
      if (this.disableButton == false) {
        this.$message.warning("请先阅读并接受协议！");
        return;
      }
      if (this.form.value == "") {
        this.$message.warning("请输入！");
        return;
      }
      if (this.form.select != "TRON") {
        switch (this.form.value.length) {
          case 42:
            // 列表
            this.$router.push({
              path: "/browser/transactionRecoard",
              query: { value: this.form.value, type: this.form.select }
            });
            break;
          case 66:
            // 详情
            this.$router.push({
              path: "/browser/transactionDetail",
              query: { value: this.form.value, type: this.form.select }
            });
            break;
          default:
            this.$message.warning("输入有误");
            break;
        }
      } else {
        this.$router.push({
          path: "/browser/transactionRecoard",
          query: { value: this.form.value, type: this.form.select }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.browser{
  color: #FFFFFF;
  font-family: Alibaba;
  font-weight: normal;
  // margin-top: 150px;
  position: relative;
  .center{
    padding-left:50px;
    width: 1200px;
    // height:600px ;
    margin:50px auto 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-around;
    .titTop{
      font-size: 27px;
    }
    .tit{
      font-size: 86px;
      margin: 20px 0 ;
    }
    .titbom{
      height: 38px;
      font-size: 41px;
    }
    .line{
      display: block;
      height: 3px;
      width: 150px;
      background-color: #fff;
      margin: 40px 0;
    }
    .bro_input{
      width: 660px;
      height: 68px;
      border: 2px solid #FFFFFF;
      border-radius: 30px;
      position: relative;
      .input-with-select {
        background: transparent;
        width: 100%;
        border-radius: 30px;
        height: 100%;
        margin-bottom: 50px;
      }
      .search{
        width: 30px;
        height: 34px;
        position:absolute;
        top: 0;
        right: 20px;
        bottom: 0;
        margin: auto 0;
        z-index: 99999;
      }
    }
    .keep{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 67px;
      line-height: 67px;
      text-align: center;
      background: #4D4C4D;
      z-index: 99999;
      span{
        font-size: 20px;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 23px;
      }
    }
  }
::v-deep .el-input__inner {
  border: none;
  height: 100%;
  /* border-radius: 36px; */
  color: #fff;
  line-height:68px;
}
::v-deep .el-select {
  background: transparent !important;
  border-radius: 36px 0px 0px 36px;
  height: 100%;
  line-height: 68px;
}
::v-deep .el-radio__input.is-checked + .el-radio__label {
  color: transparent;
}
::v-deep .el-input-group__prepend {
  border: none;
  background: transparent;
  font-weight: 700;
  color: #fff !important;
}
.el-radio {
  margin: 0;
}
.selectType {
  width: 180px;
}
::v-deep .el-select .el-input__inner {
  font-size: 1vw;
  text-align: center;
  color: #fff;
  vertical-align: unset;
  background: transparent !important;
}
::v-deep.el-input__inner{
  background-color: transparent !important;

}
::v-deep .el-input__icon{
  height: unset;
}
}
</style>