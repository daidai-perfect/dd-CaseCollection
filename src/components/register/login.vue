<template>
  <div v-if="loginStatus=='phone'">
    <div class="mechanismLogin">
      <span @click="jumpTab('机构用户登录','mechanism')">机构用户登录</span>
    </div>
    <el-row :gutter="12">
      <el-col :span="5">
        <el-select v-model="phoneType" placeholder="请选择">
          <el-option value="1" label="+86" />
        </el-select>
      </el-col>
      <el-col :span="19">
        <el-input v-model="phoneForm.mobile" placeholder="请输入11位手机号"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="16">
        <el-input v-model="phoneForm.smsCode" placeholder="请输入短信验证码"></el-input>
      </el-col>
      <el-col :span="8" align="right">
        <el-button
          class="codeButton"
          @click="getPhoneCode"
          :disabled="codeCont!='获取验证码' && codeCont!='重新发送'"
        >{{codeCont}}</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="16">
        <el-input v-model="phoneForm.code" placeholder="请输入右侧验证码"></el-input>
      </el-col>
      <el-col :span="8">
        <img :src="codeImg" @click="getCodeImg" class="codeImg" />
        <!-- <el-button class="codeButton">95530</el-button> -->
      </el-col>
    </el-row>
    <div class="opButton">
      <el-button type="primary" class="loginButton" @click="submitLogin">登录</el-button>
      <p @click="toAdd">没有账号，立即注册</p>
    </div>
  </div>
  <div v-else-if="loginStatus=='mechanism'">
    <div class="mechanismLogin">
      <span @click="jumpTab('个人用户登录','phone')">个人用户登录</span>
    </div>
    <el-row :gutter="12">
      <el-col :span="24">
        <el-input v-model="mechanismForm.username" placeholder="请输入用户名"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="24">
        <el-input v-model="mechanismForm.password" placeholder="请输入密码" type="password"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="16">
        <el-input v-model="mechanismForm.code" placeholder="请输入右侧验证码"></el-input>
      </el-col>
      <el-col :span="8">
        <img :src="codeImg" @click="getCodeImg" class="codeImg" />
      </el-col>
    </el-row>
    <!-- <p class="desc">客服：010-9876 6789 联系客服修改密码</p>  -->
    <div class="opButton2">
      <el-button type="primary" class="loginButton" @click.native.prevent="submitLogin">登录</el-button>
      <p @click="toAdd">没有账号，立即注册</p>
    </div>
  </div>
</template>

