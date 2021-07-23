<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <span>选择诈骗人 进行交易的交易所名称</span>
      </div>
      <el-card class="tran-card">
        <el-form :model="form">
          <el-form-item label="交易所名称">
            <el-select v-model="form.searchName" placeholder="请选择" class="selectType">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!-- <el-button type="primary" @click="fetchData" class="agree_button">确定</el-button>
        <div class="operation">-->
        <el-row>
          <el-col :span="3">
            <el-button type="primary" class="startButton" @click="fetchData">确定</el-button>
          </el-col>
          <el-col :span="10">
            <agreement />
          </el-col>
        </el-row>
        <el-card class="box-card" v-if="information">
          <div class="file">
            <div class="file_title">
              <span>请向 XXX交易所 提交相关材料。</span>
            </div>
            <div class="file_txt">
              <p class="file_txt_title">相关材料</p>
              <p>xxxx身份证明</p>
              <p>xxxx身份证明</p>
              <p>xxxx身份证明</p>
            </div>
            <div class="file_contact">
              <span class="file_email">交易所邮箱： 12345@163.com</span>
              <span class="file_phone">联系电话： 010-8034 7654</span>
            </div>
          </div>
        </el-card>
      </el-card>
    </div>
  </div>
</template>

<script>
import agreement from "@/components/agreement/agreement";
export default {
  data() {
    return {
      exchangeName: "",
      form: {
        searchName: "1"
      },

      information: false,
      radio1: ""
    };
  },
  components: {
    agreement
  },
  methods: {
    fetchData() {
      // 请求接口调用数据渲染报告，并显示报告弹窗
      this.information = true;
    }
  }
};
</script>

<style scoped>
.startButton {
  width: 100px;
}
::v-deep .el-col-3 {
  width: 10%;
}
::v-deep .el-col-10 {
  line-height: 3;
}
.operation {
  margin-bottom: 20px;
}
.file {
  font-weight: 550;
}
.file_email {
  margin-right: 50px;
}
.file_txt {
  margin-top: 40px;
  margin-bottom: 30px;
}
.file_txt p {
  text-indent: 30px;
}
.file_txt_title {
  text-indent: 10px !important;
}
.box-card {
  margin-top: 30px;
}
.selectType {
  width: 400px;
  height: 40px;
}
::v-deep .el-input__inner {
  background: #f5f5f5;
}
.agree_button {
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
}
.tran-card {
  /* height: 100%; */
  margin-top: 30px;
  height: 89%;
}
::v-deep .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
.overview-card {
  width: 100%;
  height: 100%;
}
.overview_info {
  margin-top: 30px;
  width: 100%;
  height: 226px;
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
  color: #ffffff;
  vertical-align: middle;
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
.address {
  padding-left: 18px;
}
/* .input-with-select {
  background: #ffffff;
  border: 1px solid #1a6dff;
  border-radius: 8px;
  width: 320px;
  height: 44px;
  position: relative;
  bottom: 8px;
} */
/* ::v-deep .el-input__inner {
  border: none;
  height: 100%;
  border-radius: 8px;
} */
</style>