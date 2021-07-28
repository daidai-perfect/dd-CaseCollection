<template>
  <div class="header-cont">
    <div class="header">
        <div class="center">
            <img class="logo" src="@/assets/newimg/logo@2x.png" alt @click="$router.push({name:'browser'})" style="cursor: pointer;"/>
            <ul class="navMenu">
                <li :class="{'active':ulIndex==0}" @click="hopRoute(0,'/browser')">浏览器</li>
                <li :class="{'active':ulIndex==1}" @click="hopRoute(1,'/fraud')">资产追踪</li>
                <li :class="{'active':ulIndex==2}" @click="hopRoute(2,'/judicial')">司法入口</li>
                <li :class="{'active':ulIndex==3}" @click="hopRoute(3,'/complaint')">举报骗局</li>
                <li :class="{'active':ulIndex==4}" @click="hopRoute(4,'/industryCase')">行业案例</li>
                <li :class="{'active':ulIndex==5}" @click="hopRoute(5,'/aboutUs')">关于我们</li>
                <li :class="{'active':ulIndex==5}">|</li>
                <li :class="{'active':ulIndex==5}" @click="hopRoute(6,'/login')" v-if="!loginStatus">LOGIN NOW</li>
                <li :class="{'active':ulIndex==5}" @click="personal" v-if="loginStatus" >Hi，{{sysUser.loginName}}</li>
                <li :class="{'active':ulIndex==5}" v-if="loginStatus"><img src="@/assets/exit.png" @click="logout" class="exit_img" alt /></li>
            </ul>
            <!-- <login
              :visble="visble"
              :status="status"
              @closeDialog="closeDialog"
              @loginSuccess="loginSuccess"
            /> -->
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getToken } from "@/utils/auth";
import * as mobile from "@/utils/mobile";
export default {
  data() {
    return {
      ulIndex: 0,
      loginStatus: false
    };
  },
  watch: {
    sysUser: {
      handler(val) {
        if (!val.id) {
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
  },
  mounted() {
    const token = getToken();
    if (token) {
      this.$store.dispatch("user/getInfo");
      this.loginStatus = true;
    } else {
      this.loginStatus = false;
    }
  },
  methods: {
    logout() {
      this.$confirm('确定退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(async () => {
        await this.$store.dispatch("user/logout");
        if (this.$route.fullPath.indexOf("personal") != -1) {
          this.$router.push({
            path: "/"
          });
        }
        this.loginStatus = false;
      })
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
          path: "/personal/report"
        });
      } else {
        this.$router.push({
          path: "/personal"
        });
      }
    }
    }
  // methods: {
  //   hopRoute(index, routeName) {
  //     this.ulIndex = index;
  //     if (routeName == "assetsGo") {
  //     } else {
  //       this.$router.push({
  //         path: routeName
  //       });
  //     }
  //   },
  //       openLogin(status) {
  //     this.visble = true;
  //     this.status = status;
  //   },
  // }
};
</script>

<style lang="scss" scoped>
.exit_img {
  width: 18px;
  height: 19px;
  margin-left: -17px;
  cursor: pointer;
}
.header-cont{
    width: 100%;
    .center{
        width: 1400px;
        margin: 0 auto;
    }
    .header{
        .center{
            display: flex;
            height:150px ;
            align-items: center;
            .logo{
                width: 229px;
                height: 52px;
            }
            .navMenu{
                display: flex;
                justify-content: space-around;
                width: 100%;
                li{
                    height: 22px;
                    font-size: 23px;
                    font-family: Alibaba;
                    font-weight: normal;
                    color: #FFFFFF;
                    cursor: pointer;
                    letter-spacing:2px;
                }
            }
        }
    }
}

</style>