<script>
import * as Api_user from "@/api/user";
import * as Api_tool from "@/api/tool";
import { getToken } from "@/utils/auth";
var s;
export default {
  props: {
    visble: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      phoneType: "1",
      phoneForm: {
        mobile: "",
        code: "",
        smsCode: "",
        uuid: ""
      },
      codeImg: "",
      mechanismForm: {
        username: "",
        password: "",
        code: "",
        uuid: ""
      },
      codeCont: "获取验证码",
      loginStatus: "phone"
    };
  },
  watch: {
    visble(val) {
      if (val) {
        window.clearInterval(s);
        this.loginStatus = "phone";
        this.codeCont = "获取验证码";
        this.resetForm();
      }
    }
  },
  mounted() {
    this.getCodeImg();
  },
  methods: {
    toAdd() {
      this.$emit("toAdd", "0");
    },
    getCodeImg() {
      Api_user.getCode({}).then(res => {
        this.codeImg = "data:image/jpg;base64," + res.img;
        this.mechanismForm.uuid = res.uuid;
        this.phoneForm.uuid = res.uuid;
      });
    },
    getSendSms() {
      Api_tool.sendSms({
        mobile: this.phoneForm.mobile,
        type: "login"
      }).then(res => {});
    },
    getPhoneCode() {
      if (this.phoneForm.mobile == "") {
        this.$message.warning("请先填写手机号");
        return;
      }
      var minu = 60;
      var smsStatus = this.getSendSms();
      s = setInterval(() => {
        minu--;
        this.codeCont = "重新获取" + minu + "秒";
        if (minu == 0) {
          window.clearInterval(s);
          this.codeCont = "重新发送";
          return;
        }
      }, 1000);
    },
    // 切换机构登录
    jumpTab(txt, status) {
      this.loginStatus = status;
      this.resetForm();
      this.$emit("updateTitle", txt);
    },
    // 重置表单
    resetForm() {
      for (const w in this.phoneForm) {
        this.phoneForm[w] = "";
      }
      for (const w in this.mechanismForm) {
        this.mechanismForm[w] = "";
      }
    },
    // 登录
    submitLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true;
      //     this.$store
      //       .dispatch("user/login", this.loginForm)
      //       .then(() => {
      //         this.$router.push({ path: this.redirect || "/" });
      //         this.loading = false;
      //       })
      //       .catch(() => {
      //         this.loading = false;
      //       });
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
      var form = {};
      var path = "";
      if (this.loginStatus == "phone") {
        path = "user/loginPhone";
        form = this.phoneForm;
      } else if (this.loginStatus == "mechanism") {
        path = "user/login";
        form = this.mechanismForm;
      }
      this.$store
        .dispatch(path, form)
        .then(() => {
          this.$emit("loginSuccess", true);
          this.$emit("handleClose", false);
          if (getToken()) {
            this.$store.dispatch("user/getInfo");
          }
          this.$message.success("登录成功!");
        })
        .catch(() => {
          this.getCodeImg();
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.codeImg {
  height: 58px;
  width: 100%;
}
.desc {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 12px;
  color: #999999;
  opacity: 1;
  margin-top: 20px;
}
.mechanismLogin {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 22px;
  color: #0074f8;
  opacity: 1;
  text-align: right;
}
.mechanismLogin span {
  cursor: pointer;
}
.loginButton {
  height: 50px;
  width: 100%;
}
.opButton {
  text-align: center;
  margin-top: 50px;
}
.opButton2 {
  margin-top: 30px;
  text-align: center;
}
.opButton p {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #0074f8;
  opacity: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.opButton2 p {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #0074f8;
  opacity: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.loginDialog {
  z-index: 9999999999999999999999 !important;
  /* text-align: center; */
}
/deep/ .el-dialog__title {
  width: 120px;
  height: 33px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 24px;
  color: #151c2c;
  opacity: 1;
}
/* /deep/ .el- */
/deep/ .el-input__inner {
  height: 58px;
}
/deep/ .el-row {
  margin-top: 20px;
}
.codeButton {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  height: 58px;
  color: #0074f8;
  width: 100%;
  margin: auto;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  .codeImg {
    height: 30px;
    width: 100%;
  }
  .desc {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 12px;
    color: #999999;
    opacity: 1;
    margin-top: 20px;
  }
  .mechanismLogin {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 22px;
    color: #0074f8;
    opacity: 1;
    text-align: right;
  }
  .mechanismLogin span {
    cursor: pointer;
  }
  .loginButton {
    height: 30px;
    width: 100%;
    font-size: 14px;
  }
  .opButton {
    text-align: center;
    margin-top: 50px;
  }
  .opButton2 {
    margin-top: 30px;
    text-align: center;
  }
  .opButton p {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #0074f8;
    opacity: 1;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .opButton2 p {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #0074f8;
    opacity: 1;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .loginDialog {
    z-index: 9999999999999999999999 !important;
    /* text-align: center; */
  }
  /deep/ .el-dialog__header .el-dialog__title {
    width: 120px;
    height: 33px;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 24px;
    color: #151c2c;
    opacity: 1;
  }
  /* /deep/ .el- */
  /deep/ .el-input .el-input__inner {
    height: 38px;
    font-size: 12px;
    padding: 6px;
  }
  /deep/ .el-row {
    margin-top: 20px;
  }
  .codeButton {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    height: 38px;
    color: #0074f8;
  }
  /deep/ .el-input__suffix-inner .el-icon-arrow-up {
    width: 18px;
  }
}
</style>