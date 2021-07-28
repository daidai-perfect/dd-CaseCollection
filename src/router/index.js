import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/browser",
    hidden: true,
    children: [
      {
        path: "aboutUs",
        name: "aboutUs",
        component: () => import("@/views/aboutUs/index"),
        meta: { title: "关于我们" }
      },
      {
        path: "industryCase",
        name: "industryCase",
        component: () => import("@/views/aboutUs/model/industryCase"),
        meta: { title: "行业案例" }
      },
      {
        path: "caseDetail",
        name: "caseDetail",
        component: () => import("@/views/aboutUs/caseDetail"),
        meta: { title: "案例3" }
      },
      {
        path: "feature",
        name: "feature",
        component: () => import("@/views/aboutUs/model/feature"),
        meta: { title: "案件特点" }
      },
      {
        path: "service",
        name: "service",
        component: () => import("@/views/aboutUs/model/service"),
        meta: { title: "链审服务" }
      },
      {
        path: "value",
        name: "value",
        component: () => import("@/views/aboutUs/model/value"),
        meta: { title: "链审价值" }
      },
      {
        path: "honor",
        name: "honor",
        component: () => import("@/views/aboutUs/model/honor"),
        meta: { title: "荣誉资质" }
      },
      {
        path: "team",
        name: "team",
        component: () => import("@/views/aboutUs/model/team"),
        meta: { title: "团队背景" }
      },
      {
        path: "/browser",
        name: "browser",
        component: () => import("@/views/browser/index"),
        meta: { title: "浏览器" }
      },
      {
        path: "/browser/transactionRecoard",
        name: "transactionRecoard",
        component: () => import("@/views/browser/templates/transactionRecord"),
        meta: { title: "浏览器查询记录" }
      },
      {
        path: "/browser/transactionDetail",
        name: "transactionDetail",
        component: () => import("@/views/browser/templates/transactionDetail"),
        meta: { title: "浏览器交易详情" }
      },
      // 电信诈骗
      {
        path: "/fraud",
        name: "fraud",
        // redirect: "/fraud/getMoneyAddress",
        component: () => import("@/views/tracking/fraud/index"),
        meta: { title: "电信诈骗" }
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../../src/components/register/index-new.vue"),
        meta: { title: "浏览器测试" }
      },
      {
        path: "/register",
        name: "register",
        component: () => import("../../src/components/register/register-new.vue"),
        meta: { title: "浏览器测试" }
      },
      {
        path: "/fraud/notGetMoneyAddress",
        name: "notGetMoneyAddress",
        component: () => import("@/views/tracking/fraud/templates/notGetInfo"),
        meta: { title: "未掌握诈骗人地址" }
      },
      // 数字货币-准备材料
      {
        path: "/fraud/preparationFile",
        name: "preparationFile",
        component: () =>
          import("@/views/tracking/fraud/templates/preparationFile"),
        meta: { title: "数字货币-准备材料" }
      },
      // 资金监控盘-准备材料
      {
        path: "/fraud/preparationFileMonitor",
        name: "preparationFileMonitor",
        component: () =>
          import("@/views/tracking/fraud/templates/preparationFileMonitor"),
        meta: { title: "资金监控盘-准备材料" }
      },
      // 数字货币-信息提交页面
      {
        path: "/fraud/submission",
        name: "submission",
        component: () => import("@/views/tracking/fraud/templates/submission"),
        meta: { title: "数字货币-信息提交页面" }
      },
      {
        path: "/fraud/submissionMoney",
        name: "submissionMoney",
        component: () => import("@/views/tracking/fraud/templates/submissionMoney"),
        meta: { title: "资金盘监控-信息提交页面" }
      },
      {
        path: "/fraud/getMoneyAddress",
        name: "getMoneyAddress",
        component: () => import("@/views/tracking/fraud/templates/getInfo"),
        meta: { title: "掌握诈骗人地址" }
      },
      // 资产追踪
      {
        path: "/digital",
        name: "digital",
        component: () => import("@/views/tracking/digital/index"),
        meta: { title: "资产追踪" }
      },
      // 举报骗局
      {
        path: "/complaint",
        name: "complaint",
        component: () => import("@/views/complaint/index"),
        meta: { title: "举报骗局" }
      },
      // 司法入口
      {
        path: "/judicial",
        name: "judicial",
        component: () => import("@/views/judicial/index"),
        meta: { title: "司法入口" }
      },
      {
        path: "/reportDownload",
        name: "reportDownload",
        component: () => import("@/views/judicial/templates/reportDownload"),
        meta: { title: "报告下载" }
      },
      // 生成报告
      {
        path: "/report",
        name: "report",
        component: () => import("@/views/report/index"),
        meta: { title: "生成报告" }
      },
      // 个人中心
      {
        path: "/personal",
        name: "personal",
        redirect: "/personal/report",
        component: () => import("@/views/personal/index"),
        meta: { title: "个人中心" },
        children: [
          {
            path: "/personal/report",
            name: "personalReport",
            component: () => import("@/views/personal/templates/report"),
            meta: { title: "个人中心-报告管理" }
          },
          {
            path: "/personal/identity",
            name: "personalIdentity",
            component: () => import("@/views/personal/templates/identity"),
            meta: { title: "个人中心-身份管理" }
          },
          {
            path: "/personal/record",
            name: "personalRecord",
            component: () => import("@/views/personal/templates/record"),
            meta: { title: "个人中心-司法协助记录" }
          },
          {
            path: "/personal/upgrade",
            name: "personalUpgrade",
            component: () => import("@/views/personal/templates/upgrade"),
            meta: { title: "个人中心-身份升级" }
          }
        ]
      },
      // 账单支付
      {
        path: "/payment",
        name: "payment",
        component: () => import("@/views/personal/templates/payment"),
        meta: { title: "账单支付" }
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "hash",
  routes
});
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};
export default router;