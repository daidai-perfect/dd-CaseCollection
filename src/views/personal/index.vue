<template>
  <div class="browser">
    <div class="app-cont">
      <el-row :gutter="24">
        <el-col :span="6">
          <div class="person_cont">
            <div class="flex_cont">
              <div class="user_info">
                <div class="avaImg">
                  <!-- <el-avatar
                  :size="90"
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  ></el-avatar>-->
                  <img src="@/assets/opLogo.jpg" />
                </div>
                <div class="userCont">
                  <p class="user_phone">{{sysUser.loginName}}</p>
                  <!-- <p class="user_phone">{{sysUser.mobile}}</p> -->
                  <!-- 判断用户是什么，展示什么 -->
                  <p class="ordinary_user">{{sysUser.type | getLevelName}}</p>
                  <p class="upgrade" @click="upUser" v-if="sysUser.type==1">身份升级</p>
                </div>
              </div>
              <div class="menu">
                <el-menu
                  :default-active="this.$route.path"
                  active-text-color="#0074F8"
                  text-color="#666666"
                  router
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                >
                  <el-menu-item index="/personal/report">
                    <i class="el-icon-document"></i>
                    <span slot="title" class="mobile_title">报告管理</span>
                  </el-menu-item>
                  <el-menu-item index="/personal/identity">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title" class="mobile_title">身份管理</span>
                  </el-menu-item>
                  <el-menu-item index="/personal/record">
                    <i class="el-icon-s-order"></i>
                    <span slot="title" class="mobile_title">司法协助记录</span>
                  </el-menu-item>
                </el-menu>
              </div>
            </div>
          </div>
        </el-col>
        <!-- <el-col :span="1">&nbsp;1</el-col> -->
        <el-col :span="18">
          <div class="person_cont">
            <router-view />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getToken } from "@/utils/auth";
export default {
  filters: {
    getLevelName(val) {
      if (val == 1) {
        return "普通用户";
      } else if (val == 2) {
        return "公安用户";
      } else if (val == 3) {
        return "机构用户";
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sysUser"])
  },
  created() {
    if (getToken() == undefined) {
      this.$router.push({
        path: "/"
      });
    }
  },
  methods: {
    upUser() {
      this.$router.push({
        path: "/personal/upgrade"
      });
    },
    handleOpen(val) {
      console.log(val);
    },
    handleClose(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 50px;
}
.person_cont {
  border-radius: 10px;
}
.flex_cont {
  /* position: relative;
  top: 50%; 
  transform: translateY(-75%); */
  height: 100%;
  padding-top: 30px;
}
/deep/ .el-menu-item {
  text-shadow: none;
  text-align: left;
  /* height: 72px; */
  font-size: 0.938vw;
}
/deep/ .el-menu-item:first-child {
  border-bottom: 0.5px solid #dddddd;
  border-top: 0.5px solid #dddddd;
}
/deep/ .el-menu-item:last-child {
  border-bottom: 0.5px solid #dddddd;
  border-top: 0.5px solid #dddddd;
}
.upgrade {
  font-family: PingFang-SC-Regular;
  font-size: 14px;
  color: #000;
  line-height: 14px;
  cursor: pointer;
}
.user_phone {
  /* font-family: PingFangSC-Regular;
  font-size: 20px;
  margin-top: 15px; */
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #000000;
  line-height: 20px;
  margin: 10px auto;
}
.avaImg {
  width: 70px;
  height: 70px;
  padding: 10px;
  margin: 0 auto 10px;
  border-radius: 50%;
  border: 1px solid #25867c;
}
.avaImg img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.ordinary_user {
  /* font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #ffffff;
  line-height: 16px;
  background: #f8b849;
  border-radius: 15px;
  border-radius: 15px;
  height: 34px;
  width: 105px;
  line-height: 2;
  margin: 0 auto;
  margin-bottom: 13px;
  margin-top: 15px;
  text-align: center; */
  width: 140px;
  height: 36px;
  line-height: 36px;
  background: #f4a032;
  border-radius: 15px;
  text-align: center;
  margin: 15px auto;
  font-size: 16px;
}
.person_cont {
  background: white;
  height: 100%;
  width: 100%;
}
.user_info {
  margin: 40px 0 0;
  text-align: center;
}
.browser {
  width: 100%;
  height: 100%;
  display: flex;
}
.app-cont {
  width: 73%;
  margin: 0 auto;
  color: white;
  margin-top: 35px;
}
@media screen and (max-width: 750px) {
  .mobile_title {
    display: none;
  }
  .app-cont {
    width: 93%;
    margin: 0 auto;
    color: white;
    margin-top: 35px;
  }
  /deep/ .el-menu-item {
    text-align: center;
  }
  .menu {
    margin-top: 50px;
  }
  .person_cont {
    border-radius: 10px;
  }
  .flex_cont {
    /* position: relative;
  top: 50%; 
  transform: translateY(-75%); */
    height: 100%;
    padding-top: 30px;
  }
  /deep/ .el-menu-item:first-child {
    border-bottom: 0.5px solid #dddddd;
    border-top: 0.5px solid #dddddd;
  }
  /deep/ .el-menu-item:last-child {
    border-bottom: 0.5px solid #dddddd;
    border-top: 0.5px solid #dddddd;
  }
  .upgrade {
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: #000;
    line-height: 14px;
    cursor: pointer;
  }
  .user_phone {
    /* font-family: PingFangSC-Regular;
  font-size: 20px;
  margin-top: 15px; */
    height: 20px;
    font-size: 10px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 20px;
    margin: 10px auto;
  }
  /deep/ .el-col-6 {
    padding-right: 0 !important;
  }
  .avaImg {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 auto 10px;
    border-radius: 50%;
    border: 1px solid #25867c;
  }
  .avaImg img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .ordinary_user {
    /* font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #ffffff;
  line-height: 16px;
  background: #f8b849;
  border-radius: 15px;
  border-radius: 15px;
  height: 34px;
  width: 105px;
  line-height: 2;
  margin: 0 auto;
  margin-bottom: 13px;
  margin-top: 15px;
  text-align: center; */
    width: 60px;
    height: 26px;
    line-height: 28px;
    background: #f4a032;
    border-radius: 15px;
    text-align: center;
    margin: 15px auto;
    font-size: 10px;
  }
  .person_cont {
    background: white;
    height: 100%;
    width: 100%;
  }
  .user_info {
    margin: 40px 0 0;
    text-align: center;
  }
  .browser {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
/deep/ .el-col {
  height: 96%;
}
/deep/ .el-row {
  height: 100%;
}
</style>