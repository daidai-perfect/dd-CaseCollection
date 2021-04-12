
import request from "@/utils/request";

// 获取报告列表
export function getReportList(params) {
  return request({
    url: "/system/report/getReportList",
    method: "get",
    params
  });
}

// 司法协助记录列表
export function getJudicialAidList(params) {
  return request({
    url: "/user/getJudicialAidList",
    method: "get",
    params
  });
}

// 身份管理列表
export function getPersonList(params) {
  return request({
    url: "/file/record/getReportList",
    method: "get",
    params
  });
}

// 用户升级
export function userUpGrade(data) {
  return request({
    url: "/user/userUpGrade",
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    data
  });
}

// 下载请求
export function downloadFile(params) {
  return request({
    url: "/commonFile/download",
    method: "get",
    params
  });
}