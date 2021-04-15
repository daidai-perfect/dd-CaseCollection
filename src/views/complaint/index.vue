<template>
  <div class="browser">
    <div class="app-cont">
      <el-card class="tran-card">
        <div class="address_info">
          <span>举报骗局</span>
        </div>
        <el-form ref="form" :model="form" label-position="right" label-width="130px" :inline="true">
          <div ref="dyn" class="dynamic" v-for="(item,index) in form.scamTransList" :key="index">
            <div class="dynmic_form">
              <el-row :gutter="24">
                <el-col :span="24">
                  <el-form-item
                    label="发生时间"
                    :prop="'scamTransList.' + index + '.transTime'"
                    :rules="{
      required: true, message: '请选择发生时间', trigger: 'blur'
    }"
                  >
                    <el-date-picker
                      v-model="item.transTime"
                      type="datetime"
                      placeholder="选择日期"
                      popper-class="select_date"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      class="form_dom"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="24">
                  <el-form-item
                    label="受害人钱包地址"
                    :prop="'scamTransList.' + index + '.victimaddr'"
                    :rules="{
      required: true, message: '请输入被害人钱包地址', trigger: 'blur'
    }"
                  >
                    <el-input class="form_dom" v-model="item.victimaddr" placeholder="输入地址"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="24">
                  <el-form-item
                    label="币种"
                    :prop="'scamTransList.' + index + '.currencytype'"
                    :rules="{
      required: true, message: '请选择币种', trigger: 'blur'
    }"
                  >
                    <el-select v-model="item.currencytype" placeholder="请选择" class="form_dom">
                      <el-option value="BTC" label="BTC" />
                      <el-option value="ETH" label="ETH" />
                      <el-option value="USDT(OMNI)" label="USDT(OMNI)" />
                      <el-option value="USDT(ERC20)" label="USDT(ERC20)" />
                      <el-option value="TRX" label="TRX" />
                      <el-option value="USDT(TRC20)" label="USDT(TRC20)" />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col :span="24">
                  <el-form-item
                    label="犯罪嫌疑人钱包地址"
                    :prop="'scamTransList.' + index + '.scamaddr'"
                    :rules="{
      required: true, message: '请输入犯罪嫌疑人钱包地址', trigger: 'blur'
    }"
                  >
                    <el-input class="form_dom" v-model="item.scamaddr" placeholder="输入地址"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div class="dynmic_button">
              <span>
                <img
                  src="@/assets/add.png"
                  v-if="form.scamTransList.length==1"
                  @click="addLiarList"
                />
                <img
                  src="@/assets/remove.png"
                  v-if="form.scamTransList.length==2"
                  @click="removeLiar"
                />
              </span>
            </div>
          </div>
          <!-- <div class="plus">
            <i class="el-icon-plus" />
          </div>-->
          <!-- <i class="el-icon-minus"/> -->
          <div class="notdynamic">
            <el-row :gutter="24" class="descRemark">
              <el-col :span="24">
                <el-form-item
                  label="项目名称"
                  prop="entryName"
                  :rules="{
      required: true, message: '请输入项目名称', trigger: 'blur'
    }"
                >
                  <el-input class="form_dom" placeholder="请输入内容" v-model="form.entryName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24" class="descRemark">
              <el-col :span="24">
                <el-form-item
                  label="事件描述"
                  prop="caseDesc"
                  :rules="{
      required: true, message: '请输入事件描述', trigger: 'blur'
    }"
                >
                  <el-input
                    type="textarea"
                    class="form_dom"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="form.caseDesc"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24" class="descRemark">
              <el-col :span="24">
                <el-form-item label="关键信息截图">
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
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="24">
                <el-form-item
                  label="邮箱"
                  prop="email"
                  :rules="{
      required: true, message: '请输入邮箱', trigger: 'blur'
    }"
                >
                  <el-input class="form_dom" v-model="form.email" placeholder="输入邮箱"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="24" label>
                <el-form-item label label-width="120px">
                  <agreement @disable="disable" class="agreeInfoButton" />
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </el-form>
        <div class="opButton">
          <el-button class="startButton" @click="jumpBrowser">取消</el-button>
          <el-button
            type="primary"
            :disabled="radio1==false"
            class="startButton"
            @click="submitForm"
          >提交</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import * as Api_comp from "@/api/complaint";
