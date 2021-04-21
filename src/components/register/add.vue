<template>
  <div>
    <div>
      <el-radio-group v-model="form.type" @change="resetForm" class="radioSelect">
        <el-radio :label="1" class="ordinary">普通用户</el-radio>
        <el-radio :label="2">执法人员</el-radio>
      </el-radio-group>
    </div>
    <div v-if="form.type==1">
      <el-row :gutter="12">
        <el-col :span="5">
          <el-select v-model="phoneType" placeholder="请选择">
            <el-option value="1" label="+86" />
          </el-select>
        </el-col>
        <el-col :span="19">
          <el-input v-model="form.mobile" placeholder="请输入11位手机号"></el-input>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="12">
        <el-col :span="24">
          <el-input v-model="form.password" placeholder="输入密码" type="password"></el-input>
        </el-col>
      </el-row>-->
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="form.smsCode" placeholder="请输入短信验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button
            class="codeButton"
            @click="getPhoneCode"
            :disabled="codeCont!='获取短信验证码' && codeCont!='重新发送'"
          >{{codeCont}}</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="form.code" placeholder="请输入右侧验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <img :src="codeImg" @click="getCodeImg" class="codeImg" />
          <!-- <el-button class="codeButton">95530</el-button> -->
        </el-col>
      </el-row>
      <div class="opButton">
        <el-button type="primary" class="loginButton" @click="submitAdd">注册</el-button>
        <p @click="toLogin">使用已有账号登录</p>
      </div>
    </div>
    <div v-else-if="form.type==2">
      <el-row :gutter="12">
        <el-col :span="5">
          <el-select v-model="phoneType" placeholder="请选择">
            <el-option value="1" label="+86" />
          </el-select>
        </el-col>
        <el-col :span="19">
          <el-input v-model="form.mobile" placeholder="请输入11位手机号"></el-input>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="12">
        <el-col :span="24">
          <el-input v-model="form.password" placeholder="输入密码" type="password"></el-input>
        </el-col>
      </el-row>-->
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="form.smsCode" placeholder="请输入短信验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button
            class="codeButton"
            @click="getPhoneCode"
            :disabled="codeCont!='获取短信验证码' && codeCont!='重新发送'"
          >{{codeCont}}</el-button>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="12">
        <el-col :span="24">
          <el-input v-model="form.telPhone" placeholder="请输入座机号码"></el-input>
        </el-col>
      </el-row>-->
      <el-row :gutter="12">
        <el-col :span="16">
          <el-input v-model="form.code" placeholder="请输入右侧验证码"></el-input>
        </el-col>
        <el-col :span="8">
          <img :src="codeImg" @click="getCodeImg" class="codeImg" />
          <!-- <el-button class="codeButton">95530</el-button> -->
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="24">
          <span class="voucher">请上传您的警官证</span>
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
        <el-button type="primary" class="loginButton" @click="submitAdd">注册</el-button>
        <p @click="toLogin">使用已有账号登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as Api_user from "@/api/user";
import * as Api_tool from "@/api/tool";
export default {
  data() {
    return {
      codeImg: "",
      phoneType: "1",
      form: {
        type: 1,
        code: "",
        password: "",
        mobile: "",
        smsCode: "",
        uuid: "",
        fileIdList: []
      },
      codeCont: "获取短信验证码",
      fileList: []
    };
  },
  mounted() {
    this.getCodeImg();
  },
  methods: {
    // 注册
    submitAdd() {
      if (this.form.type == 2) {
        this.form.fileIdList = [];
        this.fileList.forEach(item => {
          this.form.fileIdList.push(item.response.fileRecord.id);
        });
      }
      Api_user.addUser(this.form)
        .then(res => {
          if (res.code == 200) {
            this.$message.success("注册成功!");
          } else {
            this.getCodeImg();
          }
        })
        .catch(error => {
          this.getCodeImg();
        });
    },
    getSendSms() {
      Api_tool.sendSms({ mobile: this.form.mobile, type: "register" }).then(
        res => {
          console.log(res);
        }
      );
    },
    getCodeImg() {
      Api_user.getCode({}).then(res => {
        this.codeImg = "data:image/jpg;base64," + res.img;
        this.form.uuid = res.uuid;
      });
    },
    getPhoneCode() {
      var minu = 60;
      this.getSendSms();
      var s = setInterval(() => {
        minu--;
        this.codeCont = "重新获取" + minu + "s";
        if (minu == 0) {
          window.clearInterval(s);
          this.codeCont = "重新发送";
          return;
        }
      }, 1000);
    },
    // 切换清除表单
    resetForm() {
      for (const w in this.form) {
        if (!(w == "fileIdList" || w == "type")) {
          this.form[w] = "";
        }
      }
      this.fileList = [];
    },
    // 去登录
    toLogin() {
      this.resetForm();
      this.$emit("toLogin", "1");
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
.codeImg {
  height: 58px;
  width: 100%;
}
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
  font-size: 14px;
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
/* 移动端 */
@media screen and (max-width: 750px) {
  /deep/ .el-input__inner {
    height: 58px;
    font-size: 14px;
    line-height: 1;
  }
  .codeImg {
    height: 38px;
    width: 100%;
  }
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
  /deep/ .el-radio__label {
    font-size: 14px;
    line-height: 1;
  }
}
</style>