import request from "@/utils/request";

// 生成报告任务
export function createReportTask(params) {
  return request({
    url: "/transaction/createReportTask",
    method: "get",
    params
  });
}

// 查询所有报告
export function getAllReport(params) {
  return request({
    url: "/system/report/searchReport",
    method: "get",
    params
  });
}
