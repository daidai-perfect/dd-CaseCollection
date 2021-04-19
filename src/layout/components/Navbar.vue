<template>
  <div class="header-cont">
    <div class="app_header_container">
      <div class="app_nav_wraper">
        <!-- <img style="height: 40px; width: 453px;" src="../../../assets/logo.png" alt /> -->
        <!-- <img class="logo" src="@/assets/logo.png" alt @click="jumpOthers('/dashboard')" /> -->
        <img class="logo" src="@/assets/logo.png" alt @click="$router.push({name:'browser'})" />
        <div>
          <!-- 移动端菜单 -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#132042"
            menu-trigger="click"
            text-color="white"
            active-text-color="white"
            router
          >
            <el-submenu index="2">
              <template slot="title">导航</template>
              <el-menu-item index="/browser">浏览器</el-menu-item>
              <!-- <el-submenu index="2-3">
                <template slot="title">资产追踪</template>
                <el-menu-item index="/fraud">电信诈骗</el-menu-item>
                <el-menu-item index="/digital">数字货币项目</el-menu-item>
              </el-submenu>-->
              <!-- <el-menu-item index="/fraud">资产追踪</el-menu-item> -->
              <el-menu-item index="/judicial">司法入口</el-menu-item>
              <el-menu-item index="/complaint">举报骗局</el-menu-item>
              <el-menu-item index="/case">行业案例</el-menu-item>
              <el-menu-item index="/dashboard">关于我们</el-menu-item>
            </el-submenu>
          </el-menu>
          <!-- ul菜单 -->
          <ul class="navMenu">
            <li :class="{'active':ulIndex==0}" @click="hopRoute(0,'/browser')">浏览器</li>
            <!-- 原下拉菜单点击 -->
            <!-- <li :class="{'active':ulIndex==1}" @click="hopRoute(1,'assetsGo')">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">资产追踪</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="jumpOthers('/fraud')">电信诈骗</el-dropdown-item>
                  <el-dropdown-item @click.native="jumpOthers('/digital')">数字货币项目</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>-->
            <!-- 新 -->
            <li :class="{'active':ulIndex==1}" @click="hopRoute(1,'/fraud')">资产追踪</li>
            <li :class="{'active':ulIndex==2}" @click="hopRoute(2,'/judicial')">司法入口</li>
            <li :class="{'active':ulIndex==3}" @click="hopRoute(3,'/complaint')">举报骗局</li>
            <li :class="{'active':ulIndex==4}" @click="hopRoute(4,'/case')">行业案例</li>
            <li :class="{'active':ulIndex==5}" @click="hopRoute(5,'/dashboard')">关于我们</li>
          </ul>
          <!-- 移动端菜单 -->
          <!-- <el-dropdown class="mobile_menu">
            <span class="el-dropdown-link">
              下拉菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="hopRoute(0,'/browser')">浏览器</el-dropdown-item>
              <el-dropdown-item @click.native="hopRoute(2,'/judicial')">司法入口</el-dropdown-item>
              <el-dropdown-item @click.native="hopRoute(3,'/complaint')">举报骗局</el-dropdown-item>
              <el-dropdown-item @click.native="jumpIndustry">行业案例</el-dropdown-item>
              <el-dropdown-item @click.native="jumpAboutWe">关于我们</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
          <!-- <ul class="navMenu">
            <li :class="{'active':ulIndex==0}" @click="hopRoute(0,'/browser')">浏览器</li>
             <li :class="{'active':ulIndex==1}" @click="hopRoute(1,'assetsGo')">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">资产追踪</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="jumpOthers('/fraud')">电信诈骗</el-dropdown-item>
                 <el-dropdown-item @click.native="jumpOthers('/digital')">数字货币项目</el-dropdown-item> 
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li :class="{'active':ulIndex==2}" @click="hopRoute(2,'/judicial')">司法入口</li>
            <li :class="{'active':ulIndex==3}" @click="hopRoute(3,'/complaint')">举报骗局</li>
            <li :class="{'active':ulIndex==4}" @click="jumpIndustry">行业案例</li>
            <li :class="{'active':ulIndex==5}" @click="jumpAboutWe">关于我们</li>
          </ul>-->
        </div>
      </div>
      <div class="app_nav_wraper" v-if="loginStatus">
        <img src="@/assets/opLogo.jpg" class="avaHeadImg" @click="personal" />
        <!-- <el-avatar
          :size="20"
         
          class="avaHeadImg"
          @click.prevent.native="personal"
        ></el-avatar>-->
        <p class="user_txt" @click="personal">Hi，{{sysUser.loginName}}</p>
        <img src="@/assets/exit.png" @click="logout" class="exit_img" alt />
      </div>
      <div class="app_nav_wraper" v-if="!loginStatus">
        <span class="user_txt" @click="openLogin('1')">登录</span>
        <!-- <span class="user_txt" @click="openLogin('0')">注册</span> -->
      </div>
    </div>
    <login
      :visble="visble"
      :status="status"
      @closeDialog="closeDialog"
      @loginSuccess="loginSuccess"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getToken } from "@/utils/auth";
