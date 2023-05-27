/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/js/_init.js":
/*!*************************!*\
  !*** ./app/js/_init.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_avifWebpBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/avifWebpBackground */ \"./app/js/component/avifWebpBackground.js\");\n/* harmony import */ var _component_js_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/js_slide */ \"./app/js/component/js_slide.js\");\n\n\n\n(function () {\n  (0,_component_avifWebpBackground__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_component_js_slide__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  document.body.addEventListener('click', function () {\n    window.open('https://www.google.com/search?q=Main banner');\n  });\n})();\n\n//# sourceURL=webpack://myproject/./app/js/_init.js?");

/***/ }),

/***/ "./app/js/component/avifWebpBackground.js":
/*!************************************************!*\
  !*** ./app/js/component/avifWebpBackground.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  function htmlClass(attr) {\n    document.documentElement.classList.add(attr);\n  }\n\n  var avif = new Image();\n  avif.src = \"data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=\";\n\n  avif.onload = function () {\n    htmlClass(\"avif\");\n  };\n\n  avif.onerror = function () {\n    checkWebp(function (isWebp) {\n      if (isWebp) {\n        htmlClass(\"webp\");\n        return;\n      }\n\n      htmlClass(\"jpng\");\n    });\n  };\n\n  function checkWebp(cbFn) {\n    var img = new Image();\n\n    img.onload = function () {\n      var result = img.width > 0 && img.height > 0;\n      cbFn(result);\n    };\n\n    img.onerror = function () {\n      cbFn(false);\n    };\n\n    img.src = \"data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==\";\n  }\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/avifWebpBackground.js?");

/***/ }),

/***/ "./app/js/component/js_slide.js":
/*!**************************************!*\
  !*** ./app/js/component/js_slide.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var ACTIVE_STATE = 'active';\n  var $slides = document.querySelectorAll('.js_slide');\n  window.addEventListener(\"message\", function (event) {\n    if (!(event !== null && event !== void 0 && event.data)) return;\n\n    try {\n      var obj = JSON.parse(event.data || {});\n      var index = obj.WBFSH_slideIndex;\n      changeSlide(index);\n    } catch (e) {\n      console.log(e);\n    }\n  }, false);\n\n  function changeSlide() {\n    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;\n    if (index < 0 || index >= $slides.length) return;\n    $slides.forEach(function ($slide) {\n      return $slide.classList.remove(ACTIVE_STATE);\n    });\n    $slides[index].classList.add(ACTIVE_STATE);\n  }\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/js_slide.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/js/_init.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=custom.js.map
