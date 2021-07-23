<template>
  <div v-if="loginStatus=='phone'">
    <div class="mechanismLogin">
      <span @click="jumpTab('机构用户登录','mechanism')">机构用户登录</span>
    </div>
    <el-row :gutter="12">
      <el-col :span="5">
        <el-select v-model="phoneForm.phoneType" placeholder="请选择">
          <el-option value="1" label="+86" />
        </el-select>
      </el-col>
      <el-col :span="19">
        <el-input v-model="phoneForm.phone" placeholder="请输入11位手机号"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="16">
        <el-input v-model="phoneForm.verificationCode" placeholder="请输入短信验证码"></el-input>
      </el-col>
      <el-col :span="8">
        <el-button class="codeButton" @click="getPhoneCode" :disabled="codeCont!='重新发送'">{{codeCont}}</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="16">
        <el-input v-model="phoneForm.rightCode" placeholder="请输入右侧验证码"></el-input>
      </el-col>
      <el-col :span="8">
        <el-button class="codeButton">95530</el-button>
      </el-col>
    </el-row>
    <div class="opButton">
      <el-button type="primary" class="loginButton">登录</el-button>
      <p>没有账号，立即注册</p>
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
        <el-input v-model="mechanismForm.password" placeholder="请输入密码"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="16">
        <el-input v-model="mechanismForm.rightCode" placeholder="请输入右侧验证码"></el-input>
      </el-col>
      <el-col :span="8">
        <el-button class="codeButton">95530</el-button>
      </el-col>
    </el-row>
    <p class="desc">客服：010-9876 6789 联系客服修改密码</p>
    <div class="opButton2">
      <el-button type="primary" class="loginButton">登录</el-button>
      <p>没有账号，立即注册</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneForm: {
        phoneType: "1",
        phone: "",
        verificationCode: "",
        rightCode: ""
      },
      mechanismForm: {
        username: "",
        password: "",
        rightCode: ""
      },
      codeCont: "获取短信验证码",
      loginStatus: "phone"
    };
  },
  methods: {
    getPhoneCode() {
      var minu = 60;
      var s = setInterval(() => {
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
      this.$emit("updateTitle", txt);
    }
  }
};
</script>

<style  scoped>
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
::v-deep .el-dialog__title {
  width: 120px;
  height: 33px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 24px;
  color: #151c2c;
  opacity: 1;
}
/* ::v-deep .el- */
::v-deep .el-input__inner {
  height: 58px;
}
::v-deep .el-row {
  margin-top: 20px;
}
.codeButton {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  height: 58px;
  color: #0074f8;
}
</style>