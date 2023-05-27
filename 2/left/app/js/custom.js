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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_avifWebpBackground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/avifWebpBackground */ \"./app/js/component/avifWebpBackground.js\");\n/* harmony import */ var _component_js_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/js_slide */ \"./app/js/component/js_slide.js\");\n/* harmony import */ var _config_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/API */ \"./app/js/config/API.js\");\n\n\n\n\n(function () {\n  (0,_component_avifWebpBackground__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_component_js_slide__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_config_API__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  document.body.addEventListener('click', function () {\n    window.open('https://www.google.com/search?q=Left banner');\n  });\n})();\n\n//# sourceURL=webpack://myproject/./app/js/_init.js?");

/***/ }),

/***/ "./app/js/common/createElement.js":
/*!****************************************!*\
  !*** ./app/js/common/createElement.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction createElement() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref$tag = _ref.tag,\n      tag = _ref$tag === void 0 ? 'div' : _ref$tag,\n      _ref$classList = _ref.classList,\n      classList = _ref$classList === void 0 ? null : _ref$classList,\n      _ref$attrs = _ref.attrs,\n      attrs = _ref$attrs === void 0 ? null : _ref$attrs,\n      _ref$text = _ref.text,\n      text = _ref$text === void 0 ? null : _ref$text;\n\n  var element = document.createElement(tag);\n\n  if (classList !== null && classList !== void 0 && classList.length) {\n    if (Array.isArray(classList)) {\n      var _element$classList;\n\n      (_element$classList = element.classList).add.apply(_element$classList, _toConsumableArray(classList));\n    } else {\n      element.classList.add(classList);\n    }\n  }\n\n  if (attrs && _typeof(attrs) === 'object') {\n    Object.keys(attrs).forEach(function (attr) {\n      element.setAttribute(attr, attrs[attr]);\n    });\n  }\n\n  if (text) {\n    element.innerText = text;\n  }\n\n  return element;\n}\n\n//# sourceURL=webpack://myproject/./app/js/common/createElement.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EVENT_CHANGE_SLIDE\": () => (/* binding */ EVENT_CHANGE_SLIDE),\n/* harmony export */   \"EVENT_CHANGE_SLIDE_KEY\": () => (/* binding */ EVENT_CHANGE_SLIDE_KEY),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/createElement */ \"./app/js/common/createElement.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar EVENT_CHANGE_SLIDE = 'custom:wbf_changeSlide';\nvar EVENT_CHANGE_SLIDE_KEY = 'slideIndex';\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var ACTIVE_STATE = 'active';\n  var $slides = document.querySelectorAll('.js_slide');\n  var $togglers = document.querySelectorAll('[data-dir]');\n  var $dots = document.querySelector('.js_sliderDots');\n  var currentSlideIndex = 0;\n  $togglers.forEach(function ($toggler) {\n    $toggler.addEventListener('click', onArrow);\n  });\n\n  function onArrow(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var $toggler = this;\n    $toggler.setAttribute('disabled', true);\n    var direction = $toggler.getAttribute('data-dir');\n    var index = currentSlideIndex;\n\n    if (direction === 'next') {\n      index++;\n    } else {\n      index--;\n    }\n\n    if (index >= $slides.length) {\n      index = 0;\n    }\n\n    if (index < 0) {\n      index = $slides.length - 1;\n    }\n\n    changeSlide(index, direction);\n    setTimeout(function () {\n      $toggler.removeAttribute('disabled');\n    }, 500);\n  }\n\n  function changeSlide(index, direction) {\n    var $currentSlide = $slides[currentSlideIndex];\n    var $nextSlide = $slides[index];\n    var dir = direction || (index >= currentSlideIndex ? 'next' : 'prev');\n    $slides.forEach(function ($slide) {\n      return $slide.classList.remove('animHide-next', 'animShow-next', 'animShow-prev', 'animHide-prev');\n    });\n    $currentSlide.classList.add('animHide-' + dir);\n    $nextSlide.classList.add('animShow-' + dir);\n    currentSlideIndex = index;\n    triggerChangeEvent(currentSlideIndex);\n    if (!$dots) return;\n    $dots.forEach(function ($dot, i) {\n      $dot.classList.remove(ACTIVE_STATE);\n      if (i === index) $dot.classList.add(ACTIVE_STATE);\n    });\n  }\n\n  function triggerChangeEvent(index) {\n    var customEvent = new CustomEvent(EVENT_CHANGE_SLIDE, {\n      detail: _defineProperty({}, EVENT_CHANGE_SLIDE_KEY, index)\n    });\n    document.dispatchEvent(customEvent);\n  }\n\n  (function dots() {\n    if (!$dots) return;\n\n    var _loop = function _loop(i) {\n      var $dot = (0,_common_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_objectSpread(_objectSpread({\n        tag: 'button'\n      }, i === 0 ? {\n        classList: ACTIVE_STATE\n      } : {}), {}, {\n        attr: {\n          type: 'button'\n        },\n        text: i\n      }));\n      $dots.appendChild($dot);\n      $dot.addEventListener('click', function (e) {\n        e.stopPropagation();\n        changeSlide(i);\n      });\n    };\n\n    for (var i = 0; i < $slides.length; i++) {\n      _loop(i);\n    }\n\n    $dots = $dots.querySelectorAll('button');\n  })();\n\n  setTimeout(function () {\n    var target = 'data-anim-immediately';\n    var $targetImmediatelyAnimation = document.querySelector(\"[\".concat(target, \"]\"));\n    if (!$targetImmediatelyAnimation) return;\n    $targetImmediatelyAnimation.removeAttribute(target);\n  }, 500);\n}\n\n//# sourceURL=webpack://myproject/./app/js/component/js_slide.js?");

/***/ }),

/***/ "./app/js/config/API.js":
/*!******************************!*\
  !*** ./app/js/config/API.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initPostMessages)\n/* harmony export */ });\n/* harmony import */ var _component_js_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/js_slide */ \"./app/js/component/js_slide.js\");\n\nfunction initPostMessages() {\n  document.addEventListener(_component_js_slide__WEBPACK_IMPORTED_MODULE_0__.EVENT_CHANGE_SLIDE, function (_ref) {\n    var detail = _ref.detail;\n    var message = {\n      WBFSH_slideIndex: detail[_component_js_slide__WEBPACK_IMPORTED_MODULE_0__.EVENT_CHANGE_SLIDE_KEY]\n    };\n    parent.window.postMessage(JSON.stringify(message), '*');\n  });\n}\n\n//# sourceURL=webpack://myproject/./app/js/config/API.js?");

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
