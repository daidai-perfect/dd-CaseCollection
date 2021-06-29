import { getProtocol, getMainHost } from "../assets/js/util";
let domain, protocol, mainUrl;

try {
  domain = getMainHost();
  protocol = getProtocol();
  mainUrl = `${protocol}://${window.location.host}`;
} catch (err) {}

export default {
  domain: domain,
  mainUrl: mainUrl,
  protocol: protocol,
  // baseUrl: '/baseapi',
  // baseUrl: "https://upapitest.bitank.com" // 测试环境
  // baseUrl: "https://api.uptest.info" // 正式环境
  // baseUrl: 'https://tronsage.abit.com'
};
