<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <img src="@/assets/ETH.png" class="money_img" v-if="this.keyword.type=='ETH'" />
        <img src="@/assets/USDT.png" class="money_img" v-else />
        <span>{{keyword.type | getMoneyType}}-交易明细</span>
        <!-- <span class="address">地址：{{keyword.value}}</span> -->
        <el-input placeholder="请输入内容" v-model="searchName" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="searcData" class="serchButton"></el-button>
        </el-input>
      </div>
      <div class="overview_info">
        <el-card class="overview-card">
          <div slot="header" class="clearfix">
            <span>概要</span>
          </div>
          <div class="blockInfo">
            <div class="balance">
              <span class="block_title">交易哈希：</span>
              <img src="@/assets/copy.png" @click="copy(form.hash)" v-if="form.hash!=''" />
              <span class="block_detail">{{form.hash | getString}}</span>
            </div>
          </div>
          <!-- <div class="blockInfo">
            <div class="balance">
              <span class="block_title">状态：</span>
              <span class="block_detail">{{form.flowType}}</span>
            </div>
          </div>-->
          <div class="blockInfo">
            <div class="balance">
              <span class="block_title">时间：</span>
              <span class="block_detail">{{getTime(form.blockTime)}}</span>
            </div>
          </div>
          <div class="blockInfo">
            <div class="balance">
              <span class="block_title">发送地址：</span>
              <img src="@/assets/copy.png" @click="copy(form.fromAddr)" v-if="form.fromAddr!=''" />
              <span class="block_detail">{{form.fromAddr}}</span>
            </div>
          </div>
          <div class="blockInfo">
            <div class="balance">
              <span class="block_title">接收地址：</span>
              <img src="@/assets/copy.png" @click="copy(form.toAddr)" v-if="form.toAddr!=''" />
              <span class="block_detail">{{form.toAddr}}</span>
            </div>
          </div>
          <div class="blockInfo">
            <div class="balance">
              <span class="block_title">金额：</span>
              <p class="percent">￥{{form.cnyValue}}</p>
              <span class="block_detail">
                {{form.value}}
                <span class="unit">{{unit}}</span>
              </span>
            </div>
          </div>
          <!-- <div class="blockInfo">
            <div class="balance">
              <span class="block_title">手续费：</span>
              <p class="percent">￥0.55</p>
              <span class="block_detail">0.000905715醚</span>
            </div>
          </div>-->
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import * as Api_browser from "@/api/browser";
import * as utils from "@/utils/utils";
import { timestampToTime } from "@/utils/utils";
export default {
  filters: {
    getMoneyType(val) {
      if (val == "ETH") {
        return "ETH";
      } else if (val == "USDT") {
        return "USDT(ERC20)";
      } else if (val == "TRON") {
        return "USDT(TRC20)";
      }
    },
    getTime(val) {
      return timestampToTime(val);
    },
    getString(val) {
      return val;
      // return val.slice(0, 40) + "...";
    }
  },
  data() {
    return {
      searchName: "",
      keyword: {},
      address: "1BW18n7MfpU35q4MTBSk8pse3XzQF8XvzT",
      form: {
        hash: "",
        flowType: "",
        blockTime: "",
        fromAddr: "",
        toAddr: "",
        value: "",
        cnyValue: "",
        usdValue: ""
      },
      names: ""
    };
  },
  computed: {
    unit() {
      if (this.keyword.type == "TRON") {
        return "usdt";
      } else {
        return "Ether";
      }
    }
  },
  mounted() {
    var data = this.$route.query;
    this.keyword = { value: data.value, type: data.type };
    this.names = this.keyword.value;
    this.fetchData();
  },
  methods: {
    getTime(val) {
      if (this.keyword.type == "TRON") {
        return timestampToTime(val / 1000);
      } else {
        return timestampToTime(val);
      }
    },
    fetchData() {
      Api_browser.getDetailByHash({
        hash: this.names,
        type: this.keyword.type
      }).then(res => {
        console.log(res, "resDetail");
        if (res.rows.length != 0) {
          this.form = res.rows[0];
        }
      });
    },
    copy(val) {
      utils.copyShaneUrl(val);
    },
    searcData() {
      if (this.keyword.type != "TRON") {
        switch (this.searchName.length) {
          case 42:
            // 列表
            this.$router.push({
              path: "/browser/transactionRecoard",
              query: { value: this.searchName, type: this.keyword.type }
            });
            break;
          case 66:
            // 详情
            this.names = this.searchName;
            this.fetchData();
            break;
          default:
            this.$message.warning("输入有误");
            break;
        }
      } else {
        this.$router.push({
          path: "/browser/transactionRecoard",
          query: { value: this.searchName, type: this.keyword.type }
        });
      }
      // if (this.searchName.length == 42) {
      //   // 列表
      //   this.$router.push({
      //     path: "/browser/transactionRecoard",
      //     query: { value: this.searchName, type: this.keyword.type }
      //   });
      // } else if (this.searchName.length == 66) {
      //   this.names = this.searchName;
      //   this.fetchData();
      // } else {
      //   this.$message.warning("输入有误");
      //   return;
      // }
    }
  }
};
</script>

