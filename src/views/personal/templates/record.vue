<template>
  <div class="contier">
    <div class="title_cont">
      <p>司法协助记录</p>
      <!-- <div class="select_date">
        <el-date-picker
          v-model="params.applyTime"
          type="date"
          placeholder="年/月/日"
          class="date"
          value-format="yyy-MM-dd"
        ></el-date-picker>
        <el-button icon="el-icon-search" class="search_button" @click="fetchData"></el-button>
      </div> -->
    </div>
    <div class="table_cont">
      <el-table
        :data="tableData"
        class="moneyTable"
        style="width:100%;"
        :header-cell-style="{background:'#FAFAFA',color:'#000',fontSize: '14px',fontWeight:'500'}"
      >
        <el-table-column type="index" label="序号" align="center" min-width="100"></el-table-column>
        <el-table-column prop="createTime" label="提交时间" align="center" min-width="100"></el-table-column>
        <el-table-column prop="isAuth" label="状态" align="center" min-width="100">
          <template slot-scope="{row}">{{row.isAuth | getAuth}}</template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" min-width="100">
          <template slot-scope="{row}">
            <el-button type="text" @click="toDetail(row)">查看详情</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="userName" label="联系人姓名" align="center" width="100"></el-table-column>
        <el-table-column prop="name" label="执法机关全称" align="center"></el-table-column>
        <el-table-column prop="provName" label="所在城市" align="center"></el-table-column>
        <el-table-column prop="brief" label="简要情况" align="center" width="160"></el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>-->
        <!-- <el-table-column prop="status" label="状态" align="center"></el-table-column> -->
      </el-table>
      <Pagination
        v-show="total > 0"
        :total="total"
        layout="prev, pager, next"
        :pager-count="5"
        :page.sync="params.pageNo"
        :limit.sync="params.pageSize"
        @pagination="fetchData"
        class="page"
      />
      <el-dialog title="查看详情" :visible.sync="dialogVisible" width="50%">
        <el-form ref="form" size="mini">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item label="联系人姓名：">{{perForm.loginName}}</el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="执法机关全称：">{{perForm.name}}</el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所在城市：">{{perForm.provName}}-{{perForm.cityName}}</el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <el-form-item label="简要情况：">{{perForm.cooperationInfo}}</el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <el-form-item label="警官证：">
                <div v-if="perForm.imageUrl">
                  <img
                    v-for="(item,index) in perForm.imageUrl"
                    :key="index"
                    :src="item"
                    class="policeImg"
                  />
                </div>
                <div v-else>暂无上传</div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="24">
              <el-form-item label="联系方式：">{{perForm.mobile}}</el-form-item>
            </el-col>
          </el-row>
          <!-- <el-form-item class="alignc">
            <el-button type="primary" @click="onSubmit('form')">确定</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </el-form-item>-->
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import * as Api_person from "@/api/person";
import { mapGetters } from "vuex";
export default {
  filters: {
    getAuth(val) {
      if (val == 0) {
        return "未回复";
      } else {
        return "已回复";
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      date: "",
      total: 0,
      params: {
        pageNo: 1,
        pageSize: 10,
        applyTime: ""
      },
      perForm: {},
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
  computed: {
    ...mapGetters(["sysUser"])
  },
  components: {
    Pagination: Pagination
  },
  mounted() {
    this.getJudicialAidList()
  },
  methods: {
    fetchData() {
      console.log(val,'1111111111111')  
      this.params.pageNo= val.page
      this.getJudicialAidList()
    },
    getJudicialAidList(){
      this.params.userId = this.sysUser.id;
      Api_person.getJudicialAidList(this.params).then(res => {
        this.tableData = res.data.list;
        this.total = res.data.total - 0;
      });
    },
    // 查看详情
    toDetail(val) {
      this.perForm = { ...val };
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.policeImg {
  width: 120px;
  height: 120px;
  margin-left: 5px;
  margin-right: 5px;
}
.table_cont {
  margin-top: 30px;
  height: 70%;
}
.date {
  width: 320px;
  height: 45px;
}
.search_button {
  width: 52px;
  height: 45px;
  padding: 0;
  background: #0074f8;
  font-size: 25px;
  color: white;
  position: relative;
  top: 4px;
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
.title_cont p {
  /* font-family: PingFang-SC-Bold;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  line-height: 26px;
   */
  font-size: 24px !important;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
}
/deep/ .el-input__inner {
  height: 100%;
  background: #f5f5f5;
}
/deep/ .cell {
  font-size: 14px;
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