<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <!-- <span v-if="!isAdd">报告查询</span> -->
        <!-- <span v-else>司法机构入驻申请</span> -->
        <!-- <span>司法机构入驻申请</span> -->
      </div>
      <el-card class="tran-card">
        <div class="address_info">
          <span>司法协助</span>
        </div>
        <div v-if="!isAdd" class="addNotmId">
          <div class="report_cont">
            <div class="person_gif">
              <img src="@/assets/person.gif" />
            </div>
            <div class="report_title">
              <p>报告查询</p>
            </div>
            <div class="report_input">
              <el-input placeholder="请输入链审追踪报告哈希码" v-model="params.reportNo" class="reportCont">
                <el-button slot="append" icon="el-icon-search" @click="jumpReport"></el-button>
              </el-input>
              <div class="agreement_info">
                <el-radio
                  v-model="radio1"
                  class="agreeInfoButton"
                  label=" "
                  @click.native.prevent="onRadioChange(' ')"
                ></el-radio>
                <span class="agreeInfo">
                  阅读并接受 《
                  <span class="hrefTxt" @click="visble1=true">链审用户协议</span>》 及 《
                  <span class="hrefTxt" @click="visble2=true">隐私权保护声明</span>》
                </span>
              </div>
            </div>
            <div>
              <el-button type="primary" class="inButton" @click="isAdd=true">司法协助</el-button>
            </div>
          </div>
        </div>
        <div v-else class="addMid">
          <addMission @closeAdd="closeAdd" />
        </div>
      </el-card>
    </div>
    <!-- 用户协议 -->
    <userTrea :visble1="visble1" @closeDialog="closeDialogTrea" />
    <!-- 保护声明 -->
    <userState :visble2="visble2" @closeDialog="closeDialogStae" />
  </div>
</template>

<script>
import addMission from "./templates/addMission";
// 用户协议
import userTrea from "@/components/trea/userTrea";
// 保护声明
import userState from "@/components/trea/userState";
import * as Api_report from "@/api/report";
export default {
  data() {
    return {
      params: {
        reportNo: ""
      },
      radio1: false,
      isAdd: false,
      visble1: false,
      visble2: false,
      agreeStatus: false
    };
  },
  watch: {
    radio1(val) {
      if (val == " ") {
        this.agreeStatus = true;
      } else {
        this.agreeStatus = false;
      }
    }
  },
  components: {
    addMission,
    userTrea,
    userState
  },
  methods: {
    fetchData() {
      //
    },
    onRadioChange(e) {
      // 当点击已经选中的把 activeModel 置空，就是取消选中，并返回
      if (this.radio1 === e) {
        this.radio1 = "";
        return;
      }
      // 不是选中，选中当前点击 Radio
      this.radio1 = e;
      // 选中操作
    },
    closeAdd(status) {
      this.isAdd = status;
    },
    jumpReport() {
      if (this.agreeStatus == false) {
        this.$message.warning("请先阅读并接受协议！");
        return;
      }
      if (this.params.reportNo == "") {
        this.$message.warning("链审追踪报告哈希码不能为空！");
        return;
      }
      Api_report.getAllReport(this.params).then(res => {
        if (res.data.code != 200) {
          this.$message.warning(res.data.msg);
          return;
        }
        this.$router.push({
          name: "reportDownload",
          query: { reportNo: this.params.reportNo, msg: res.data.msg }
        });
      });
    },
    closeDialogTrea(val) {
      this.visble1 = val;
    },
    closeDialogStae(val) {
      this.visble2 = val;
    }
  }
};
</script>

<style lang="scss" scoped>

.addNotmId {
  padding-left: 50px;
}
.addMid {
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-55%);
}
.inButton {
  color: white;
  width: 240px;
  height: 40px;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 16px;
}
.report_input {
  height: 250px;
  width: 60%;
  
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
  background: white !important;
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
  /* background:#fff url('../../assets/person.gif') 720px 80px/480px 480px no-repeat; */
}
/deep/ .el-card__body {
  padding: 30px;
  /* padding-left: 55px; */
  padding-top: 0px;
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
  /* height: 100%; */
  margin-top: 30px;
  height: 800px;
  background: url("../../assets/smallBack.png") no-repeat white;
  background-size: 100% 100%;
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
  font-family: PingFangSC-Medium;
  font-size: 24px;
  vertical-align: middle;
  font-weight: 400;
  line-height: 30px;
}
/* .address_info span {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  vertical-align: middle;
} */
.address_info {
  position: relative;
  top: 20px;
  left: 10px;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  /deep/ .el-card .el-card__body{
    padding-top: 60px;
  }
  .addNotmId {
    padding-left: 20px;
    position: relative;
  }
  .addMid {
    top: 50%; /*偏移*/
    transform: translateY(-55%);
  }
  .inButton {
    color: white;
    width: 240px;
    height: 40px;
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 16px;
    margin-left: 30px;
  }
  .report_input {
    height: 180px;
    width: 280px;

  }
  .agreement_info {
    font-family: PingFang-SC-Regular;
    font-size: 16px;
    /* color: #000000; */
    /* line-height: 20px; */
    color: #999999;
    margin-top: 30px;
    padding: 0 20px;
  }
  .hrefTxt {
    color: #000000;
  }
  .reportCont {
    width: 275px;
    height: 40px;
    
  }
  /deep/ .el-input__inner {
    height: 100%;
    background: white !important;
  }
  .person_gif {
    position: absolute;
    width:160px;
    height: 150px;
    right: 5%;
    top: -10%;
  }
  /* .person_gif img {
    width: 100%;
    height: 100%;
  } */
  .report_cont {
    align-items: center;
  }
  /deep/ .el-card__body {
    padding: 30px;
    padding-left: 0px;
    padding-right: 0px;
    /* padding-left: 55px; */
    padding-top: 0px;
    width: 100%;
  }
  .report_title {
    width: 377px;
    height: 110px;
    margin-bottom: 1.4vw;
  }
  .report_title p {
    font-family: PingFang-SC-Bold;
    font-size: 30px;
    color: #333333;
    letter-spacing: 2px;
    line-height: 5;
    // margin-top: 10px;
  }
  .box-card {
    margin-top: 10px;
  }
  /deep/ .el-input__inner {
    background: #f5f5f5;
    line-height: 1;
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
  /deep/ .el-input__inner {
    background: #f5f5f5;
  }
  .tran-card {
    /* height: 100%; */
    margin-top: 30px;
    height: 80%;
    background: url("../../assets/smallBack.png") no-repeat white;
    background-size: 100% 100%;
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
    vertical-align: middle;
  }
  .address_info {
    position: relative;
    top: -50px;
    left: 10px;
  }
  /deep/.el-form-item__label{
    line-height: unset;
  }
}
</style>