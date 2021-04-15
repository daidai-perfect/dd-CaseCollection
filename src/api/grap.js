import request from "@/utils/request";

// 根据地址渲染关系图
export function getGrapByAddress(data) {
  return request({
    url: "/transaction/neo4jfindAllByAddress",
    method: "post",
    data
  });
}