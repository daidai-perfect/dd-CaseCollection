<template>
  <div class="browser">
    <div class="app-cont">
      <el-card class="tran-card">
        <div class="downCont">
          <div class="down_title">
            <span>
              下载数据
              <span class="transaction">(交易)</span>
            </span>
          </div>
          <div class="down_desc">
            <span>您需要的信息可以从此页面下载，但是在继续操作之前，请完成以下验证码。</span>
          </div>
          <div class="down_date">
            <div class="downCont">
              <el-date-picker
                v-model="date"
                type="daterange"
                range-separator="至"
                start-placeholder="年/月/日"
                end-placeholder="年/月/日"
                class="dateYear"
              ></el-date-picker>
              <div>
                <el-button type="primary" class="inButton">下载</el-button>
              </div>
            </div>
          </div>
          <div class="down_remark">
            <span>提示：为避免30秒超时，请选择较小的时间范围。</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ""
    };
  },
  methods: {
    fetchData() {
      //
    },
    jumpReport() {
      this.$router.push({
        name: "reportDownload"
      });
    }
  }
};
</script>

<style scoped>
.inButton {
  width: 104px;
  height: 40px;
  margin-top: 50px;
}
.downCont {
  position: relative;
  top: 50%; /*偏移*/
  transform: translateY(-50%);
}
.down_date {
  background: #f5f5f5;
  border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0px 0px;
  height: 280px;
  width: 840px;
  margin: 0 auto;
}
.down_remark {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  text-align: center;
  margin-top: 40px;
}
.down_desc {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #333333;
  text-align: center;
  height: 60px;
}
.down_title {
  font-family: PingFang-SC-Bold;
  font-size: 24px;
  color: #333333;
  text-align: center;
  height: 70px;
}
.transaction {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  color: #666666;
  text-align: center;
}
/deep/ .el-card__body {
  padding: 30px;
  /* padding-left: 55px; */
  padding-top: 0px;
  width: 100%;
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
/deep/ .el-input-group__append {
  color: white;
  background: #0074f8;
  font-size: 20px;
}
.app-cont {
  width: 100%;
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
  border-radius: 0 !important;
  border: 1px solid #dcdfe6;
}
/deep/ .el-range-input {
  background: white;
}
.tran-card {
  /* height: 100%; */
  /* margin-top: 30px; */
  height: 640px;
  display: flex;
  text-align: center;
}
/deep/ .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
.dateYear {
  height: 40px !important;
  width: 75%;
}
/deep/ .el-date-editor .el-range-input {
  width: 45%;
}
</style>