const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// var width = 750;
// var height = 1334;
// var tx;
// setTimeout(() => {
//   tx = window.navigator;
// }, 1000);
// console.log(tx);
// if (/(iPhone|iPad|iPod|iOS)/i.test(tx.userAgent)) {
//   //判断iPhone|iPad|iPod|iOS
//   //
// } else if (/(Android)/i.test(tx.userAgent)) {
//   //判断Android
//   //
// } else {
//   //pc
//   width = 1920;
//   height = 1080;
// }
// function IsPC(){
//   var userAgentInfo = navigator.userAgent;
//   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
//   var flag = true;
//   for (var v = 0; v < Agents.length; v++) {
//       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
//   }
//   console.log(flag);
//   return flag;
// }
// IsPC();
// setTimeout(()=>{
//   console.log(navigator);
// },3000);
module.exports = {
  productionSourceMap:false,
  css: {
    extract: false, //false表示开发环境,true表示生成环境
    sourceMap: false,
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px", // 需要转换的单位，默认为"px"
            viewportWidth: 1920, // 视窗的宽度，对应pc设计稿的宽度，一般是1920
            viewportHeight: 1080, // 视窗的高度，对应的是我们设计稿的高度,我做的是大屏监控,高度就是1080
            unitPrecision: 3, // 单位转换后保留的精度
            propList: [
              // 能转化为vw的属性列表
              "*"
            ],
            viewportUnit: "vw", // 希望使用的视口单位
            fontViewportUnit: "vw", // 字体使用的视口单位
            selectorBlackList: [
              ".img-box",
              ".services-list",
              ".value-list",
              ".block-1",
              ".el-submenu__title",
              ".el-select-dropdown__item",
              ".el-menu-item",
              ".case-container",
              ".paragraph",
              ".our-services",
              ".our-value",
              ".team-background",
              ".el-radio__inner",
              ".el-upload-list__item",
              ".el-table",
              ".el-message__content",
              ".el-date-picker",
              ".el-input--small",
              ".el-date-table",
              ".el-time-panel",
              ".el-time-spinner__item",
              ".el-picker-panel__footer"
            ], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
            minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
            mediaQuery: false, // 媒体查询里的单位是否需要转换单位
            replace: true // 是否直接更换属性值，而不添加备用属性
            // exclude:[/^node_modules$/]
            // exclude:/(\/|\\)(node_modules)(\/|\\)/
          })
        ]
      }
    }
  },
  lintOnSave: false,
  publicPath: "./",
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "链审科技"
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};
