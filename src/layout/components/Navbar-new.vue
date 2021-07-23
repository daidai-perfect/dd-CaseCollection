<template>
  <div class="header-cont">
    <div class="header">
        <div class="center">
            <img class="logo" src="@/assets/newimg/logo@2x.png" alt @click="$router.push({name:'browser'})" />
            <ul class="navMenu">
                <li :class="{'active':ulIndex==0}" @click="hopRoute(0,'/browser')">浏览器</li>
                <li :class="{'active':ulIndex==1}" @click="hopRoute(1,'/fraud')">资产追踪</li>
                <li :class="{'active':ulIndex==2}" @click="hopRoute(2,'/judicial')">司法入口</li>
                <li :class="{'active':ulIndex==3}" @click="hopRoute(3,'/complaint')">举报骗局</li>
                <li :class="{'active':ulIndex==4}" @click="hopRoute(4,'/case')">行业案例</li>
                <li :class="{'active':ulIndex==5}" @click="hopRoute(5,'/dashboard')">关于我们</li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getToken } from "@/utils/auth";
import login from "@/components/register/index";
import * as mobile from "@/utils/mobile";
export default {
  data() {
    return {
      
    };
  },
  methods: {
    hopRoute(index, routeName) {
      this.ulIndex = index;
      if (routeName == "assetsGo") {
      } else {
        this.$router.push({
          path: routeName
        });
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.header-cont{
    width: 100%;
    .center{
        width: 1200px;
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
                }
            }
        }
    }
}

</style>