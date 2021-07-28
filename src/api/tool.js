import request from "@/utils/request";

// 通用上传请求
export function uploadImg(data) {
  return request({
    url: "/commonFile/upload",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data
  });
}

// 微信支付请求
export function paymentWX(data) {
  return request({
    url: "/pay/wx",
    method: "post",
    isToken:true,
    headers: { "Content-Type": "application/json" },
    data
  });
}
// 判断支付情况
export function whetherPay(params) {
  return request({
    url: "/pay/queryPayStatus",
    method: "get",
    isToken:true,
    isLoading:true,
    params
  });
}
// 获取短信验证码
export function sendSms(data) {
  return request({
    url: "/webLogin/sendSms",
    method: "post",
    headers: { "Content-Type": "application/json" },
    data
  });
}