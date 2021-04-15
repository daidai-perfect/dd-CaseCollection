<template>
  <div>
    <!-- 电信诈骗 -->
    <div class="diaCont">
      <!-- 原电信诈骗 -->
      <!-- <el-dialog
        :visible.sync="fraudVisble"
        width="30%"
        :before-close="handleClose"
        :showClose="false"
        class="fraudDialog"
      >
        <div class="warning_img">
          <img src="@/assets/warning.png" />
        </div>
        <span>您是否掌握诈骗嫌疑人的数字货币地址？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="changeStatus('/fraud/notGetMoneyAddress')">否</el-button>
          <el-button type="primary" @click="changeStatus('/fraud/getMoneyAddress')">是</el-button>
        </span>
      </el-dialog>-->
      <el-dialog
        title="资产追踪"
        :visible.sync="fraudVisble"
        width="50%"
        :before-close="handleClose"
        :showClose="false"
        class="fraudDialog"
      >
        <!-- <div class="warning_img">
          <img src="@/assets/warning.png" />
        </div>-->
        <span>链审科技针对利用数字货币进行相关犯罪的案件，提供从区块链地址到实际控制人的全方面追踪。司法机构只需要提供涉案的数字货币信息，链审科技将利用大数据和独有的标签库，锁定涉案资金的去向，以及定位犯罪嫌疑人的真实身份。</span>
        <span slot="footer" class="dialog-footer">
          <el-tooltip
            class="item"
            effect="dark"
            content="链审科技提供数字货币相关电信、网络诈骗案件，以及各类非法交易、洗钱案件的涉案资金追踪服务。"
            placement="top-start"
          >
            <el-button @click="changeStatus('/fraud/preparationFile')">数字货币追踪</el-button>
          </el-tooltip>
          <el-tooltip
            class="item"
            effect="dark"
            content="我们提供针对各类涉及数字货币的网络传销、网络赌博案件和非法集资案件的资金流向查控、沉淀资金定位及监控服务。。"
            placement="top-start"
          >
            <el-button type="primary" @click="changeStatus('/fraud/preparationFileMonitor')">资金盘监控</el-button>
          </el-tooltip>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fraudVisble: true
    };
  },
  methods: {
    handleClose(val) {
      console.log(val);
    },
    changeStatus(routeName) {
      this.$router.push({
        path: routeName
      });
    }
  }
};
</script>

<style scoped>
/deep/ .el-dialog__footer {
  padding-bottom: 30px;
}
.warning_img {
  text-align: center;
}
.dialog-footer {
  margin: 0 auto;
  margin-bottom: 50px;
}
/deep/ .el-dialog__body {
  text-align: center;
}
.diaCont {
  display: flex;
  height: 100%;
  width: 100%;
}
.fraudDialog {
  /* height: 620px; */
  text-align: center;
  z-index: 9999999999999999999999;
}
.fraudDialog img {
  height: 124px;
  width: 124px;
  margin-bottom: 20px;
}
.fraudDialog span {
  font-family: PingFang-SC-Bold;
  font-size: 23px;
  color: #151c2c;
  text-align: center;
  line-height: 28px;
  letter-spacing: 4px;
}
/deep/ .el-dialog__footer {
  text-align: center;
}
</style>