<style  scoped>
.unit {
  margin-left: 1px;
}
.percent {
  width: 100px;
  height: 28px;
  background: #e3edff;
  border-radius: 4px;
  border-radius: 4px;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #0074f8;
  text-align: center;
  float: right;
  vertical-align: middle;
  line-height: 1.5;
  position: relative;
  bottom: 5px;
  left: 8px;
}
.overview_info img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  padding-left: 3px;
  cursor: pointer;
  float: right;
  position: relative;
  bottom: 5px;
  left: 3px;
}
.block_title {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
  opacity: 0.9;
}
.block_detail {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  float: right;
  line-height: 16px;
  opacity: 0.8;
  vertical-align: middle;
}
.tag_input {
  float: right;
  width: 150px;
  margin-top: 3px;
}
.tag_info {
  float: right;
}
.edit_img {
  width: 24px;
  height: 24px;
  padding-left: 5px;
  float: right;
  padding-bottom: 5px;
}
.clearfix {
  font-weight: 550;
}
.balance {
  height: 56px;
  padding: 20px;
  line-height: 0.833vw;
  padding-left: 0;
  padding-right: 0;
}
.blockInfo {
  border-bottom: 1px solid #eeeeee;
  width: 97%;
  margin: 0 auto;
}
.blockInfo:last-child {
  border: none;
}
::v-deep .el-card__body {
  padding: 0;
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
  /* height: 226px; */
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
  bottom: 8px;
}
::v-deep .el-input__inner {
  border: none;
  height: 100%;
  border-radius: 8px;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  .unit {
    margin-left: 1px;
  }
  .percent {
    width: 100px;
    height: 28px;
    background: #e3edff;
    border-radius: 4px;
    border-radius: 4px;
    font-family: PingFang-SC-Bold;
    color: #0074f8;
    text-align: center;
    float: right;
    vertical-align: middle;
    line-height: 2.5;
    position: relative;
    bottom: 5px;
    left: 8px;
    font-size: 12px;
  }
  .overview_info img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    padding-left: 3px;
    cursor: pointer;
    float: right;
    position: relative;
    bottom: 5px;
    left: 3px;
  }
  .block_title {
    font-family: PingFang-SC-Regular;
    font-size: 12px;
    color: #151c2c;
    line-height: 16px;
    opacity: 0.9;
  }
  .block_detail {
    font-family: PingFang-SC-Regular;
    font-size: 12px;
    color: #151c2c;
    float: right;
    line-height: 16px;
    opacity: 0.8;
    vertical-align: middle;
  }
  .tag_input {
    float: right;
    width: 150px;
    margin-top: 3px;
  }
  .tag_info {
    float: right;
  }
  .edit_img {
    width: 24px;
    height: 24px;
    padding-left: 5px;
    float: right;
    padding-bottom: 5px;
  }
  .clearfix {
    font-weight: 550;
  }
  .balance {
    height: 32px;
    padding: 12px;
    line-height: 0.833vw;
    padding-left: 0;
    padding-right: 0;
  }
  .blockInfo {
    border-bottom: 1px solid #eeeeee;
    width: 97%;
    margin: 0 auto;
  }
  .blockInfo:last-child {
    border: none;
  }
  ::v-deep .el-card__body {
    padding: 0;
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
    /* height: 226px; */
  }
  .transactions_info {
    margin-top: 25px;
    width: 100%;
    height: 552px;
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
    border-radius: 8px;
    width: 100%;
    height: 30px;
    float: right;
    position: relative;
    bottom: 8px;
    margin-top: 20px;
  }
  ::v-deep .el-input__inner {
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