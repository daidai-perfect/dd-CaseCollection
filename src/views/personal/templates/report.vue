<template>
  <div class="contier">
    <div class="title_cont">
      <p>报告管理</p>
      <!-- <p>资料提交记录</p> -->
    </div>
    <div
      v-if="active !== 0"
      style="background:rgb(102, 102, 102);padding-left: 20px;margin-bottom: 30px;cursor: pointer;"
    >
      <span @click="select({id: 0})" class="management">报告管理</span> 
      <span>{{selectFile}}</span>
    </div>
    <div
      v-else
      style="display: flex;padding: 0 20px;width:100%;margin-bottom: 5px;justify-content: space-between;align-items: center;"
    >
      <div style="display: flex; width: 90%; overflow: auto;white-space: nowrap;">
        <div
          v-for="item in dirList"
          @click="select(item)"
          :key="item.id"
          @dragleave="dragleave"
          class="group"
          @dragover="allowDrop"
          @drop="drop"
          :id="item.id"
        >
          <img src="../../../assets/img/文件夹@2x.png" width="30" alt />
          {{item.name}}
        </div>
      </div>
      <div>
        <!-- <i>+</i> -->
        <el-button type="primary" @click="dialogVisible = true" class="addButton">+ 添加</el-button>
      </div>
    </div>

    <el-table
      :data="tableData"
      :header-cell-style="{background:'#FAFAFA',color:'#000'}"
      class="tables"
    >
      <!-- <el-table-column prop="reportId" label="报告id"></el-table-column> -->
      <el-table-column prop="reportNo" label="报告编码" min-width="95px">
        <template slot-scope="{ row }">{{row.reportNo | getString}}</template>
      </el-table-column>
      <el-table-column prop="reportType" label="报告类型" min-width="75px">
        <template slot-scope="{ row }">{{row.reportType | getReportType}}</template>
      </el-table-column>
      <el-table-column prop="reportStatus" label="报告状态" min-width="75px">
        <template slot-scope="{ row }">{{row.reportStatus | getReportStatus}}</template>
      </el-table-column>
      <el-table-column prop="paidStatus" label="支付状态" min-width="75px">
        <template slot-scope="{ row }">{{row.paidStatus | getPaidStatus}}</template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" min-width="90px"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" min-width="90px"></el-table-column>
      <el-table-column label="操作" min-width="135px">
        <template slot-scope="{row}">
          <el-button type="text" @click="downLoadReport(row)">下载</el-button>
          <el-button type="text" @click="share(row)">分享</el-button>
          <el-button type="text" @click="projectFlolow(row)">项目后续</el-button>
        </template>
      </el-table-column>
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
    <el-dialog title="项目后续" :visible.sync="projectVisble" class="projectDialog">
      <div class="projectCont">
        <el-form
          ref="form"
          :model="postForm"
          label-position="right"
          label-width="auto"
          :inline="true"
        >
          <el-row :gutter="24" class="descRemark">
            <el-col :span="24">
              <el-form-item
                label="后续描述"
                prop="caseDesc"
                :rules="{
      required: true, message: '请输入后续描述', trigger: 'blur'
    }"
              >
                <el-input
                  type="textarea"
                  class="form_dom"
                  :rows="6"
                  placeholder="请输入内容"
                  v-model="postForm.caseDesc"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24" class="descRemark">
            <el-col :span="24">
              <el-form-item label="上传图片或文件">
                <el-upload
                  class="upload-demo"
                  action="http://123.56.232.81:8080/commonFile/upload/"
                  multiple
                  :on-success="handSuccess"
                  :on-remove="handRemove"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="startAnalysis">提交分析</el-button>
      </span>
    </el-dialog>

    <el-dialog title="新建文件夹" :visible.sync="dialogVisible" width="30%">
      <el-input v-model="fileName" style="width:100%" class="form_doms" placeholder="请输入" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="clear" class="startButton">取 消</el-button>
        <el-button type="primary" @click="categoryAdd" class="startButton">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import * as Api_person from "@/api/person";
