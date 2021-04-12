<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <img src="@/assets/ETH.png" class="money_img" />
        <span>{{keyword.type}}</span>
        <span class="address">地址：{{keyword.value}}</span>
        <el-input placeholder="请输入内容" v-model="searchName" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searchData" class="serchButton"></el-button>
        </el-input>
      </div>
      <div v-if="!isDownLoad">
        <div class="overview_info">
          <overview :keyword="keyword" />
        </div>
        <div class="transactions_info">
          <transactions :keyword="keyword" @openDown="openDown" />
        </div>
      </div>
      <div v-else>
        <reportFile />
      </div>
    </div>
  </div>
</template>

<script>
import overview from "../components/overview";
import transactions from "../components/transactions";
import reportFile from "../components/reportFile";
import * as Api_browser from "@/api/browser";
export default {
  data() {
    return {
      keyword: {},
      searchName: "",
      address: "1BW18n7MfpU35q4MTBSk8pse3XzQF8XvzT",
      isDownLoad: false
    };
  },
  components: {
    overview,
    transactions,
    reportFile
  },
  mounted() {
    var data = this.$route.query;
    this.keyword = { value: data.value, type: data.type };
  },
  methods: {
    searchData() {
      if (this.keyword.type != "TRON") {
        switch (this.searchName.length) {
          case 42:
            // 列表
            this.keyword.value = this.searchName;
            break;
          case 66:
            // 详情
            this.$router.push({
              path: "/browser/transactionDetail",
              query: { value: this.searchName, type: this.keyword.type }
            });
            break;
          default:
            this.$message.warning("输入有误");
            break;
        }
      } else {
        this.keyword.value = this.searchName;
      }
      // // this.name = this.searchName;
      // if (this.searchName.length == 42) {
      //   // 列表
      //   this.keyword.value = this.searchName;
      // } else if (this.searchName.length == 66) {
      //   // 详情
      //   this.$router.push({
      //     path: "/browser/transactionDetail",
      //     query: { value: this.searchName, type: this.keyword.type }
      //   });
      // } else {
      //   this.$message.warning("输入有误");
      //   return;
      // }
      this.isDownLoad = false;
    },
    // 获得总览
    getOverView() {},
    openDown(val) {
      this.isDownLoad = true;
    }
  }
};
</script>

<style  scoped>
/deep/ .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 14px;
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
  /* height: 226px; */
  height: 25%;
}
.transactions_info {
  margin-top: 25px;
  width: 100%;
  /* height: 552px; */
  height: 60%;
  margin-bottom: 25px;
}
.address_info span {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  color: #ffffff;
  vertical-align: middle;
}
.money_img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-right: 8px;
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
.input-with-select {
  background: #ffffff;
  border: 1px solid #1a6dff;
  border-radius: 8px;
  width: 320px;
  height: 44px;
  float: right;
  position: relative;
  bottom: 0px;
}
/deep/ .el-input__inner {
  border: none;
  height: 100%;
  border-radius: 8px;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  /deep/ .el-card__header {
    background: #e5e9ef;
    font-family: PingFang-SC-Bold;
    font-size: 14px;
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
    /* height: 226px; */
    height: 25%;
  }
  .transactions_info {
    margin-top: 25px;
    width: 100%;
    /* height: 552px; */
    height: 60%;
    margin-bottom: 25px;
  }
  .address_info span {
    font-family: PingFang-SC-Bold;
    font-size: 12px;
    color: #ffffff;
    vertical-align: middle;
  }
  .money_img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 8px;
  }
  .app-cont {
    width: 90%;
    margin: 0 auto;
    color: white;
    margin-top: 75px;
  }
  .browser {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .address {
    padding-left: 18px;
  }
  .input-with-select {
    background: #ffffff;
    border: 1px solid #1a6dff;
    border-radius: 5px;
    width: 100%;
    height: 25px;
    /* float: right; */
    position: relative;
    bottom: 8px;
    margin-top: 10px;
  }
  /deep/ .el-input__inner {
    border: none;
    height: 100%;
    border-radius: 8px;
    font-size: 14px;
    line-height: 2;
  }
  .serchButton {
    font-size: 14px;
  }
}
</style>