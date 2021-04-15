import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import * as echarts from "echarts";
// import ElementUI from 'element-ui';
import {
  Pagination,
  Dialog,
  Menu,
  Submenu,
  Card,
  MenuItem,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  DatePicker,
  Tooltip,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Icon,
  Row,
  Col,
  Upload,
  Container,
  Header,
  Loading,
  Message
} from 'element-ui';
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(Card);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Select);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Tooltip);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Container);
Vue.use(Header);
Vue.use(Loading);
Vue.component(Message.name, Message)
Vue.use(Pagination);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(InputNumber);
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.css';
import store from './store'
// Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$message = Message;
// Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");