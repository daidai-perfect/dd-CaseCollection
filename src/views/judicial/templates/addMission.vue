<template>
  <div>
    <el-form
      ref="form"
      class="sub_form"
      :model="form"
      label-width="110px"
      label-position="right"
      :rules="rules"
      :inline="true"
    >
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="联系人姓名" prop="userName">
            <el-input class="form_dom" v-model="form.userName" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="执法机关全称" prop="name">
            <el-input class="form_dom" v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="所在城市" prop="provName" class="city_option">
            <el-select v-model="form.provName" placeholder="请选择" class="citys" @change="selectCity">
              <el-option
                v-for="item in proList"
                :key="item.value"
                :value="item.label"
                :label="item.label"
              />
            </el-select>
          </el-form-item>
          <el-form-item prop="cityName" class="city_option2">
            <el-select v-model="form.cityName" placeholder="请选择" class="citys">
              <el-option
                v-for="item in cityList"
                :key="item.value"
                :value="item.label"
                :label="item.label"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="请输入机关所在地(市、县)" prop="name">
            <el-input class="form_dom" v-model="form.name" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>-->
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="简要情况" prop="brief">
            <el-input
              type="textarea"
              class="form_doms"
              :rows="4"
              placeholder="请输入内容"
              v-model="form.brief"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="24" class="descRemark">
        <el-col :span="24">
          <el-form-item label="请上传案件相关图片和您的警官证">
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
          <el-form-item label="联系方式" prop="phone">
            <el-input class="form_dom" v-model="form.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="opButton">
      <el-button class="startButton" @click="returnUp">取消</el-button>
      <el-button type="primary" class="startButton" @click="submitForm">提交</el-button>
    </div>
  </div>
</template>

<script>
import city from "@/assets/city.json";
import * as Api_judic from "@/api/judicial";
export default {
  data() {
    return {
      form: {
        userName: "",
        name: "",
        provName: "",
        cityName: "",
        brief: "",
        phone: "",
        fileUrl: []
      },
      proList: [],
      cityList: [],
      fileList: [],
      rules: {
        userName: [{ required: true, message: "请输入联系人名称" }],
        name: [{ required: true, message: "请输入执法机关名称" }],
        brief: [{ required: true, message: "请输入简要情况" }],
        phone: [{ required: true, message: "请输入联系方式" }],
        provName: [{ required: true, message: "请选择省名称" }],
        cityName: [{ required: true, message: "请选择市/区名称" }]
      }
    };
  },
  mounted() {
    this.proList = city;
  },
  methods: {
    // 上传成功的钩子
    handSuccess(response, file, fileList) {
      this.fileList = fileList;
    },
    // 删除文件的钩子
    handRemove(file, fileList) {
      this.fileList = fileList;
    },
    selectCity(val) {
      var w = this.proList.filter(item => {
        return item.label == val;
      });
      this.cityList = w[0].children;
    },
    returnUp() {
      this.$emit("closeAdd", false);
    },
    submitForm() {
      this.form.fileUrl = [];
      this.fileList.forEach(item => {
        console.log(item.response);
        this.form.fileUrl.push(item.response.fileRecord.fileUrl);
      });
      console.log(this.form);
      this.$refs["form"].validate(valid => {
        if (valid) {
          // this.form.type = 3;
          Api_judic.addJudiciary(this.form).then(res => {
            if (res.code == "200") {
              this.$message.success("添加成功!");
              this.returnUp();
              return;
            }
          });
        }
      });
    }
  }
};
</script>

<style  scoped>
/deep/ .el-upload--picture-card {
  width: 100px;
  height: 100px;
}
/deep/ .el-upload-list__item {
  width: 5.208vw;
  height: 5.208vw;
}
.form_doms {
  text-align: left;
}
/* /deep/ .el-form-item{
  margin-bottom: 0;
} */
.address_info span {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  vertical-align: middle;
}
.citys {
  height: 40px;
  width: 195px;
}
.startButton {
  width: 100px;
}
/* .citys:nth-child(2) {
  padding-left: 5px;
} */
/deep/ .el-col-24 {
  text-align: center;
}
/deep/ .el-input--suffix {
  height: 100%;
}
.opButton {
  text-align: center;
  /* margin-bottom: 35px; */
  margin-top: 35px;
}
.form_dom {
  width: 400px;
  height: 40px;
}
.form_doms {
  width: 400px;
}
/* /deep/ .el-input__icon {
  line-height: 0;
} */
/* 移动端 */
@media screen and (max-width: 750px) {
  /deep/ .el-input__icon {
    line-height: 0;
  }
  /deep/ .el-upload--picture-card {
    width: 100px;
    height: 100px;
  }
  /deep/ .el-upload-list__item {
    width: 100px;
    height: 100px;
  }
  .address_info span {
    font-family: PingFang-SC-Bold;
    font-size: 20px;
    vertical-align: middle;
  }
  .citys {
    height: 30px;
    width: 90px;
    display: inline-block;
  }
  .startButton {
    width: 100px;
    font-size: 14px;
  }
  /deep/ .el-col-24 {
    text-align: center;
  }
  /deep/ .el-input--suffix {
    height: 100%;
  }
  .opButton {
    text-align: center;
    /* margin-bottom: 35px; */
    margin-top: 35px;
  }
  .form_dom {
    width: 180px;
    height: 30px;
  }
  .form_doms {
    width: 180px;
  }
  /deep/ .el-row {
    margin-bottom: 10px;
  }
  /deep/ .el-input__suffix {
    right: 1.26vw;
  }
  /deep/ .el-input__icon {
    width: auto;
  }
  /deep/ .el-input__inner {
    /* border-radius: 36px; */
    font-size: 14px;
  }
  /deep/ .el-textarea__inner {
    font-size: 14px;
  }
  /deep/ .el-form-item__error {
    font-size: 14px;
  }
  /* /deep/ .el-form-item{
    width: 100%;
  } */
  /deep/ .el-form-item__label {
    font-size: 14px;
  }
  .sub_form {
    position: relative;
    right: 20px;
  }
  /* /deep/ .el-form-item__content {
    width: 60%;
  }
  /deep/ .el-form-item {
    width: 100%;
  }
  .city_option {
    width: 100%;
  } */
  /* .city_option {
    width: 30%;
  }
  .city_option2{
    width: 30%;
  } */
  /* /deep/ .city_option .el-form-item {
    width: 50%;
  } */
  /* /deep/ .city_option .el-form-item__content {
    width: 30%;
    display: inline-block;
  }
  /deep/ .city_option2 .el-form-item__content {
    width: 50%;
    display: inline-block;
  } */
}
/* 移动端 */
@media screen and (max-width: 330px) {
  .citys {
    height: 30px;
    width: 80px;
    display: inline-block;
  }
  .form_dom {
    width: 160px;
    height: 30px;
  }
  .form_doms {
    width: 160px;
  }
}
</style>