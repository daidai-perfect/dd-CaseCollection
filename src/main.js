import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as echarts from "echarts";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.css';
import store from './store'
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");