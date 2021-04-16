<template>
  <div class="contier">
    <el-table
      :data="tableData"
      stripe
      :header-cell-style="{background:'#E5E9EF',color:'#151C2C'}"
      class="tables"
      height="480"
    >
      <!-- <el-table-column prop="id" label="报告id"></el-table-column> -->
      <el-table-column prop="reportNo" label="报告编码" width="100">
        <template slot-scope="{ row }">{{row.reportNo | getString}}</template>
      </el-table-column>
      <el-table-column prop="reportType" label="报告类型">
        <template slot-scope="{ row }">{{row.reportType | getReportType}}</template>
      </el-table-column>
      <el-table-column prop="reportStatus" label="报告状态" width="70">
        <template slot-scope="{ row }">{{row.reportStatus | getReportStatus}}</template>
      </el-table-column>
      <el-table-column prop="paidStatus" label="支付状态" width="70">
        <template slot-scope="{ row }">{{row.paidStatus | getPaidStatus}}</template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="150"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="80"></el-table-column>
      <el-table-column label="操作" fixed="right" width="140">
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
    <el-dialog title="支付信息" :visible.sync="paymentVisble" width="30%">
      <span>
        <i class="el-icon-circle-check" />已付款成功
      </span>
      <!-- <span>24小时出报告，会给您手机发查询密码，请登录“司法入口”查询。</span> -->
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="resetForm">再提交一笔</el-button>
      </span>
    </el-dialog>
    <!-- 分享 -->
    <el-dialog title="分享" :visible.sync="shareVisble" class="projectDialog">
      <span class="share_txt">{{shareTxt}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="copyCont">点击复制</el-button>
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
  computed: {
    ...mapGetters(["sysUser"])
  },
  data() {
    return {
      shareTxt: "",
      paymentVisble: false,
      postForm: {
        caseDesc: ""
      },
      shareVisble: false,
      total: 0,
      fileList: [],
      params: {
        pageNo: 1,
        pageSize: 10,
        userId: ""
      },
      projectVisble: false,
      tableData: []
    };
  },
  components: {
    Pagination: Pagination
  },
  mounted() {
    this.fetchData();
    if (this.$route.params.status) {
      this.paymentVisble = true;
    }
  },
  methods: {
    // 点击复制
    copyCont() {
      utils.copyShaneUrl(this.shareTxt);
    },
    // 分享
    share(row) {
      this.shareTxt =
        getReportType(row.reportType) +
        "报告已经生成，可以通过www.chainaudit.cn或者链审科技微信公众号，输入“" +
        row.reportNo +
        "”即时查看“";
      this.shareVisble = true;
    },
    // 再提交一笔
    resetForm() {
      this.projectVisble = false;
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
      this.params.userId = this.sysUser.id;
      Api_person.getReportList(this.params).then(res => {
        console.log(res);
        this.tableData = res.data.list;
        this.total = res.data.total - 0;
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
  width: 95%;
  margin: 0px auto;
}
.contier {
  padding-top: 20px;
}
/deep/ .cell {
  font-size: 16px;
}
</style>