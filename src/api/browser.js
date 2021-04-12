import request from "@/utils/request";

// 根据浏览器key获取列表
export function getBrowserList(data) {
  return request({
    url: "/transaction/selectByKeyword",
    method: "post",
    data
  });
}
// 根据浏览器key获取总览
export function getOverView(data) {
  return request({
    url: "/transaction/getBalance",
    method: "post",
    data
  });
}
// 根据列表当前行哈希查询交易详情
export function getDetailByHash(data) {
  return request({
    url: "/transaction/selectByHash",
    method: "post",
    data
  });
}