import login from "@/components/register/index";
import * as mobile from "@/utils/mobile";
export default {
  // filters: {
  //   getName(val) {
  //     setTimeout(() => {

  //     }, 500);
  //     return data.loginName;
  //   }
  // },
  data() {
    return {
      activeIndex: "1",
      userName: "admin",
      ulIndex: 0,
      visble: false,
      status: "",
      loginStatus: false
    };
  },
  components: {
    login
  },
  watch: {
    sysUser: {
      handler(val) {
        console.log(val, "监听");
        if (!val.id) {
          console.log(val);
          this.loginStatus = false;
        } else {
          this.loginStatus = true;
        }
      }
    },
    deep: true
  },
  computed: {
    ...mapGetters(["sysUser"])
    // isMobile() {
    //   return mobile.isMobile();
    // }
  },
  mounted() {
    console.log(this.sysUser);
    const token = getToken();
    if (token) {
      this.$store.dispatch("user/getInfo");
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      console.log(this.$route);
      if (this.$route.fullPath.indexOf("personal") != -1) {
        this.$router.push({
          path: "/"
        });
      }
      this.loginStatus = false;
    },
    loginSuccess(val) {
      this.loginStatus = true;
    },
    closeDialog() {
      this.visble = false;
    },
    openLogin(status) {
      this.visble = true;
      this.status = status;
    },
    handleSelect(val) {
      console.log(val);
    },
    upPerson() {
      console.log("个人中心");
    },
    hopRoute(index, routeName) {
      this.ulIndex = index;
      if (routeName == "assetsGo") {
        //
      } else {
        this.$router.push({
          path: routeName
        });
      }
    },
    jumpOthers(routeName) {
      this.$router.push({
        path: routeName
      });
    },
    personal() {
      if (this.sysUser.type == 1) {
        this.$router.push({
          path: "/personal/identity"
        });
      } else {
        this.$router.push({
          path: "/personal"
        });
      }
    }
  }
};
</script>

<style scoped>
/* /deep/ .el-menu-demo {
  background: none;
} */
.el-menu-demo {
  margin-left: 10px;
  display: none;
}
/deep/ .el-submenu__title {
  border: none !important;
}
/deep/ .el-menu.el-menu--horizontal {
  border: none;
}
.mobile_menu {
  margin-left: 30px;
}
.avaHeadImg {
  cursor: pointer;
  width: 25px;
  height: 25px;
}
.exit_img {
  width: 18px;
  height: 19px;
  margin-left: 17px;
  cursor: pointer;
}
/* .navMenu>li:on {
  color: blue;
} */
.navMenu {
  height: 64px;
  line-height: 3.188vw;
  display: block;
}
.logo {
  width: 132px;
  height: 32px;
  cursor: pointer;
}
/deep/ .el-dropdown-link {
  font-family: PingFang-SC-Regular;
  font-size: 14px;
  color: hsla(0, 0%, 100%, 0.85);
  text-align: center;
  line-height: 18px;
  display: inline;
  cursor: pointer;
  margin-left: 0px;
}
/* */
.navMenu li {
  font-family: PingFang-SC-Regular;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  line-height: 18px;
  display: inline-block;
  cursor: pointer;
  margin-left: 30px;
  height: 62%;
}
.navMenu li:first-child {
  margin: 0;
}
.header-cont {
  background: #132042;
  /* background: black; */
  height: 64px;
  /* opacity: 95%; */
  /* position: fixed;
  width: 100%; */
}
.cont-row {
  width: 85%;
  margin: 0 auto;
  height: 100%;
}
.logo {
  width: 114px;
  height: 32px;
  display: inline-block;
}
.logo img {
  height: 100%;
  width: 100%;
}
.el-header {
  margin-bottom: 1%;
}
.app_header_container {
  height: 64px;
  display: flex;
  align-items: center;
  /* padding: 0 26px 0 16px; */
  justify-content: space-between;
  color: #fff;
  width: 73%;
  margin: 0 auto;
  /* border-bottom: 13px solid #f7f7f7; */
  /* border-bottom: 13px solid #fff; */
}
.app_title {
  font-size: 24px;
}
.app_nav_wraper {
  display: flex;
  align-items: center;
  color: black;
}
.is_active {
  background: #800009;
}

.app_nav_wraper a {
  text-decoration: none;
  color: #fff;
  text-align: center;
  height: 64px;
  display: flex;
  align-items: center;
}
.app_nav_wraper a span {
  border-right: 1px solid #ddd;
  display: block;
}
.user_txt {
  border-right: 1px solid white;
  padding: 0 15px 0 8px;
  font-family: PingFang-SC-Regular;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 18px;
  cursor: pointer;
}
.user_txt_person {
  padding: 0 15px 0 8px;
  font-family: PingFang-SC-Regular;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 18px;
}
.user_txt:nth-child(2) {
  border: none;
}
.el-dialog__body {
  padding-top: 0px;
}

