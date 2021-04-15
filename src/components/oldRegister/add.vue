<template>
  <div>
    <div>
      <el-radio-group v-model="registrationType" @change="tabType">
        <el-radio label="ordinary" class="ordinary">普通身份</el-radio>
        <el-radio label="security">公安</el-radio>
      </el-radio-group>
    </div>
    <div v-if="addStatus=='ordinary'">
      <el-row :gutter="12">
        <el-col :span="5">
          <el-select v-model="ordinaryForm.phoneType" placeholder="请选择">
            <el-option value="1" label="+86" />
          </el-select>
        </el-col>
        <el-col :span="19">
          <el-input v-model="ordinaryForm.phone" placeholder="请输入11位手机号"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="ordinaryForm.verificationCode" placeholder="请输入短信验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button class="codeButton" @click="getPhoneCode">{{codeCont}}</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="ordinaryForm.rightCode" placeholder="请输入右侧验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button class="codeButton">95530</el-button>
        </el-col>
      </el-row>
      <div class="opButton">
        <el-button type="primary" class="loginButton">注册</el-button>
        <p>使用已有账号登录</p>
      </div>
    </div>
    <div v-else-if="addStatus=='security'">
      <el-row :gutter="12">
        <el-col :span="5">
          <el-select v-model="securityForm.phoneType" placeholder="请选择">
            <el-option value="1" label="+86" />
          </el-select>
        </el-col>
        <el-col :span="19">
          <el-input v-model="securityForm.phone" placeholder="请输入11位手机号"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="securityForm.verificationCode" placeholder="请输入短信验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button class="codeButton" @click="getPhoneCode" :disabled="codeCont!='重新发送'">{{codeCont}}</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="24">
          <el-input v-model="securityForm.telPhone" placeholder="请输入座机号码"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="securityForm.rightCode" placeholder="请输入右侧验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button class="codeButton">95530</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="24">
          <span class="voucher">上传凭证</span>
          <el-upload
            action="http://123.56.232.81:8080/commonFile/upload"
            :file-list="fileList"
            list-type="picture-card"
            class="form_doms"
            :on-success="handSuccess"
            :on-remove="handRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-col>
      </el-row>
      <div class="opButton">
        <el-button type="primary" class="loginButton">注册</el-button>
        <p>使用已有账号登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ordinaryForm: {
        phoneType: "1",
        phone: "",
        verificationCode: "",
        rightCode: ""
      },
      securityForm: {
        phoneType: "1",
        phone: "",
        verificationCode: "",
        telPhone: "",
        rightCode: ""
      },
      registrationType: "ordinary",
      codeCont: "获取短信验证码",
      addStatus: "ordinary",
      fileList: []
    };
  },
  methods: {
    getPhoneCode() {
      var minu = 60;
      var s = setInterval(() => {
        minu--;
        this.codeCont = "重新获取(" + minu + ")s";
        if (minu == 0) {
          window.clearInterval(s);
          this.codeCont = "重新发送";
          return;
        }
      }, 1000);
    },
    // 切换机构登录
    jumpTab(txt, status) {
      this.addStatus = status;
    },
    // 切换类型普通用户/公安
    tabType(val) {
      this.addStatus = val;
    },
    // 上传成功的钩子
    handSuccess(response, file, fileList) {
      this.fileList = fileList;
    },
    // 删除文件的钩子
    handRemove(file, fileList) {
      this.fileList = fileList;
    }
  }
};
</script>

<style  scoped>
.form_doms {
  display: inline-block;
}
.voucher {
  width: 56px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 20px;
  color: #333333;
  opacity: 1;
  margin-right: 20px;
}
.ordinary {
  margin-right: 50px;
  margin-bottom: 10px;
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
}
</style>