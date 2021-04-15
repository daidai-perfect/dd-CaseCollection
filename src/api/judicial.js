import request from "@/utils/request";

// 司法机构入驻
export function addJudiciary(data) {
  return request({
    url: "/user/apply",
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    isToken:true,
    data
  });
}
