<template>
  <div class="agreement_info">
    <el-radio
      v-model="agreeRadio"
      class="agreeInfoButton"
      label=" "
      @click.native.prevent="onRadioChange(' ')"
    ></el-radio>
    <span class="agreeInfo">
      阅读并接受 《
      <span class="hrefTxt" @click="visble1=true">链审用户协议</span>》 及 《
      <span class="hrefTxt" @click="visble2=true">隐私权保护声明</span>》
    </span>
    <!-- 用户协议 -->
    <userTrea :visble1="visble1" @closeDialog="closeDialogTrea" />
    <!-- 保护声明 -->
    <userState :visble2="visble2" @closeDialog="closeDialogStae" />
  </div>
</template>

<script>
// 用户协议
import userTrea from "../trea/userTrea";
// 保护声明
import userState from "../trea/userState";
export default {
  data() {
    return {
      agreeRadio: "",
      visble1: false,
      visble2: false
    };
  },
  components: {
    userTrea,
    userState
  },
  watch: {
    agreeRadio(val) {
      if (val == " ") {
        val = true;
      }
      this.$emit("disable", val);
    }
  },
  methods: {
    onRadioChange(e) {
      // 当点击已经选中的把 activeModel 置空，就是取消选中，并返回
      if (this.agreeRadio === e) {
        this.agreeRadio = "";
        return;
      }
      // 不是选中，选中当前点击 Radio
      this.agreeRadio = e;
      // 选中操作
    },
    closeDialogTrea(val) {
      this.visble1 = val;
    },
    closeDialogStae(val) {
      this.visble2 = val;
    }
  }
};
</script>

<style scoped>
.agreement_info {
  font-family: PingFang-SC-Regular;
  font-size: 20px;
  line-height: 45px;
  color: #999999;
}
.hrefTxt {
  color: #000000;
}
@media screen and (max-width: 750px) {
  .agreement_info {
    font-family: PingFang-SC-Regular;
    font-size: 20px;
    color: #000000;
    line-height: 20px;
    color: #999999;
  }
}
</style>