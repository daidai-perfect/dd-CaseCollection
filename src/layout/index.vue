<template>
  <div class="app-cont">
    <el-container style="height:100%">
      <el-header class="fixed-head">
        <nav-bar />
      </el-header>
      <el-container>
        <app-main />
      </el-container>
    </el-container>
    <!-- <div class="main-container">
      <div class="fixed-head">
        <nav-bar />
      </div>
      <app-main />
    </div>-->
  </div>
</template>

<script>
document.title = "链审科技";
// import { NavBar, AppMian } from "./components";
// import { Navbar, AppMain} from './components'
import NavBar from "./components/Navbar";
import AppMain from "./components/AppMain";
export default {
  components: {
    NavBar,
    AppMain
  }
};
</script>

<style lang="scss" scoped>
.el-scrollbar {
  > .el-scrollbar__bar {
    opacity: 1 !important;
  }
}
.main-container {
  min-height: 100%;
  position: relative;
}
.app-cont {
  height: 100%;
  width: 100%;
  /* position: absolute;
  height: 100%;
  width: 100%; */
  /* background: url("../assets/back.jpg") no-repeat center center;
    background-size: 100% 100%;
    background-attachment:fixed; */
}
.fixed-head {
  position: fixed;
  top: 0;
  right: 0;
  height: 64px;
  width: 100%;
  transition: width 0.28s;
  padding: 0;
  margin: 0;
  z-index: 99;
  /* margin-bottom: 4px; */
}
</style>