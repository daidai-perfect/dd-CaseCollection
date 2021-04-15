import request from "@/utils/request";

// 登录
export function login(data) {
  return request({
    url: "/webLogin/login",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data
  });
}
// 手机号登录
export function loginPhone(data) {
  return request({
    url: "/webLogin/loginByMobileSms",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data
  });
}
// 注册
export function addUser(data) {
  return request({
    url: "/webLogin/register",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data
  });
}
// 获取用户个人信息
export function getInfo(params) {
  return request({
    url: '/user/getUserByToken',
    method: "get",
    isToken:true,
    params
  });
}
// 生成短信验证码
export function getCode(params) {
  return request({
    url: "/captchaImage",
    method: "get",
    params
  });
}
