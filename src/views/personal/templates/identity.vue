<template>
  <div class="contier">
    <div class="title_cont">
      <span>身份管理</span>
      <p>资料提交记录</p>
    </div>
    <!-- cont内容 -->
    <div class="record_cont">
      <div class="files" v-for="(item,index) in idenList" :key="index">
        <!-- <img class="file_img" :src="item.fileUrl" /> -->
        <p class="status">你现在的身份是{{sysUser.type | getLevelName}}</p>
        <p class="desc">
          您于 {{item.createTime | getDate}}提交的证明材料，当前状态为
          <span
            class="status"
          >{{item.status | getStatus }}</span>
        </p>
      </div>
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
        pageSize: 10
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
.title_cont span {
  font-family: PingFang-SC-Bold;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
}
.title_cont p {
  font-family: PingFangSC-Regular;
  font-size: 20px;
  color: #666666;
  letter-spacing: 0;
  margin-top: 15px;
}
.contier {
  padding: 30px;
}
</style>