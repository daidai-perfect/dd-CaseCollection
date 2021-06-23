
import request from "@/utils/request";

// 报告-文件夹分类
export function reportCategory(data) {
  return request({
    url: "/system/report/category",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    isToken:true,
    data
  });
}

// 获取所有文件夹分类
export function getAllCategory(params) {
  return request({
    url: "/file/category/getAllCategory",
    method: "get",
    isToken:true,
    params
  });
}

// 新增所有文件夹
export function categoryAdd(data) {
  return request({
    url: "/file/category/add",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    isToken:true,
    data
  });
}

// 获取报告列表
export function getReportList(params) {
  return request({
    url: "/system/report/getReportList",
    method: "get",
    isToken:true,
    params
  });
}

// 司法协助记录列表
export function getJudicialAidList1(params) {
  return request({
    url: "/user/getJudicialAidList",
    method: "get",
    isToken:true,
    params
  });
}

// 司法协助记录列表
export function getJudicialAidList(params) {
  return request({
    url: "/file/category/getJudicialAidList",
    method: "get",
    isToken:true,
    params
  });
}


// 身份管理列表
export function getPersonList(params) {
  return request({
    url: "/file/record/getReportList",
    method: "get",
    isToken:true,
    params
  });
}

// 用户升级
export function userUpGrade(data) {
  return request({
    url: "/user/userUpGrade",
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    isToken:true,
    data
  });
}

// 下载请求
export function downloadFile(params) {
  return request({
    url: "/commonFile/download",
    method: "get",
    isToken:true,
    params
  });
}