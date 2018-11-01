require('source-map-support/register')
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koa_cors__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nuxt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_nuxt__);







async function start() {
  const app = new __WEBPACK_IMPORTED_MODULE_0_koa___default.a();
  const host = process.env.HOST || '127.0.0.1';
  const port = process.env.PORT || 3000;
  app.on('error', function (err, ctx) {
    console.log('-------统一错误打印-------');
    console.log(err);
  });
  app.use(__WEBPACK_IMPORTED_MODULE_5__koa_cors___default()());
  app.use(__WEBPACK_IMPORTED_MODULE_2_koa_bodyparser___default()());
  app.use(__WEBPACK_IMPORTED_MODULE_1_koa_static___default()('.'));
  const router = new __WEBPACK_IMPORTED_MODULE_3_koa_router___default.a();
  router.use('', __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */].routes());
  app.use(router.routes()).use(router.allowedMethods());
  // Import and Set Nuxt.js options
  const config = __webpack_require__(10);
  config.dev = !(app.env === 'production');

  // Instantiate nuxt.js
  const nuxt = new __WEBPACK_IMPORTED_MODULE_6_nuxt__["Nuxt"](config);

  // Build in development
  if (config.dev) {
    const builder = new __WEBPACK_IMPORTED_MODULE_6_nuxt__["Builder"](nuxt);
    await builder.build();
  }

  app.use(async ctx => {
    ctx.res.statusCode = 200;
    ctx.respond = false; // Mark request as handled for Koa
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res);
    // return new Promise((resolve, reject) => {
    //   ctx.res.on('close', resolve)
    //   ctx.res.on('finish', resolve)
    //   nuxt.render(ctx.req, ctx.res, promise => {
    //     // nuxt.render passes a rejected promise into callback on error.
    //     promise.then(resolve).catch(reject)
    //   })
    // })
  });

  app.listen(port, host);
  console.log('Server listening on ' + `http://${host}:${port}`);
}

start();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(6);


const fs = __webpack_require__(7);
const router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();
// router.use('/user', user.routes(), user.allowedMethods());
try {
  router.get('/getUserMsg', async (ctx, next) => {
    // console.log(ctx);
    // console.log('----', ctx.ip)
    let data = await getMarkdown();
    // console.log(data);
    ctx.body = {
      data: data,
      status: 200
    };
  });
} catch (error) {
  console.log(error);
}
async function getMarkdown() {
  return new Promise((resolve, reject) => {
    fs.readFile('markdown/test.md', 'utf8', function (err, data) {
      if (err) throw err;
      resolve(data);
    });
  });
}
/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const router = __webpack_require__(0)();
router.get('/getUserMsg', (ctx, next) => {
  console.log(ctx);
  console.log('----', ctx.ip);
  // ctx.body = JSON.stringify({"status": 200, "res": "success","data":{
  //   'key':'liyu'
  // }})
  ctx.body = {
    data: '李宇',
    message: 200
  };
  return next();
});
/* unused harmony default export */ var _unused_webpack_default_export = (router);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const pkg = __webpack_require__(11);

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0, user-scalable=0' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css'
    }],
    noscript: [{ innerHTML: 'This website requires JavaScript.' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#E16B8C' },

  /*
  ** Global CSS
  */
  css: [{
    src: '~assets/css/global.less',
    lang: 'less'
  }],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~/plugins/vueSwiper',
    ssr: false
  }, {
    src: '~/plugins/jparticles',
    ssr: false
  }],
  vendor: ['marked', 'highlight.js'],
  /*
  ** Nuxt.js modules
  */
  modules: [
  // Doc: https://github.com/nuxt-community/axios-module#usage
  '@nuxtjs/axios'],
  /*
  ** Axios module configuration
  */
  axios: {
    // proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    // '/api/': 'http://127.0.0.1:4000',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
    postcss: [__webpack_require__(12)({
      remUnit: 16 // 转换基本单位
    })]
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {"name":"hero-x","version":"1.0.0","description":"My Nuxt.js project","author":"liyushilezhi","private":true,"scripts":{"dev":"backpack","start":"nuxt start","build":"nuxt build","generate":"nuxt generate"},"dependencies":{"@koa/cors":"^2.2.2","@nuxtjs/axios":"^5.0.0","cross-env":"^5.2.0","highlight.js":"^9.13.1","jparticles":"^2.0.1","koa":"^2.6.1","koa-bodyparser":"^4.2.1","koa-router":"^7.4.0","koa-static":"^5.0.0","less":"^3.8.1","less-loader":"^4.1.0","marked":"^0.5.1","mongoose":"^5.3.7","nuxt":"^2.0.0","postcss-px2rem":"^0.3.0","vue-awesome-swiper":"^3.1.3"},"devDependencies":{"nodemon":"^1.11.0","backpack-core":"^0.7.0"}}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("postcss-px2rem");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map