import { mapGetters } from "vuex";
import * as utils from "@/utils/utils";
function getReportType(val) {
  if (val == 1) {
    return "电信诈骗";
  } else if (val == 2) {
    return "数字货币";
  }
}
export default {
  filters: {
    getString(val) {
      return val.slice(0, 10) + "...";
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
      shareTxt: "",
      paymentVisble: false,
      dirList: [],
      fileName: "",
      postForm: {
        caseDesc: ""
      },
      shareVisble: false,
      total: 0,
      dialogVisible: false,
      active: 0,
      fileList: [],
      params: {
        pageNo: 1,
        pageSize: 10,
        userId: "",
        categoryId: null
      },
      tableData: [],
      projectVisble: false,
      tableData: []
    };
  },
  computed: {
    ...mapGetters(["sysUser"]),
    selectFile() {
      return this.dirList.find(e => e.id === this.active).name;
    }
  },
  components: {
    Pagination: Pagination
  },
  mounted() {
    this.getReportList();
    // this.getAllCategory();
    if (this.$route.params.status) {
      this.paymentVisble = true;
    }
  },
  methods: {
    // 提交 报告-文件夹分类
    async reportCategory(reportId, categoryId) {
      await Api_person.reportCategory({
        categoryId: parseInt(categoryId),
        reportId: parseInt(reportId),
        userId: this.sysUser.id
      });
      this.getReportList();
    },
    clear() {
      this.dialogVisible = false;
      this.fileName = "";
    },
    // 新增文件
    async categoryAdd() {
      await Api_person.categoryAdd({
        name: this.fileName,
        userId: this.sysUser.id
      });
      this.fileName = "";
      this.dialogVisible = false;
      this.getAllCategory();
    },
    // 获取文件夹列表
    async getAllCategory() {
      const data = await Api_person.getAllCategory();
      this.dirList = data.data;
    },
    dragleave(ev) {
      ev.target.classList.remove("active");
    },
    select(item) {
      this.active = item.id;
      this.params.categoryId = item.id || undefined;
      this.getReportList();
    },
    allowDrop(ev) {
      ev.target.classList.add("active");
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
      var reportId = ev.dataTransfer.getData("reportId");
      ev.target.classList.remove("active");
      this.reportCategory(reportId, ev.target.id);
    },
    // 提交分析
    startAnalysis() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          //
          console.log(123);
        }
      });
    },
    // 加载数据
    fetchData() {
      this.params.pageNo = val.page;
      this.getReportList();
    },
    getReportList() {
      this.params.userId = this.sysUser.id;
      Api_person.getReportList(this.params).then(res => {
        this.tableData = res.data.list;
        this.total = res.data.total - 0;
        this.$nextTick(() => {
          const tr = document.getElementsByTagName("tr");
          tr.forEach((e, k) => {
            if (Array.from(e.classList).includes("el-table__row")) {
              e.setAttribute("draggable", true);
              e.addEventListener("dragstart", ev => {
                ev.target.id = "tr" + Math.random();
                ev.dataTransfer.setData(
                  "reportId",
                  this.tableData[k + 1].reportId
                );
              });
            }
          });
        });
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
    },
    // 项目后续
    projectFlolow() {
      this.projectVisble = true;
    },
    // 上传成功的钩子
    handSuccess(response, file, fileList) {
      this.fileList = fileList;
    },
    // 删除文件的钩子
    handRemove(file, fileList) {
      this.fileList = fileList;
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
.share_txt {
  font-size: 22px;
}
.descRemark {
  margin-top: 30px;
}
.projectCont {
  width: 50%;
  margin: 0 auto;
}
/* /deep/ .el-form--inline .el-form-item__content{
  display: contents;
  vertical-align: middle;
} */
/* /deep/ .el-dialog__body {
  height: 400px;
} */
/deep/ .el-input {
  width: 230px;
}
/deep/ .el-dialog__footer {
  text-align: center;
}
/* span {
  color: black;
} */
.tables {
  width: 100%;
  margin: 0px auto;
  /* background: #FAFAFA; */
}

.contier {
  padding: 30px;
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
/deep/ .cell {
  font-size: 14px;
  font-weight: 500;
}
.projectCont {
  width: auto;
  margin: 0 auto;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  /deep/ .el-form-item {
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  /deep/ .el-textarea__inner {
    height: 50px;
    width: 200px;
  }
  /deep/ .el-dialog__title {
    font-size: 16px;
  }
  /deep/ .el-form-item__label {
    font-size: 14px;
  }
  .title_cont p {
    /*font-size: 24px;
  color: #333333;
  letter-spacing: 0; */
    /* height: 25px; */
    font-size: 20px !important;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
  }
  .contier {
    padding: 10px;
    padding-top: 50px;
  }
  /deep/ .el-dialog {
    width: 80% !important;
    height: 200px;
  }
  /deep/ .el-dialog__body {
    height: 70%;
  }
  /deep/ .el-dialog__close {
    font-size: 18px;
  }
  .startButton {
    width: 45px;
    margin-right: 10px;
    height: 35px;
    font-family: PingFang-SC-Bold;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    /* margin-left: 30px; */
  }
  /deep/ .el-input__inner {
    height: 20px;
  }
  /deep/ .el-textarea__inner {
    font-size: 12px;
  }
  /deep/ .el-form-item__error {
    font-size: 12px;
  }
  .addButton {
    height: 25px;
    width: 50px;
  }
  /deep/ .cell {
    font-size: 12px;
    font-weight: 500;
  }
  /deep/ .el-button {
    font-size: 12px;
    font-weight: 500;
  }
}

.group {
  width: 130px;
  height: 50px;
  display: flex;
  font-size: 16px;
  color: #333;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 25px;
  /* margin-left: 10px */
}
.group img {
  margin-right: 15px;
}
.management:hover {
  color: rgb(0, 116, 248);
}
.active {
  opacity: 0.5;
}
.title_cont {
  width: 100%;
}
</style>