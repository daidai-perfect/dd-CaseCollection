<template>
  <div>
    <!-- 注册登录 -->
    <el-dialog
      :title="title"
      :visible.sync="visble"
      width="30%"
      class="loginDialog"
      :before-close="handleClose"
      :modal-append-to-body="false"
    >
      <!-- 登录（个人用户登录/机构用户登录） -->
      <div v-if="status=='1'">
        <login @updateTitle="updateTitle" />
      </div>
      <!-- 注册(普通用户/公安身份)-->
      <div v-else-if="status=='0'">
        <add />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import login from "./login";
import add from "./add";
export default {
  props: {
    visble: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: ""
    }
  },
  components: {
    login,
    add
  },
  data() {
    return {
      title: ""
    };
  },
  watch: {
    status(val) {
      if (val == "1") {
        this.title = "个人用户登录";
      } else {
        this.title = "注册";
      }
    }
  },
  mounted() {
    if (this.status != "") {
      if (this.status == "1") {
        this.title = "个人用户登录";
      } else {
        this.title = "注册";
      }
    }
  },
  methods: {
    handleClose() {
      this.$emit("closeDialog", false);
    },
    updateTitle(val) {
      this.title = val;
    }
  }
};
</script>

<style scoped>
.mechanismLogin {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 22px;
  color: #0074f8;
  opacity: 1;
  text-align: right;
}
.mechanismLogin span {
  cursor: pointer;
}
.loginButton {
  height: 50px;
  width: 100%;
}
.opButton {
  text-align: center;
  margin-top: 50px;
}
.opButton p {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  color: #0074f8;
  opacity: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.loginDialog {
  z-index: 9999999999999999999999 !important;
  /* text-align: center; */
}
/deep/ .el-dialog__title {
  width: 120px;
  height: 33px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 24px;
  color: #151c2c;
  opacity: 1;
}
/* /deep/ .el- */
/deep/ .el-input__inner {
  height: 58px;
}
/deep/ .el-row {
  margin-top: 20px;
}
.codeButton {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  height: 58px;
  color: #0074f8;
}
</style>