import axios from "axios";
import { Message, Loading } from "element-ui";
import store from "@/store";
const qs = require("qs");
import { getToken, removeToken } from "@/utils/auth";
// const isPro = process.env.VUE_APP_PRO === "true";

let loading;

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
});

// request interceptor
service.interceptors.request.use(
  config => {
    // 请求参数格式
    const is_put_post = config.method === "put" || config.method === "post";
    const is_json = config.headers["Content-Type"] === "application/json";
    if (is_put_post && is_json) {
      config.data = JSON.stringify(config.data);
    }
    if (is_put_post && !is_json) {
      config.data = qs.stringify(config.data, { arrayFormat: "repeat" });
    }
    // config.headers["Content-Type"] === "application/json";
    if (!config.isLoading) {
      loading = Loading.service({
        fullscreen: true,
        text: "正在加载，请稍候！",
        spinner: "el-icon-loading",
        background: "rgba(0,0,0,0.7)"
      });
    }
    // console.log(store,getToken())
    // 用来判断登录有没有token
    if (store.getters.token && config.isToken) {
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  error => {
    if (loading) loading.close();
    // Message({
    //   message: "数据量过大接口已超时",
    //   type: "error",
    //   duration: 3 * 1000
    // });
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    if (loading) loading.close();
    const res = response.data;
    if (res.code == 401) {
      Message({
        message: "请先登录",
        type: "warning",
        duration: 3 * 1000
      });
      store.dispatch("user/logout");
      // removeToken();
    } else {
      if (res.code != "200" && !response.config.isLoading) {
        Message({
          message: res.msg,
          type: "error",
          duration: 3 * 1000
        });
      } else {
        return res;
      }
    }
  },
  error => {
    if (loading) loading.close();
    console.log(error);
  }
);

export default service;
