import { Message } from "element-ui";
/**
 * 深拷贝
 * @param {*} object
 */
export function deepClone(object) {
  if (!object && typeof object !== "object") {
    throw new Error("error arguments", "shallowClone");
  }

  const targetObj = object.constructor === Array ? [] : {};
  Object.keys(object).forEach(keys => {
    if (object[keys] && typeof object[keys] === "object") {
      targetObj[keys] = object[keys].constructor === Array ? [] : {};
      targetObj[keys] = deepClone(object[keys]);
    } else {
      targetObj[keys] = object[keys];
    }
  });
  return targetObj;
}

// 转换时间
export function getDate(date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
}
// 七天后
export function GetDateStr(dates, AddDayCount) {
  dates = new Date(dates);
  dates.setDate(dates.getDate() + AddDayCount); //获取AddDayCount天后的日期
  let y = dates.getFullYear();
  let m = dates.getMonth() + 1; //获取当前月份的日期
  m = m < 10 ? "0" + m : m;
  let d = dates.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
}

// 字符串去重get
export function removeRepeatStr(str) {
  let newStr = "";
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (newStr.indexOf(str[i]) == -1) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}
// 按其中一个属性去排序
export function compare(property) {
  return function(a, b) {
    let value1 = a[property];
    let value2 = b[property];
    return value1 - value2;
  };
}

// 获取指定周开始时间和结束时间
export function getWeekTime(weeks) {
  if (!weeks) return false;
  let temp = weeks.replace("第", "-").replace("周", "");
  let tempTimeArr = temp.split("-");
  return calcu(tempTimeArr[0].trim(), tempTimeArr[1].trim());
}

// 获取年 获取月
export function getTimeByType(date, type) {
  if (!date) {
    return "";
  }
  if (type == "year") {
    let y = date.getFullYear();
    return y;
  } else if (type == "month") {
    let m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    return m;
  } else {
    return "";
  }
}
// 两位小数
export function changeTwoDecimal_f(x) {
  let f_x = parseFloat(x);
  if (isNaN(f_x)) {
    console.log("function:changeTwoDecimal->parameter error");
    return false;
  }
  f_x = Math.round(x * 100) / 100;
  let s_x = f_x.toString();
  let pos_decimal = s_x.indexOf(".");
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += ".";
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += "0";
  }
  return s_x;
}
// 比较函数
export function sortArr(x, y) {
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
}
// 时间戳转换时间
export function timestampToTime(str) {
  var n = parseInt(str) * 1000;
  var D = new Date(n);
  var year = D.getFullYear(); //四位数年份
  var month = D.getMonth() + 1; //月份(0-11),0为一月份
  month = month < 10 ? "0" + month : month;
  var day = D.getDate(); //月的某一天(1-31)
  day = day < 10 ? "0" + day : day;
  var hours = D.getHours(); //小时(0-23)
  hours = hours < 10 ? "0" + hours : hours;
  var minutes = D.getMinutes(); //分钟(0-59)
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var now_time = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
  return now_time;
}

// 复制
export function copyShaneUrl(data) {
  let url = data;
  let oInput = document.createElement("input");
  oInput.value = url;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象;
  document.execCommand("Copy"); // 执行浏览器复制命令
  oInput.remove()
  Message({
    message: "复制成功",
    type: "success"
  });
}
