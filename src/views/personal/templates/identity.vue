<template>
  <div class="contier">
    <div class="title_cont">
      <p>身份管理</p>
      <!-- <p>资料提交记录</p> -->
    </div>
    <!-- cont内容 -->
    <div class="record_cont">
      <!-- <div class="files" v-for="(item,index) in idenList" :key="index">
        <img class="file_img" :src="item.fileUrl" />
        <p class="status">你现在的身份是{{sysUser.type | getLevelName}}</p>
        <p class="desc">
          您于 {{item.createTime | getDate}}提交的证明材料，当前状态为
          <span
            class="status"
          >{{item.status | getStatus }}</span>
        </p>
      </div> -->
      <el-table
      :data="idenList"
      stripe
      :header-cell-style="{background:'#FAFAFA',color:'#000',fontSize: '14px',fontWeight:'500'}"
      class="tables"
      height="440"
    >
      <!-- <el-table-column prop="id" label="报告id"></el-table-column> -->
      <el-table-column prop="reportNo" label="提交时间" min-width="100px">
        <template slot-scope="{ row }">{{row.reportNo | getString}}</template>
      </el-table-column>
      <el-table-column prop="reportType" label="证明材料" min-width="100px">
        <template slot-scope="{ row }">{{row.reportType | getReportType}}</template>
      </el-table-column>
      <el-table-column prop="reportStatus" label="当前状态" min-width="100px">
        <template slot-scope="{ row }">{{row.reportStatus | getReportStatus}}</template>
      </el-table-column>
    </el-table>
    </div>
    <Pagination
      v-show="total > 0"
      :total="total"
      layout="prev, pager, next"
      :page.sync="params.pageNo"
      :limit.sync="params.pageSize"
      @pagination="fetchData"
      class="page"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import * as utils from "@/utils/utils";
import * as Api_person from "@/api/person";
import { mapGetters } from "vuex";
export default {
  filters: {
    getDate(val) {
      // var s=new Date(val);
      // console.log(s.getFullYear());
      return utils.getDate(new Date(val));
    },
    getLevelName(val) {
      if (val == 1) {
        return "普通用户";
      } else if (val == 2) {
        return "公安用户";
      } else if (val == 3) {
        return "机构用户";
      }
    },
    getStatus(val) {
      if (val == 0) {
        return "未审核";
      } else if (val == 1) {
        return "审核";
      }
    }
  },
  data() {
    return {
      total: 0,
      idenList: [],
      params: {
        pageNo: 1,
        pageSize: 10,
        userId: ""
      }
    };
  },
  computed: {
    ...mapGetters(["sysUser"])
  },
  components: {
    Pagination: Pagination
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.params.userId = this.sysUser.id;
      Api_person.getPersonList(this.params).then(res => {
        console.log(res, "身份管理");
        this.idenList = res.data.data.list;
        this.total = res.data.data.total;
        // this.tableData = res.data.list;
        // this.total = res.data.total - 0;
      });
    }
  }
};
</script>

<style scoped>
.desc {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #666666;
  letter-spacing: 0;
  margin-top: 5px;
}
.status {
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #2b0000;
  letter-spacing: 0;
}
.file_img {
  width: 199px;
  height: 160px;
  margin-right: 20px;
}
.files {
  background: #f5f5f5;
  border-radius: 4px;
  border-radius: 4px;
  padding: 25px;
  padding-left: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.record_cont {
  margin-top: 30px;
  overflow-y: auto;
  height: 600px;
}
.title_cont {
  width: 100%;
}
.title_cont p {
  /*font-size: 24px;
  color: #333333;
  letter-spacing: 0; */
  /* height: 25px; */
  font-size: 24px !important;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
}
/* .title_cont p {
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #666666;
  letter-spacing: 0;
  margin-top: 15px;
} */
.contier {
  padding: 30px;
}
/deep/ .cell {
  font-size: 14px;
  font-weight: 500;
}
</style>