<template>
  <div class="contier">
    <div class="title_cont">
      <span>身份升级</span>
    </div>
    <!-- cont内容 -->
    <div class="upgrade_cont">
      <p>升级为初级公安用户需要上传警官证明</p>
      <div class="voucher">
        <el-form :model="form" label-position="right" label-width="60px" :inline="true">
          <el-form-item label="上传凭证" prop="fileList">
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
        </el-form>
      </div>
      <div class="oper">
        <!-- <el-button class="closeButton">取消</el-button> -->
        <el-button class="submitButton" type="primary" @click="submitUp">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as Api_person from "@/api/person";
export default {
  data() {
    return {
      fileList: [],
      form: {
        fileUrls: [],
        userId: ""
      }
    };
  },
  computed: {
    ...mapGetters(["sysUser"])
  },
  methods: {
    // 提交
    submitUp() {
      this.form.fileUrls = [];
      this.fileList.forEach(item => {
        this.form.fileUrls.push(item.response.fileRecord.fileUrl);
      });
      this.form.userId = this.sysUser.id;
      console.log(this.form);
      Api_person.userUpGrade(this.form).then(res => {
        if (res.code != 200) {
          this.$message.warning(res.msg);
          return;
        }
        this.$message.success("升级成功，请等待审核");
        this.$router.go(-1);
      });
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

<style scoped>
/deep/ .el-upload-list__item {
  width: 5.208vw;
  height: 5.208vw;
}
/deep/ .el-upload--picture-card {
  width: 100px;
  height: 100px;
}
.closeButton {
  height: 40px;
  width: 104px;
}
.submitButton {
  height: 40px;
  width: 104px;
}
.voucher {
  margin: 0 auto;
  width: 50%;
  text-align: left;
  margin-bottom: 30px;
  margin-top: 40px;
}
.upgrade_cont p {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  color: #333333;
  letter-spacing: 0;
}
.upgrade_cont {
  background: #f5f5f5;
  border-radius: 4px;
  border-radius: 4px;
  height: 423px;
  margin-top: 30px;
  text-align: center;
  padding-top: 30px;
}
.title_cont {
  width: 100%;
}
.title_cont span {
  font-family: PingFang-SC-Bold;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  cursor: pointer;
}
.title_cont p {
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #666666;
  letter-spacing: 0;
  margin-top: 15px;
}
.contier {
  padding: 30px;
}
</style>