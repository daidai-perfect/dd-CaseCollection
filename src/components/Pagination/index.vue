<template>
  <div :class="{ hidden: hidden }" class="intelligence-pagination-container clearfix">
    <el-pagination
      class="right"
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="$emit('previous')"
      @next-click="$emit('next')"
    />
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      }
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit("update:page", val);
      }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit("update:limit", val);
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("pagination", { page: this.currentPage, limit: val });
    },

    handleCurrentChange(val) {
      this.$emit("pagination", { page: val, limit: this.pageSize });
    }
  }
};
</script>

<style>
.intelligence-pagination-container {
  text-align: right;
  padding-top: 20px;
  font-size: 14px;
}
.intelligence-pagination-container.hidden {
  display: none;
}
.intelligence-pagination-container .el-pager li.active {
  border-color: #1890ff;
  background-color: #1890ff;
  color: #fff;
  cursor: default;
  font-size: 14px;
}
.intelligence-pagination-container .el-pager li.active:hover {
  color: #fff;
}
.intelligence-pagination-container .el-pager li:hover {
  color: #1890ff;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  .el-pagination .btn-next .el-icon {
    font-size: 12px;
  }
  .el-pagination .btn-prev .el-icon {
    font-size: 12px;
  }
  .el-pagination button {
    height: 15px;
  }
  .intelligence-pagination-container {
    text-align: right;
    padding-top: 20px;
    font-size: 12px;
  }
  .intelligence-pagination-container.hidden {
    display: none;
  }
  .intelligence-pagination-container .el-pager li.active {
    border-color: #1890ff;
    background-color: #1890ff;
    color: #fff;
    cursor: default;
    font-size: 12px;
  }
  .intelligence-pagination-container .el-pager li.active:hover {
    color: #fff;
  }
  .intelligence-pagination-container .el-pager li:hover {
    color: #1890ff;
  }
  .el-pager li {
    padding: 0px 5px;
    width: 15px;
    line-height: 1.3;
    height: 15px;
    font-size: 12px;
  }
}
/* ::v-deep .number{
  font-size: 14px;
} */
</style>