require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/util.js":
/*!***************************!*\
  !*** ./assets/js/util.js ***!
  \***************************/
/*! exports provided: hasOwn, getProtocol, getMainHost, autoprefixer, timeFormat, formatNumW, formatNumM, isPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProtocol", function() { return getProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainHost", function() { return getMainHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoprefixer", function() { return autoprefixer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumW", function() { return formatNumW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumM", function() { return formatNumM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPC", function() { return isPC; });
const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function getProtocol() {
  const p = window.location.protocol;
  const h = p.split(":")[0];
  return h;
}
function getMainHost() {
  let key = `mh_${Math.random()}`;
  let keyR = new RegExp(`(^|;)\\s*${key}=12345`);
  let expiredTime = new Date(0);
  let domain = document.domain;
  let domainList = domain.split(".");
  let urlItems = [];
  urlItems.unshift(domainList.pop());

  while (domainList.length) {
    urlItems.unshift(domainList.pop());
    let mainHost = urlItems.join(".");
    let cookie = `${key}=${12345};domain=.${mainHost}`;
    document.cookie = cookie;

    if (keyR.test(document.cookie)) {
      document.cookie = `${cookie};expires=${expiredTime}`;
      return mainHost;
    }
  }
}
const autoprefixer = function (style) {
  if (typeof style !== "object") return style;
  const rules = ["transform", "transition", "animation"];
  const prefixes = ["ms-", "webkit-"];
  rules.forEach(rule => {
    const value = style[rule];

    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};
const timeFormat = (time, type) => {
  let date = getTimeZone(time);
  if (!type) return getYMD(date) + " " + getHMS(date);

  switch (type) {
    case "HMS":
      return getHMS(date);

    case "YMD":
      return getYMD(date);
  }
};

function singleFormat(str) {
  return str.toString().length === 1 ? "0" + str : str;
}

function getYMD(time) {
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  return year + "-" + singleFormat(month) + "-" + singleFormat(date);
}

function getHMS(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  return singleFormat(hours) + ":" + singleFormat(minutes) + ":" + singleFormat(seconds);
}

function getTimeZone(time) {
  let GTM_8 = 480; // -480

  let date = new Date(time);
  let subMin = date.getTimezoneOffset() + GTM_8;
  date.setMinutes(date.getMinutes() + subMin);
  return date;
} // 转化为【万】单位(主要用在中文环境下)


const formatNumW = num => {
  if (Number(num) > 10000) {
    return fixD(Number(num) / 10000, 2) + "万";
  }

  return num;
}; // 转化为【百万】单位(主要用在英文环境下)

const formatNumM = num => {
  if (Number(num) > 1000000) {
    return fixD(Number(num) / 1000000, 2) + "M";
  }

  return num;
};
const isPC = () => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // 移动端操作
    return false;
  } else {
    // PC端操作
    return true;
  }
};

/***/ }),

/***/ "./config/api.config.js":
/*!******************************!*\
  !*** ./config/api.config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/js/util */ "./assets/js/util.js");

let domain, protocol, mainUrl;

try {
  domain = Object(_assets_js_util__WEBPACK_IMPORTED_MODULE_0__["getMainHost"])();
  protocol = Object(_assets_js_util__WEBPACK_IMPORTED_MODULE_0__["getProtocol"])();
  mainUrl = `${protocol}://${window.location.host}`;
} catch (err) {}

/* harmony default export */ __webpack_exports__["default"] = ({
  domain: domain,
  mainUrl: mainUrl,
  protocol: protocol // baseUrl: '/baseapi',
  // baseUrl: "https://upapitest.bitank.com" // 测试环境
  // baseUrl: "https://api.uptest.info" // 正式环境
  // baseUrl: 'https://tronsage.abit.com'

});

/***/ }),

/***/ "./nuxt.config.js":
/*!************************!*\
  !*** ./nuxt.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  mode: "universal",
  router: {
    middleware: "i18n"
  },
  telemetry: false,

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [{
      charset: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    }, {
      hid: "description",
      name: "description",
      content: process.env.npm_package_description || ""
    }],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/bitbug_favicon.ico"
    }, {
      rel: "stylesheet",
      href: "/css/animate.css"
    }] // script: [
    //   {
    //     src: "/js/iconfont.js"
    //   },
    //   {
    //     src: "/js/tronweb.js"
    //   }
    // ]

  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },

  /*
   ** Global CSS
   */
  css: ["~assets/css/main.scss", 'swiper/dist/css/swiper.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/i18n.js", {
    src: '~plugins/swiper.js',
    ssr: false
  }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Nuxt.js modules
   */
  // modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  // axios: {
  //   proxy: true
  // },
  // proxy: {
  //   "/baseapi": {
  //     target: "https://tronsage.bitank.com",
  //     pathRewrite: {
  //       "^/baseapi": "/"
  //     }
  //   }
  // },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}

  }
};

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Koa = __webpack_require__(/*! koa */ "koa"); // const consola = require('consola')


const {
  Nuxt,
  Builder
} = __webpack_require__(/*! nuxt */ "nuxt");

const ApiConfig = __webpack_require__(/*! ../config/api.config.js */ "./config/api.config.js");

const app = new Koa(); // Import and Set Nuxt.js options

const config = __webpack_require__(/*! ../nuxt.config.js */ "./nuxt.config.js");

config.dev = app.env !== 'production';

async function start() {
  // Instantiate nuxt.js
  // const host = process.env.HOST || '0.0.0.0'
  const host = process.env.HOST || '192.168.1.60';
  const port = process.env.PORT || 3001;
  const nuxt = new Nuxt(config); // const {
  // } = nuxt.options.server

  await nuxt.ready(); // Build in development

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  app.use(async (ctx, next) => {
    ctx.req.locale = ctx.cookies.get("lang");

    if (!ctx.req.locale) {
      let acceptLanguage = ctx.req && ctx.req.headers["accept-language"];

      if (acceptLanguage) {
        if (~acceptLanguage.indexOf("zh") > -1) {
          acceptLanguage = "zh";
        }

        if (~acceptLanguage.indexOf("en")) {
          acceptLanguage = "en";
        } // if (~acceptLanguage.indexOf('CN')) {
        //   acceptLanguage = 'zh-cn'
        // }


        if (~["en", "zh"].indexOf(acceptLanguage)) {
          ctx.cookies.set("lang", acceptLanguage, {
            domain: ApiConfig.domain,
            maxAge: 3600 * 24 * 10,
            httpOnly: false
          });
          ctx.req.locale = acceptLanguage;
        }
      }
    } else {
      if (~ctx.req.locale.indexOf("en")) {
        ctx.req.locale = "en";
      }
    } // ctx.req.locale = "en";


    await next();
  });
  app.use(ctx => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling

    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash

    nuxt.render(ctx.req, ctx.res);
  });
  app.listen(port, host); // consola.ready({
  //   message: `Server listening on http://${host}:${port}`,
  //   badge: true
  // })

  console.log(`Server listening on http://${host}:${port}`);
}

start();

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "nuxt":
/*!***********************!*\
  !*** external "nuxt" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ })

/******/ });
//# sourceMappingURL=main.map