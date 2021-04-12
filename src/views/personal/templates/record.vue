<template>
  <div class="contier">
    <div class="title_cont">
      <span>司法协助记录</span>
      <div class="select_date">
        <el-date-picker
          v-model="params.applyTime"
          type="date"
          placeholder="年/月/日"
          class="date"
          value-format="yyy-MM-dd"
        ></el-date-picker>
        <el-button icon="el-icon-search" class="search_button" @click="fetchData"></el-button>
      </div>
    </div>
    <div class="table_cont">
      <el-table
        :data="tableData"
        stripe
        class="moneyTable"
        style="width:100%;"
        :header-cell-style="{background:'#E5E9EF',color:'#151C2C'}"
      >
        <el-table-column type="index" label="序号" align="center"></el-table-column>
        <el-table-column prop="userName" label="联系人姓名" align="center" width="100"></el-table-column>
        <el-table-column prop="name" label="执法机关全称" align="center"></el-table-column>
        <el-table-column prop="provName" label="所在城市" align="center"></el-table-column>
        <el-table-column prop="brief" label="简要情况" align="center" width="160"></el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
        <!-- <el-table-column prop="status" label="状态" align="center"></el-table-column> -->
      </el-table>
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
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import * as Api_person from "@/api/person";
export default {
  data() {
    return {
      date: "",
      total: 0,
      params: {
        pageNo: 1,
        pageSize: 10,
        applyTime: ""
      },
      tableData: [
        {
          name: "1",
          city: "2",
          phone: "3",
          desc: "4",
          applyTime: "5",
          status: "6"
        }
      ]
    };
  },
  components: {
    Pagination: Pagination
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      Api_person.getJudicialAidList(this.params).then(res => {
        this.tableData = res.data.list;
        this.total = res.data.total - 0;
      });
    }
  }
};
</script>

<style scoped>
.table_cont {
  margin-top: 30px;
}
.date {
  width: 320px;
  height: 44px;
}
.search_button {
  width: 52px;
  height: 45px;
  padding: 0;
  background: #0074f8;
  font-size: 25px;
  color: white;
  position: relative;
  top: 2px;
}
.contier {
  padding: 30px;
}
.select_date {
  text-align: right;
  width: 75%;
  display: inline-block;
}
.title_cont {
  width: 100%;
}
.title_cont span {
  font-family: PingFang-SC-Bold;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  line-height: 26px;
}
/deep/ .el-input__inner {
  height: 100%;
  background: #f5f5f5;
}
/deep/ .cell {
  font-size: 0.833vw;
}
@media screen and (max-width: 750px) {
  .table_cont {
    margin-top: 30px;
  }
  .date {
    width: 320px;
    height: 44px;
  }
  .search_button {
    width: 52px;
    height: 45px;
    padding: 0;
    background: #0074f8;
    font-size: 25px;
    color: white;
    position: relative;
    top: 2px;
  }
  .contier {
    padding: 30px;
  }
  .select_date {
    text-align: right;
    width: 75%;
    display: inline-block;
  }
  .title_cont {
    width: 100%;
  }
  .title_cont span {
    font-family: PingFang-SC-Bold;
    font-size: 24px;
    color: #333333;
    letter-spacing: 0;
    line-height: 26px;
  }
  /deep/ .el-input__inner {
    height: 100%;
    background: #f5f5f5;
  }
  /deep/ .cell {
    font-size: 0.833vw;
  }
}
</style>