.container {
  margin-top: 0;
  padding-top: 0;
}
.new {
  margin-top: 30px;
}
.name {
  margin-top: 30px;
}
.all {
  margin-top: 10px;
}
.container {
  padding-top: 0px;
  padding: 20px;
  background-color: #fff;
  height: 100%;

  width: 100%;
}
.conType_selectClass2 {
  padding-left: 0px;
}
.el-select {
  width: 250px;
}
p {
  margin: 0;
  padding: 0;
  font-size: 18px;
}
.user_txt:nth-child(1) {
  border: none;
}
li:hover {
  color: #989a9c !important;
  transition: color 0.5s;
}
.active {
  border-bottom: 1px solid;
  color: #989a9c !important;
  transition: border 0.5s, color 0.5s;
}
/deep/ .el-dropdown-link:hover {
  color: #989a9c !important;
  transition: color 0.5s;
}
/* 移动端 */
@media screen and (max-width: 750px) {
  /* /deep/ .el-menu-demo {
  background: none;
} */
  .el-menu-demo {
    margin-left: 10px;
    display: block;
  }
  /deep/ .el-submenu__title {
    border: none !important;
  }
  /deep/ .el-menu.el-menu--horizontal {
    border: none;
  }
  .mobile_menu {
    margin-left: 30px;
  }
  .avaHeadImg {
    cursor: pointer;
  }
  .exit_img {
    width: 18px;
    height: 19px;
    /* margin-left: 17px; */
    cursor: pointer;
  }
  /* .navMenu>li:on {
  color: blue;
} */
  .navMenu {
    height: 64px;
    line-height: 3.188vw;
    display: none;
  }
  .logo {
    width: 132px;
    height: 32px;
  }
  /deep/ .el-dropdown-link {
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: hsla(0, 0%, 100%, 0.85);
    text-align: center;
    line-height: 18px;
    display: inline;
    cursor: pointer;
    margin-left: 0px;
  }
  /* */
  .navMenu li {
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    line-height: 18px;
    display: inline-block;
    cursor: pointer;
    margin-left: 30px;
    height: 62%;
  }
  .navMenu li:first-child {
    margin: 0;
  }
  .header-cont {
    background: #132042;
    /* background: black; */
    height: 64px;
    /* opacity: 95%; */
    /* position: fixed;
  width: 100%; */
  }
  .cont-row {
    width: 85%;
    margin: 0 auto;
    height: 100%;
  }
  .logo {
    width: 114px;
    height: 32px;
    display: inline-block;
  }
  .logo img {
    height: 100%;
    width: 100%;
  }
  .el-header {
    margin-bottom: 1%;
  }
  .app_header_container {
    height: 64px;
    display: flex;
    align-items: center;
    /* padding: 0 26px 0 16px; */
    justify-content: space-between;
    color: #fff;
    width: 90%;
    margin: 0 auto;
    /* border-bottom: 13px solid #f7f7f7; */
    /* border-bottom: 13px solid #fff; */
  }
  .app_title {
    font-size: 24px;
  }
  .app_nav_wraper {
    display: flex;
    align-items: center;
    color: black;
  }
  .is_active {
    background: #800009;
  }

  .app_nav_wraper a {
    text-decoration: none;
    color: #fff;
    text-align: center;
    height: 64px;
    display: flex;
    align-items: center;
  }
  .app_nav_wraper a span {
    border-right: 1px solid #ddd;
    display: block;
  }
  .user_txt {
    border-right: 1px solid white;
    padding: 0 15px 0 8px;
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 18px;
    padding-right: 0;
  }
  .user_txt_person {
    padding: 0 15px 0 8px;
    font-family: PingFang-SC-Regular;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 18px;
  }
  .user_txt:nth-child(1) {
    border: none;
  }
  .el-dialog__body {
    padding-top: 0px;
  }

  .container {
    margin-top: 0;
    padding-top: 0;
  }
  .new {
    margin-top: 30px;
  }
  .name {
    margin-top: 30px;
  }
  .all {
    margin-top: 10px;
  }
  .container {
    padding-top: 0px;
    padding: 20px;
    background-color: #fff;
    height: 100%;

    width: 100%;
  }
  .conType_selectClass2 {
    padding-left: 0px;
  }
  .el-select {
    width: 250px;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 18px;
  }
  li:hover {
    color: #989a9c !important;
    transition: color 0.5s;
  }
  .active {
    border-bottom: 1px solid;
    color: #989a9c !important;
    transition: border 0.5s, color 0.5s;
  }
  /deep/ .el-dropdown-link:hover {
    color: #989a9c !important;
    transition: color 0.5s;
  }
  /deep/ .el-icon-arrow-down {
    font-size: 14px;
  }
}
</style>