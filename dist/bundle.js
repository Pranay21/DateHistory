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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createForm.js":
/*!***************************!*\
  !*** ./src/createForm.js ***!
  \***************************/
/*! exports provided: createForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createForm\", function() { return createForm; });\nconst createForm = (config = { id: \"\", class: \"\" }) => {\r\n  // create your form and sub-elements\r\n  const form = document.createElement(\"form\");\r\n\r\n  const button = document.createElement(\"button\");\r\n\r\n  // add attributes to the related elements\r\n  form.id = config.id;\r\n\r\n  // ie github-form-input if config.id === 'github-form'\r\n\r\n  button.id = form.id + \"-button\";\r\n  button.innerText = \"Click Me!!\";\r\n\r\n  // add your sub-elements to the parent\r\n\r\n  form.appendChild(button);\r\n\r\n  //Tell where in the document you'd like to add the form\r\n  document.body.appendChild(form);\r\n\r\n  // return the form in case the consumer would like to do something else:\r\n  // ie: add an event listener\r\n  return form;\r\n};\r\n\r\n// export this function as the main export of this file\r\n\n\n//# sourceURL=webpack:///./src/createForm.js?");

/***/ }),

/***/ "./src/history.js":
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/*! exports provided: fetchDayEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchDayEvent\", function() { return fetchDayEvent; });\nconst fetchDayEvent = () => {\r\n  const endpoint = `https://sheltered-bayou-48245.herokuapp.com`;\r\n\r\n  return fetch(endpoint)\r\n    .then(res => res.json())\r\n    .then(data => {\r\n      return data;\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./src/history.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ \"./src/history.js\");\n/* harmony import */ var _createForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createForm */ \"./src/createForm.js\");\n\r\n\r\n\r\nconst form = Object(_createForm__WEBPACK_IMPORTED_MODULE_1__[\"createForm\"])({ id: \"date-form\" });\r\n\r\nform.addEventListener(\"submit\", e => {\r\n  e.preventDefault();\r\n\r\n  Object(_history__WEBPACK_IMPORTED_MODULE_0__[\"fetchDayEvent\"])()\r\n    .then(repoObjs => {\r\n      return repoObjs.data.Births.map(repoItem => repoItem.text);\r\n      const answer = repoObjs.data.Births.map(repoItem => repoItem.text);\r\n      const para = document.createElement(id);\r\n      para.innerText = answer;\r\n      document.body.appendChild(para);\r\n    })\r\n    .then(console.log);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });