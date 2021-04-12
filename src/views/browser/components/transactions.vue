<template>
  <div class="tran-card">
    <el-card class="tran-card">
      <div slot="header" class="clearfix">
        <span class="money_count">交易次数</span>
        <span class="count">（共计{{total}}笔交易）</span>
        <!-- <div class="download" @click="downLoadReport">
          <img src="@/assets/download.png" />
          <span>下载</span>
        </div> -->
      </div>
      <el-table
        :data="tableData"
        stripe
        class="moneyTable"
        style="width:100%;"
        :header-cell-style="{background:'#f8fafd',color:'#6c757e'}"
      >
        <!-- <el-table-column label width="100" align="center">
          <template slot-scope="{ row }">
            <span v-if="row.eyes">
              <i class="el-icon-view" style="color:#1A6DFF;font-weight:600;" />
            </span>
            <span v-else>
              <i class="el-icon-view" style="color:grey;font-weight:600;" />
            </span>
          </template>
        </el-table-column>-->
        <el-table-column prop="hash" label="交易哈希" width="150" align="left" show-overflow-tooltip>
          <template slot-scope="{ row }">
            <a href="#" @click="toDetail(row.hash)" class="hash">{{row.hash | getString}}</a>
          </template>
        </el-table-column>
        <el-table-column prop="blockNumber" label="所在区块" width="80"></el-table-column>
        <el-table-column prop="blockTime" label="时间" width="130">
          <template slot-scope="{ row }">{{row.blockTime|getTime}}</template>
        </el-table-column>
        <el-table-column prop="fromAddr" label="发送地址" width="150" show-overflow-tooltip>
          <template slot-scope="{ row }">
            <a href="#" class="hash" @click="toDetail(row.fromAddr)">{{row.fromAddr}}</a>
            <!-- {{row.fromAddr | getString}} -->
          </template>
        </el-table-column>
        <el-table-column prop="flowType" label width="60">
          <template slot-scope="{ row }">
            <p v-if="row.flowType=='OUT'" class="outStatus">{{row.flowType}}</p>
            <p v-else-if="row.flowType=='IN'" class="inStatus">{{row.flowType}}</p>
            <!-- <p v-else class="inStatus">IN</p> -->
            <!-- <p v-else-if="row.flowType=='in'" class="inStatus">{{row.flowType}}</p> -->
            <!-- <a href="#" class="hash">{{row.status}}</a> -->
          </template>
        </el-table-column>
        <el-table-column prop="toAddr" label="接收地址" width="150" show-overflow-tooltip>
          <template slot-scope="{ row }">
            <a href="#" class="hash" @click="toDetail(row.toAddr)">{{row.toAddr}}</a>
            <!-- {{row.toAddr | getString}} -->
          </template>
        </el-table-column>
        <el-table-column prop="value" label="金额">
          <template slot-scope="{ row }">
            {{row.value}}
            <span class="unit">Ether</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="fee" label="手续费"></el-table-column> -->
      </el-table>
      <Pagination
        v-show="total > 0"
        :total="total"
        layout="prev, pager, next"
        :page.sync="params.pageNum"
        :limit.sync="params.pageSize"
        @pagination="fetchData"
        class="page"
      />
    </el-card>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import * as Api_browser from "@/api/browser";
import { timestampToTime } from "@/utils/utils";
export default {
  filters: {
    getTime(val) {
      return timestampToTime(val);
    },
    getString(val) {
      console.log(val);
      return val.slice(0, 15) + "...";
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
        this.params.pageNum = 1;
        this.params.pageSize = 10;
        this.fetchData();
      },
      deep: true
    }
  },
  components: {
    Pagination: Pagination
  },
  data() {
    return {
      total: 0,
      tableData: [],
      params: {
        pageNum: 1,
        pageSize: 10
      }
    };
  },
  mounted() {
    if (this.keyword.value) {
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      var data = {
        keyword: this.keyword.value,
        type: this.keyword.type,
        pageNum: this.params.pageNum,
        pageSize: this.params.pageSize
      };
      setTimeout(() => {
        Api_browser.getBrowserList(data).then(res => {
          this.tableData = res.rows;
          this.total = res.total - 0;
        });
      }, 500);
    },
    // 下载
    downLoadReport() {
      this.$emit("openDown", true);
    },
    tableRowClassName(val) {
      if (val.rowIndex % 2 != 0) {
        return "warning-row";
      } else {
        return "";
      }
    },
    // 跳转交易详情
    toDetail(hash) {
      this.$router.push({
        name: "transactionDetail",
        query: {
          value: hash,
          type: this.keyword.type
        }
      });
    }
  }
};
</script>

<style scoped>
/deep/ .el-table th,
.el-table tr {
  border-bottom: 2px solid #e7eaf3;
  border-top: 2px solid #e7eaf3;
}
/deep/ .el-table td {
  padding: 0.625vw 0;
}
/deep/ .el-table th {
  padding: 0.625vw 0;
}
.unit {
  margin-left: 1px;
}
.outStatus {
  background: #d0f1aa;
  border: 1px solid #f8f8f8;
  border-radius: 12px;
  border-radius: 12px;
  text-align: center;
  width: 60px;
  height: 34px;
  font-size: 14px;
  /* padding-top: 4px; */
}
.inStatus {
  background: #ffe6e3;
  border: 1px solid #f8f8f8;
  border-radius: 12px;
  border-radius: 12px;
  text-align: center;
  width: 60px;
  height: 34px;
  /* padding-top: 3px; */
  font-size: 14px;
}
.hash {
  text-decoration: none;
  color: #3498db;
}
.download {
  float: right;
  width: 100px;
  height: 20px;
  text-align: right;
  cursor: pointer;
}
.download span {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
  vertical-align: middle;
  padding-left: 5px;
}
.download img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.money_count {
  font-weight: 550;
}
.tran-card {
  /* height: 100%; */
  margin-bottom: 50px;
}
/deep/ .el-table .warning-row {
  background: #f5f5f5;
}
/deep/ .el-table td,
.el-table th.is-leaf {
  border: none;
}
/deep/ .el-table td,
.el-table th.is-leaf {
  border: none;
}
/deep/ .el-table::before {
  height: 0;
}
/deep/ .el-card__body {
  padding: 24px;
}
.count {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #000000;
  line-height: 16px;
  opacity: 0.7;
}
/deep/ .cell {
  font-size: 14px;
}
@media screen and (max-width: 750px) {
  /deep/ .el-table thead {
    font-size: 14px;
  }
  /deep/ .el-table th,
  .el-table tr {
    border-bottom: 2px solid #e7eaf3;
    border-top: 2px solid #e7eaf3;
  }
  .unit {
    margin-left: 1px;
  }
  .outStatus {
    background: #d0f1aa;
    border: 1px solid #f8f8f8;
    border-radius: 12px;
    border-radius: 12px;
    text-align: center;
    width: 55px;
    height: 26px;
    font-size: 9px;
    padding-top: 4px;
  }
  .inStatus {
    background: #ffe6e3;
    border: 1px solid #f8f8f8;
    border-radius: 12px;
    border-radius: 12px;
    text-align: center;
    width: 55px;
    height: 26px;
    padding-top: 3px;
    font-size: 9px;
  }
  .hash {
    text-decoration: none;
    color: #3498db;
  }
  .download {
    float: right;
    width: 100px;
    height: 20px;
    text-align: right;
    cursor: pointer;
  }
  .download span {
    font-family: PingFang-SC-Regular;
    font-size: 16px;
    color: #151c2c;
    line-height: 16px;
    vertical-align: middle;
    padding-left: 5px;
  }
  .download img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .money_count {
    font-weight: 550;
  }
  .tran-card {
    /* height: 100%; */
    margin-bottom: 50px;
  }
  /deep/ .el-table .warning-row {
    background: #f5f5f5;
  }
  /deep/ .el-table td,
  .el-table th.is-leaf {
    border: none;
  }
  /deep/ .el-table td,
  .el-table th.is-leaf {
    border: none;
  }
  /deep/ .el-table::before {
    height: 0;
  }
  /deep/ .el-card__body {
    padding: 10px;
  }
  .count {
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: #000000;
    line-height: 16px;
    opacity: 0.7;
  }
  /deep/ .el-table .cell {
    line-height: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    font-size: 14px;
  }
}
</style>