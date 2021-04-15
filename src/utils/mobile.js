export function isMobile() {
  // 判断苹果、安卓、pc
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //判断iPhone|iPad|iPod|iOS
    return true;
  } else if (/(Android)/i.test(navigator.userAgent)) {
    //判断Android
    return true;
  } else {
    //pc
    return false;
  }
}
