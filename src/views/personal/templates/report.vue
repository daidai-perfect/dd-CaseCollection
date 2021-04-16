<template>
  <div class="contier">
    <div v-if="active !== 0" style="color: rgb(102, 102, 102);padding-left: 20px;margin-bottom: 20px;cursor: pointer;">
      <span @click="select({id: 0})" class="management">报告管理</span> /
      <span>{{selectFile}}</span>
    </div>
    <div v-else style="display: flex;padding:0 25px 0 10px;margin-bottom: 5px;justify-content: space-between;align-items: center;">
      <div style="display: flex;">
        <div v-for="item in data" @click="select(item)" :key="item.id" @dragleave="dragleave" class="group" @dragover="allowDrop" @drop="drop">
          <div>
            <img src="../../../assets/files.png" width="30" alt="">
          </div>
          {{item.name}}
        </div>
      </div>
      <div>
        <el-button type="primary" @click="dialogVisible = true">添加</el-button>
      </div>
    </div>
    <div>
      <el-table
        :data="tableData"
        stripe
        :header-cell-style="{background:'#E5E9EF',color:'#151C2C'}"
        class="tables"
        height="480"
      >
        <el-table-column prop="id" label="报告id"></el-table-column>
        <el-table-column prop="reportNo" label="报告编码" width="160">
          <template slot-scope="{ row }">{{row.reportNo | getString}}</template>
        </el-table-column>
        <el-table-column prop="reportType" label="报告类型">
          <template slot-scope="{ row }">{{row.reportType | getReportType}}</template>
        </el-table-column>
        <el-table-column prop="reportStatus" label="报告状态">
          <template slot-scope="{ row }">{{row.reportStatus | getReportStatus}}</template>
        </el-table-column>
        <el-table-column prop="paidStatus" label="支付状态">
          <template slot-scope="{ row }">{{row.paidStatus | getPaidStatus}}</template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="160"></el-table-column>
        <el-table-column prop="updateTime" label="更新时间"></el-table-column>
        <el-table-column label="操作" fixed="right" width="50">
          <template slot-scope="{row}">
            <el-button type="text" @click="downLoadReport(row)">下载</el-button>
          </template>
        </el-table-column>
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

    <el-dialog
      title="新建文件夹"
      :visible.sync="dialogVisible"
      width="30%">
      <el-input />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import * as Api_person from "@/api/person";
export default {
  filters: {
    getString(val) {
      return val.slice(0, 16) + "...";
    },
    getReportType(val) {
      if (val == 1) {
        return "电信诈骗";
      } else if (val == 2) {
        return "数字货币";
      }
    },
    getReportStatus(val) {
      if (val == 0) {
        return "未生成";
      } else if (val == 1) {
        return "正在生成中";
      } else if (val == 2) {
        return "已生成未审核";
      } else if (val == 3) {
        return "已生成已审核";
      } else if (val == 4) {
        return "已发送";
      }
    },
    getPaidStatus(val) {
      if (val == 0) {
        return "未支付";
      } else if (val == 1) {
        return "已支付";
      }
    }
  },
  data() {
    return {
      total: 0,
      dialogVisible: false,
      active: 0,
      params: {
        pageNo: 1,
        pageSize: 10
      },
      tableData: [],
      data: [
        { id: 1, name: '文件夹1' },
        { id: 2, name: '文件夹2' },
        { id: 3, name: '文件夹3' },
      ]
    };
  },
  computed: {
    selectFile() {
      return this.data.find(e => e.id === this.active).name
    }
  },
  components: {
    Pagination: Pagination
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    dragleave(ev) {
      ev.target.classList.remove('active');
    },
    select(item) {
      this.active = item.id
    },
    allowDrop(ev) {
      ev.target.classList.add('active');
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      // var data = ev.dataTransfer.getData("Text");
      ev.target.classList.remove('active');
    },
    fetchData() {
      Api_person.getReportList(this.params).then(res => {
        console.log(res);
        this.tableData = res.data.list;
        this.total = res.data.total - 0;
        this.$nextTick(() => {
          const tr = document.getElementsByTagName('tr')
          tr.forEach(e => {
            if (Array.from(e.classList).includes('el-table__row')) {
              e.setAttribute('draggable', true)
              e.addEventListener('dragstart', (ev) => {
                ev.target.id = 'tr' + Math.random()
                ev.dataTransfer.setData("Text", ev.target.id);
              })
            }
          })
        })
      });
    },
    // 下载报告
    downLoadReport(row) {
      console.log(row);
      window.open(
        "http://39.96.66.135:8080/profile/upload/2021/04/07/421520a5-d6e7-4575-8a43-2dd8c7842299.doc"
      );
      // Api_person.downloadFile({ fileName: "http://39.96.66.135:8080/profile/upload/2021/04/07/421520a5-d6e7-4575-8a43-2dd8c7842299.doc" }).then(res => {
      //   console.log(res);
      // });
    }
    // 打开更多服务
    // moreServices(row) {
    //   this.$prompt("请输入联系方式", "提示", {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消"
    //   })
    //     .then(({ value }) => {
    //       this.$message({
    //         type: "success",
    //         message: "你的邮箱是: " + value
    //       });
    //     })
    //     .catch(() => {});
    // }
  }
};
</script>

<style  scoped>
/* span {
  color: black;
} */
.tables {
  width: 95%;
  margin: 0px auto;
}
.contier {
  padding-top: 20px;
}
/deep/ .cell {
  font-size: 16px;
}
.group {
  width: 130px; 
  height:50px;
  display: flex;
  font-size: 16px;
  color: #333;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.group img{
  margin-right: 15px;
}
.management:hover{
  color: rgb(0, 116, 248);
} 
.active{
  opacity: 0.5;
}
</style>