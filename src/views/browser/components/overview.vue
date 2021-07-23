<template>
  <div>
    <el-card class="overview-card">
      <div slot="header" class="clearfix">
        <span>总览</span>
      </div>
      <div class="blockInfo">
        <div class="balance">
          <span class="block_title">{{keyword.type | getMoneyType}}余额：</span>
          <span class="block_detail">{{dataForm.balance}}{{keyword.type=='ETH'?'以太币':'泰达币'}}</span>
        </div>
      </div>
      <div class="blockInfo">
        <div class="balance">
          <span class="block_title">价值：</span>
          <span class="block_detail">￥{{dataForm.cnyValue}}</span>
        </div>
      </div>
      <div class="blockInfo">
        <div class="balance">
          <span class="block_title">标签：</span>
          <div class="tag_info">
            <!-- <img src="@/assets/edit.png" @click="switchSta" class="edit_img" /> -->
            <span class="block_detail" v-if="editStatus==0">{{dataForm.tag}}</span>
            <el-input v-else v-model="tag" border class="tag_input" />
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as Api_browser from "@/api/browser";
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
    }
  },
  props: {
    keyword: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    keyword: {
      handler: function(val) {
        this.fetchData();
      },
      deep: true
    }
  },
  data() {
    return {
      editStatus: 0,
      tag: "xxxxxxx",
      dataForm: {}
    };
  },
  mounted() {
    if (this.keyword.value) {
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      console.log("请求总览");
      Api_browser.getOverView({
        address: this.keyword.value,
        type: this.keyword.type
      }).then(res => {
        this.dataForm = res.data;
      });
    },
    switchSta() {
      if (this.editStatus == 0) {
        this.editStatus = 1;
      } else {
        this.editStatus = 0;
      }
    }
  }
};
</script>

<style scoped>
.block_title {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
  opacity: 0.9;
}
.block_detail {
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  text-align: right;
  line-height: 16px;
  float: right;
  font-weight: bold;
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
  line-height: 0.7vw;
}
.blockInfo {
  border-bottom: 1px solid #eeeeee;
}
.blockInfo:last-child {
  border: none;
}
::v-deep .el-card__body {
  padding: 0;
}
.overview-card {
  width: 100%;
}
@media screen and (max-width: 750px) {
  .block_title {
    font-family: PingFang-SC-Regular;
    font-size: 12px;
    color: #151c2c;
    line-height: 16px;
    opacity: 0.9;
  }
  .block_detail {
    font-family: PingFang-SC-Bold;
    font-size: 12px;
    color: #151c2c;
    text-align: right;
    line-height: 16px;
    float: right;
    font-weight: bold;
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
    line-height: 0.7vw;
  }
  .blockInfo {
    border-bottom: 1px solid #eeeeee;
  }
  .blockInfo:last-child {
    border: none;
  }
  ::v-deep .el-card__body {
    padding: 0;
  }
  .overview-card {
    width: 100%;
  }
}
</style>