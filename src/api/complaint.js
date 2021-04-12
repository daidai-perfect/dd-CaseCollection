import request from "@/utils/request";

// 新增举报诈骗
export function addComplaint(data) {
  return request({
    url: "/reportScam",
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    data
  });
}