import agreement from "@/components/agreement/agreemenIndex";
export default {
  data() {
    return {
      form: {
        scamTransList: [
          {
            transTime: "",
            scamaddr: "",
            victimaddr: "",
            currencytype: "ETH"
          }
        ],
        fileRecordsList: [],
        caseDesc: "",
        email: "",
        entryName: ""
      },
      radio1: false,
      liarList: [{}],
      fileList: [],
      rules: {
        transTime: [{ required: true, message: "请输入执法机构名称" }],
        victimaddr: [{ required: true, message: "请输入被害人钱包地址" }],
        currencytype: [{ required: true, message: "请选择币种" }],
        scamaddr: [{ required: true, message: "请选择省名称" }],
        cityName: [{ required: true, message: "请选择市/区名称" }],
        entryName: [{ required: true, message: "请输入项目名称" }]
      }
    };
  },
  components: {
    agreement
  },
  methods: {
    disable(val) {
      this.radio1 = val;
    },
    // 上传成功的钩子
    handSuccess(response, file, fileList) {
      this.fileList = fileList;
    },
    // 删除文件的钩子
    handRemove(file, fileList) {
      this.fileList = fileList;
    },
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          console.log(this.form);
          if (this.fileList.length != 0) {
            this.form.fileRecordsList = [];
            this.fileList.forEach(item => {
              this.form.fileRecordsList.push({
                id: item.response.fileRecord.id
              });
            });
          }
          Api_comp.addComplaint(this.form).then(res => {
            console.log(res, "200?");
            if (res.code == "200") {
              this.$message.success("新增成功!");
              return;
            }
          });
        }
      });
    },
    addLiarList() {
      this.$refs.dyn[0].children[1].style.display = "none";
      this.form.scamTransList.push({
        transTime: "",
        scamaddr: "",
        victimaddr: "",
        currencytype: "ETH"
      });
    },
    removeLiar() {
      this.$refs.dyn[0].children[1].style.display = "inline-block";
      this.form.scamTransList.splice(1, 1);
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
    jumpBrowser() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped>
/deep/ .el-input__icon {
  line-height: 0;
}
/deep/ .el-icon-plus {
  position: relative;
  bottom: 15px;
}
.dynmic_form {
  display: inline-block;
  vertical-align: middle;
  padding-top: 20px;
  background: #f5f5f5;
  width: 100%;
  height: 100%;
}
.dynmic_button {
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 40px;
  position: absolute;
}
/deep/ .el-card__body {
  padding-bottom: 70px;
}
.dynmic_button span {
  line-height: 11;
}
.dynmic_button img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.plus {
  position: absolute;
  text-align: right;
  /* right: 0px; */
  /* bottom: 150px; */
  right: 12%;
  top: 17%;
}
.opButton {
  text-align: center;
  margin-bottom: 35px;
}
/deep/ .el-col-24 {
  text-align: center;
}
.hrefTxt {
  font-family: PingFang-SC-Regular;
  font-size: 14px;
  color: #000000;
  line-height: 14px;
}
/deep/ .el-upload--picture-card {
  width: 100px;
  height: 100px;
}
/deep/ .el-upload-list__item {
  width: 100px;
  height: 100px;
}
/deep/ .el-form-item__label {
  font-size: 16px;
}
.form_dom {
  width: 400px;
}
.form_doms {
  width: 400px;
  text-align: left;
}
.dynamic {
  /* width: 58%; */
  width: 640px;
  margin: 0 auto;
  padding-top: 5px;
  text-align: center;
  margin-bottom: 20px;
}
.notdynamic {
  /* width: 58%; */
  width: 640px;
  margin: 0 auto;
  padding-top: 7px;
}
.box-card {
  margin-top: 10px;
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
/deep/ .el-input__inner {
  background: white;
  line-height: 1;
}
.tran-card {
  /* height: 100%; */
  margin-top: 30px;
  /* margin-bottom: 70px; */
  height: 89%;
  /* text-align: center; */
  position: relative;
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
/* /deep/ .el-input--small .el-input__inner {
    height: 20px;
  }
    /deep/ .el-input--small .el-input__inner {
    height: 3vw !important;
  } */
/* 移动端 */
@media screen and (max-width: 750px) {
  /deep/ .el-icon-plus {
    position: relative;
    top: 36%;
  }
  .dynmic_form {
    display: inline-block;
    vertical-align: middle;
    padding-top: 20px;
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  .dynmic_button {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 33px;
    position: absolute;
  }
  /deep/ .el-card__body {
    height: 100%;
  }
  .dynmic_button span {
    line-height: 11;
  }
  .dynmic_button img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  .plus {
    position: absolute;
    text-align: right;
    /* right: 0px; */
    /* bottom: 150px; */
    right: 12%;
    top: 17%;
  }
  .opButton {
    text-align: center;
    margin-bottom: 35px;
  }
  /deep/ .el-col-24 {
    text-align: center;
  }
  .hrefTxt {
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: #000000;
    line-height: 14px;
  }
  /deep/ .el-upload--picture-card {
    width: 100px;
    height: 100px;
  }
  /deep/ .el-upload-list__item {
    width: 100px;
    height: 100px;
  }
  /deep/ .el-form-item__label {
    font-size: 13px;
  }
  .form_dom {
    width: 150px;
    height: 25px;
  }
  .form_doms {
    width: 150px;
    text-align: left;
  }
  .dynamic {
    /* width: 58%; */
    width: 90%;
    margin: 0;
    padding-top: 5px;
    text-align: center;
    margin-bottom: 10px;
  }
  .notdynamic {
    /* width: 58%; */
    width: 100%;
    margin: 0 auto;
    padding-top: 7px;
    height: 300px;
  }
  .box-card {
    margin-top: 10px;
  }
  /deep/ .el-card__header {
    background: #e5e9ef;
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    color: #151c2c;
    line-height: 16px;
  }
  .app-cont {
    width: 90%;
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
    background: white;
    height: 100%;
    font-size: 14px;
  }
  .tran-card {
    /* height: 100%; */
    margin-top: 30px;
    /* margin-bottom: 70px; */
    height: 89%;
    /* text-align: center; */
    position: relative;
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
  /deep/ .el-input--suffix {
    height: 100%;
    line-height: 0;
  }
  /deep/ .el-row {
    margin-bottom: 10px;
    text-align: center;
  }
  /deep/ .el-date-editor {
    height: 25px;
  }
  /deep/ .el-input__icon {
    width: auto;
  }
  /deep/ .el-textarea__inner {
    font-size: 14px;
  }
  .descRemark {
    height: 30%;
  }
  .startButton {
    font-size: 14px;
    width: 100px;
  }
  /* .select_date .el-input--small .el-input__inner {
    height: 30px;
  } */
  /deep/ .select_date {
    width: 200px;
  }
  /* .descRemark {
    height: 28%;
  } */
}
</style>