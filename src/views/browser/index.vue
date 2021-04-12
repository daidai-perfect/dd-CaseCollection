<template>
  <div class="browser">
    <!-- <div class="browser-img">
      <img src="@/assets/chromeBack.png" class="backImg" />
    </div>-->
    <div class="bro_lay">
      <div class="bro_title">
        <div class="home_title">全球领先的区块链浏览器</div>
      </div>

      <div class="bro_line">
        <img src="@/assets/light.png" />
      </div>
      <div class="bro_input">
        <el-input placeholder="搜索地址/交易" v-model="form.value" class="input-with-select">
          <el-select v-model="form.select" slot="prepend" placeholder="请选择" class="selectType">
            <el-option label="ETH" value="ETH"></el-option>
            <!-- <el-option label="DASH" value="2"></el-option> -->
            <el-option label="USDT(ERC20)" value="USDT"></el-option>
            <el-option label="USDT(TRC20)" value="TRON"></el-option>
          </el-select>
          <el-button
            slot="append"
            class="serachButton"
            icon="el-icon-search"
            @click="getCurrencyRecord"
          ></el-button>
        </el-input>
        <agreement @disable="disable" />
        <!-- 备案号 -->
        <div style="margin:0 auto; padding:20px 0;" class="keep">
          <p @click="toBei" style="cursor: pointer;">京ICP备2020047292号-1</p>
          <a style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
            <img src="@/assets/policeLogo.jpg" style="float:left;" />
            <p
              style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;"
            >京公网安备 11010502044280号</p>
          </a>
        </div>
        <!-- <div class="keep">
          <p @click="toBei">京ICP备2020047292号-1</p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
// import radioInfo from "@/components/radioInfo"
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
      // if (this.form.value.length == 42) {
      //   // 列表
      //   this.$router.push({
      //     path: "/browser/transactionRecoard",
      //     query: { value: this.form.value, type: this.form.select }
      //   });
      // } else if (this.form.value.length == 66) {
      //   // 详情
      //   this.$router.push({
      //     path: "/browser/transactionDetail",
      //     query: { value: this.form.value, type: this.form.select }
      //   });
      // } else {
      //   this.$message.warning("输入有误");
      //   return;
      // }
    }
  }
};
</script>

<style  scoped>
.keep {
  font-size: 19px;
  position: fixed;
  bottom: -180px;
  right: 20px;
  text-align: center;
  width: 100%;
  color: #939393;
}
.keep p {
  margin-bottom: 5px;
}
.serachButton {
  width: 120px;
}
/deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #ffffff;
}
/deep/ .el-input-group__prepend {
  border-radius: 36px;
  border: none;
}
.el-radio {
  margin: 0;
}
.selectType {
  width: 180px;
}
/deep/ .el-input__inner {
  border: none;
  height: 100%;
  /* border-radius: 36px; */
  line-height: 1;
}
/deep/ .el-select .el-input__inner {
  height: auto;
  font-family: PingFang-SC-Bold;
  font-size: 1vw;
  color: #333333 !important;
  text-align: center;
  /* line-height: 20px; */
  line-height: 2.8;
  vertical-align: middle;
}
/deep/ .el-select {
  background: white;
  /* border-radius: 8px; */
  border-radius: 36px 0px 0px 36px;
  height: 99%;
  line-height: 3.5vw;
}
.input-with-select {
  background: #ffffff;
  border: 1px solid #1a6dff;
  width: 100%;
  border-radius: 36px;
  height: 100%;
  margin-bottom: 50px;
}
.bro_line {
  width: 100%;
  height: 4px;
  /* background: #2f7aff; */
  margin-bottom: 90px;
  margin-top: 5px;
  position: relative;
  right: 30px;
}
.bro_line img {
  width: 100%;
}
.home_title {
  font-family: PingFang-SC-Bold;
  font-size: 54px;
  color: #ffffff;
  /* letter-spacing: 2px; */
  text-align: center;
  line-height: 54px;
}
.backImg {
  width: 100%;
  z-index: 1;
  height: 100%;
}
.browser-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
}
.browser {
  width: 100%;
  height: 100%;
  /* display: flex; */
  text-align: center;
  overflow-y: hidden;
}
.bro_lay {
  color: #fff;
  width: 82%;
  margin: 0 auto;
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-45%);
  padding-bottom: 80px;
}
.bro_input {
  width: 900px;
  height: 72px;
  margin: 0 auto;
  margin-bottom: 50px;
}
/deep/ .el-input-group__append,
.el-input-group__prepend {
  border: none;
  background: #1a6dff;
  border-radius: 36px;
  color: white;
  font-size: 20px;
}
/* .bro_lay{
  position: relative;
  top: calc((100% - 85%));
} */
/* @media screen and (min-height: 0px) {
  .bro_lay {
    padding-top: calc((100% - 85%) / 2);
  }
} */

/* ---------------------------------------------------------- */
/* 移动端 */
@media screen and (max-width: 750px) {
  .home_title {
    font-family: PingFang-SC-Bold;
    font-size: 25px;
    color: #ffffff;
    /* letter-spacing: 2px; */
    text-align: center;
    line-height: 54px;
  }
  .keep {
    font-size: 19px;
    position: fixed;
    bottom: -180px;
    /* right: 20px; */
    text-align: center;
    width: 100%;
    cursor: pointer;
  }
  .serachButton {
    width: 80px;
  }
  /deep/ .el-input-group__prepend {
    border-radius: 36px;
    border: none;
    background: none;
  }
  .selectType {
    width: 115px;
  }
  /deep/ .el-input__inner {
    border: none;
    height: 100%;
    /* border-radius: 36px; */
    font-size: 14px;
  }
  /deep/ .el-select .el-input__inner {
    height: auto;
    font-family: PingFang-SC-Bold;
    color: #333333 !important;
    text-align: center;
    /* line-height: 20px; */
    line-height: 2.8;
    vertical-align: middle;
    font-size: 13px;
  }
  /deep/ .el-select {
    background: white;
    /* border-radius: 8px; */
    border-radius: 36px 0px 0px 36px;
    height: 99%;
    line-height: 3px;
    padding: 0;
    margin: 0;
  }
  .input-with-select {
    background: #ffffff;
    border: 1px solid #1a6dff;
    width: 100%;
    border-radius: 36px;
    height: 100%;
    margin-bottom: 50px;
  }
  .bro_line {
    width: 100%;
    height: 4px;
    margin-top: 5px;
    position: relative;
  }
  .backImg {
    width: 100%;
    z-index: 1;
    height: 100%;
  }
  .browser-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-width: 1000px;
    z-index: -10;
    zoom: 1;
  }
  .browser {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
  }
  .bro_lay {
    color: #fff;
    width: 86%;
    margin: 0 auto;
    position: relative;
    top: 50%; /*偏移*/
    transform: translateY(-50%);
    /* padding-bottom: 80px; */
  }
  .bro_input {
    width: 330px;
    height: 18px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  /deep/ .el-input-group__append,
  .el-input-group__prepend {
    border: none;
    background: #1a6dff;
    border-radius: 36px;
    width: 20%;
    color: white;
    font-size: 20px;
  }
  /deep/ .el-select .el-input .el-select__caret {
    font-size: 14px;
  }
}
</style>