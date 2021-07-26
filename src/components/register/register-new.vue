<template>
  <div class="login">
    <div class="center">
        <div class="left">
            <div class="card">
                <p class="title">注册</p>
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
                    <el-col :span="8" align="right">
                        <img :src="codeImg" @click="getCodeImg" class="codeImg" />
                        <!-- <el-button class="codeButton">95530</el-button> -->
                    </el-col>
                </el-row>
                <span class="loginButton"  @click="submitAdd">Register</span>
                <div class="bottom">
                    <span class="register" @click="toLogin">使用已有账号登录</span>
                </div>
            </div>
        </div>
        <div class="right">
            <span class="tit">Welcome to ChainAudit</span>
            <div class="con">
                <p>链审科技是一家区块链大数据分析平台服务商</p>
                <p>专注于通过人工智能与大数据技术</p>
                <p>为用户提供高效可靠又简单易用的区块链数据分析解决方案</p>
                <p>并可向政务、金融、存证、溯源等领域的行业应用</p>
                <p>提供全面的区块链解决方案</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import login from "./login";
import add from "./add";
import * as Api_user from "@/api/user";
import * as Api_tool from "@/api/tool";
import { getToken } from "@/utils/auth";
var s;
export default {
  props: {
    visble: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: ""
    }
  },
  components: {
    login,
    add
  },
  data() {
    return {
      title: "",
      tabStatus: "",
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
      if (val == true) {
        this.tabStatus = "1";
        this.title = "个人用户登录";
      }
    }
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
    loginSuccess(val) {
      this.$emit("loginSuccess", val);
    },
    handleClose(val) {
      this.$emit("closeDialog", false);
    },
    updateTitle(val) {
      this.title = val;
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
      this.$router.push({
          path:'/login'
      });
    },
    // 上传成功的钩子
    handSuccess(response, file, fileList) {
      this.fileList = fileList;
    },
    // 删除文件的钩子
    handRemove(file, fileList) {
      this.fileList = fileList;
    },
  }
};
</script>

<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100%;
    .center{
        background: #EEE;
        height: 100%;
        display: flex;
        .left{
            width: 50%;
            height: 100%;
            padding-top: 200px;
            padding-left: 200px;
            .card{
                width: 514px;
                height: 487px;
                background: #fff;
                box-shadow: 0px 15px 43px 0px rgba(201, 223, 231, 0.79);
                padding-top: 40px;
                padding-left: 40px;
                padding-right: 40px;
                margin:auto;
                text-align: center;
                .title{
                    font-size: 23px;
                    font-weight: normal;
                    color: #24344B;
                    padding-bottom: 40px;
                }
                .loginButton{
                    display: inline-block;
                    width: 400px;
                    height: 59px;
                    line-height: 69px;
                    text-align: center;
                    background: #3BB094;
                    box-shadow: 0px 11px 24px 0px rgba(59, 176, 148, 0.2);
                    border-radius: 30px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #FFFFFF;
                    margin-top: 30px;
                }
                .bottom{
                    margin-top: 30px;
                    .register{
                        display: inline-block;
                        font-size: 16px;
                        font-weight: normal;
                        text-decoration: underline;
                        color: #6979FF;
                        cursor:pointer;
                    }
                }
            }
            
        }
        .right{
            width: 50%;
            height: 100%;
            background: #fff !important;
            padding-top: 300px;
            padding-left: 100px;
            .tit{
                display: inline-block;
                font-size: 23px;
                font-family: MyriadPro;
                font-weight: 600;
                color: #666666;
            }
            .con{
                margin-top:80px;
                p{
                font-size: 18px;
                font-weight: normal;
                color: #999999;
                line-height: 34px;
            }
            } 
        }
    }
}
.codeImg{
    width: 130px;
    height: 45px;
    margin: 5px 0;
}
::v-deep .el-input-group__prepend {
  border: none;
//   background: transparent;
  font-weight: 700;
  color: #fff !important;
}
::v-deep .el-row{
    margin: 0 !important;
    padding:0 !important;
}
::v-deep .el-col{
    padding:0 !important;
}
::v-deep .el-input__inner{
    margin: 5px 0;
    height: 45px;
}
::v-deep .el-button{
    margin: 5px 0;
    height: 45px;
    width: 130px;
    padding: 0 !important;
}
::v-deep .el-input__inner:focus {
    border-color: #288E86 !important;
}
/* 移动端 */
@media screen and (max-width: 750px) {

}
</style>