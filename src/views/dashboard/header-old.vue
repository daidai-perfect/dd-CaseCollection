<template>
  <div class="case-container">
    <!-- <div class="share-img">
            <img src="/img/share-logo.png"/>
        </div>
        <div class="case-header">
            <a class="logo" href="/">
                <img src="~/assets/img/LOGO-blue@3x.png"/>
            </a>
            <a class="back" href="/">
                <img src="~/assets/img/left@3x.png"/>
                <span>返回首页</span>
            </a>
    </div>-->
    <div class="h5-case-menu">
      <div :class="['title', showH5Menu ? 'active' : '']" @click="toggleMenu">
        <span>行业案例</span>
        <img src="@/assets/img/left@3x.png" />
      </div>
      <div class="list" v-if="showH5Menu">
        <a href="#" class="active" @click="otherCase(1)">
          <span>数字货币传销-Plus Token</span>
          <img src="@/assets/img/right@3x.png" />
        </a>
        <a href="#" @click="otherCase(2)">
          <span>数字货币诈骗-HT搬砖套利</span>
          <img src="@/assets/img/right@3x.png" />
        </a>
        <a href="#" @click="otherCase(3)">
          <span>数字货币洗钱-火币OTC</span>
          <img src="@/assets/img/right@3x.png" />
        </a>
      </div>
    </div>
    <div class="case-body">
      <div class="left-sidebar pc-left-sidebar">
        <h3 class="title">行业案例</h3>
        <div class="list">
          <a href="#" class="active" @click="otherCase(1)">
            <span>数字货币传销-Plus Token</span>
            <img src="@/assets/img/right@3x.png" />
          </a>
          <a href="#" @click="otherCase(2)">
            <span>数字货币诈骗-HT搬砖套利</span>
            <img src="@/assets/img/right@3x.png" />
          </a>
          <a href="#" @click="otherCase(3)">
            <span>数字货币洗钱-火币OTC</span>
            <img src="@/assets/img/right@3x.png" />
          </a>
        </div>
      </div>
      <div class="case-main">
        <div v-if="identification==1">
          <Case1></Case1>
        </div>
        <div v-else-if="identification==2">
          <Case2></Case2>
        </div>
        <div v-else-if="identification==3">
          <Case3></Case3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Case1 from "./components/case1-old.vue";
import Case2 from "./components/case2-old.vue";
import Case3 from "./components/case3-old.vue";

export default {
  name: "case-index",
  components: {
    Case1,
    Case2,
    Case3
  },
  watch: {
    // '$route': {
    //     handler: 'routeWatch',
    //     immediate: true
    // }
  },
  data() {
    return {
      // currentCase: 1,
      showMenu: false,
      showH5Menu: false,
      identification: 1
    };
  },
  mounted() {
    // console.log(Object.keys(this.$route.query));
    // var a = Object.keys(this.$route.query).length;
    // var b=JSON.stringify(this.$route.query);
    // console.log(b);
    if (this.$route.query.identification) {
      this.identification = this.$route.query.identification;
    }
  },
  methods: {
    toggleMenu() {
      this.showH5Menu = !this.showH5Menu;
    },
    otherCase(val) {
      this.identification = val;
      this.showH5Menu = false;
    }
    // selectCase(index) {
    //     this.$router.push(`/case?current=${index}`);
    // },
    // routeWatch(newValue) {
    //     console.log('routeWatch####', newValue);
    //     if (newValue && newValue.query && newValue.query.current) {
    //         const query = Number(newValue.query.current);
    //         this.currentCase = query;
    //         if (query === 4) {
    //             this.showMenu = true;
    //         } else {
    //             this.showMenu = false;
    //         }
    //     }
    // }
  }
};
</script>
<style lang="scss" scoped>
.share-img {
  display: none;
}
.case-body {
  background: white;
  width: 100%;
}
.case-container {
  //   padding-bottom: 30px;
}
.case-container {
  .case-header {
    height: 80px;
    border-bottom: 1px solid #979797;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 94px;
    .logo {
      img {
        height: 35px;
      }
    }
    .back {
      font-size: 16px;
      color: #444444;
      display: flex;
      align-items: center;
      img {
        width: 10px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
  .h5-case-menu {
    display: none;
    width: 100%;
    background: #ffffff;
    position: fixed;
    top: 60px;
    z-index: 99;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      border-bottom: 1px solid #979797;
      img {
        width: 8px;
        transform: rotate(-90deg);
        margin-left: 10px;
      }
      &.active {
        img {
          transform: rotate(90deg);
        }
      }
    }
    .list {
      position: fixed;
      left: 0px;
      top: 120px;
      width: 100%;
      bottom: 0px;
      /* height: calc(100vh - 120px); */
      background: rgba(0, 0, 0, 0.2);
      z-index: 99;
      a {
        height: 40px;
        line-height: 40px;
        display: flex;
        padding: 0px 20px;
        font-size: 14px;
        color: #3d3d3d;
        align-items: center;
        justify-content: space-between;
        background: #ffffff;
        img {
          width: 8px;
          height: 15px;
        }
      }
    }
  }
  .case-body {
    padding-top: 52px;
    padding-left: 94px;
    display: flex;
    // min-width: 1300px;
    .left-sidebar {
      border: 1px solid #979797;
      width: 260px;
      height: 276px;
      text-align: center;
      padding-bottom: 30px;
      &.pc-left-sidebar {
        display: block;
      }
      .title {
        font-size: 18px;
        color: #3d3d3d;
        padding-top: 20px;
      }
      > .list {
        a {
          display: flex;
          width: 100%;
          height: 32px;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #444444;
          margin-top: 20px;
          cursor: pointer;
          span {
            display: block;
            width: 180px;
          }
          img {
            height: 14px;
          }
        }
      }
    }
    .case-main {
      /* width: 1035px; */
      width: 756px;
      margin-left: 77px;
      padding-bottom: 100px;
    }
  }
}

@media screen and (max-width: 1300px) {
  .case-container {
    .case-body {
      .case-main {
        width: 1035px;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .case-container {
    position: relative;
    .case-header {
      width: 100%;
      padding: 0px 30px;
      position: fixed;
      left: 0px;
      top: 0px;
      z-index: 99;
      background: #ffffff;
      .logo {
        img {
          width: 120px;
          height: auto;
        }
      }
    }
    .h5-case-menu {
      display: block;
    }
    .case-body {
      min-width: 100%;
      padding-left: 0px;
      padding-top: 150px;
      .left-sidebar {
        width: 100%;
        height: 100%;
        position: absolute;
        background: #ffffff;
        z-index: 10;
        border: none;
        top: 60px;
        border-top: 1px solid #979797;
        &.pc-left-sidebar {
          display: none;
        }
        .title {
          margin-top: 0px;
        }
        > .list {
          a {
            height: 40px;
          }
        }
      }
      .case-main {
        width: 100%;
        margin-left: 0px;
        /* padding-left: 40px; */
        padding: 0px 20px;
      }
    }
  }
}
</style>