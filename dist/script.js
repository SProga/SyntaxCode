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

/***/ "./src/js/modules/Features.js":
/*!************************************!*\
  !*** ./src/js/modules/Features.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Features {\n\tconstructor() {\n\t\tthis.overlay = document.querySelector(\".overlay\");\n\t\tthis.overlayShown = false;\n\t\tthis.form = document.querySelector(\".card__form\");\n\t\tthis.card = document.querySelector(\".card\");\n\t\tthis.cardBtns = document.querySelectorAll(\".card__form__preference\");\n\t\tthis.registerEvents();\n\t\tthis.displayCard();\n\t}\n\tregisterEvents() {\n\t\tthis.cardBtns.forEach((btn) => {\n\t\t\tbtn.addEventListener(\"click\", () => {\n\t\t\t\tbtn.classList.toggle(\"card__form__preference-active\");\n\t\t\t});\n\t\t});\n\t\tthis.form.addEventListener(\"submit\", (e) => {\n\t\t\te.preventDefault();\n\t\t});\n\t}\n\n\tdisplayCard() {\n\t\tsetTimeout(() => {\n\t\t\tthis.overlay.classList.add(\"overlay__active\");\n\t\t\tthis.overlayShown = true;\n\t\t\tsetTimeout(() => {\n\t\t\t\tif (this.overlayShown) {\n\t\t\t\t\tthis.overlay.style.transition = \"none\"; //eradicate the glitch when resizing\n\t\t\t\t}\n\t\t\t\tthis.card.classList.add(\"card__active\");\n\t\t\t}, 600);\n\t\t}, 2000);\n\t}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);\n\n\n//# sourceURL=webpack://01_demo_mailinglist/./src/js/modules/Features.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Features_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Features.js */ \"./src/js/modules/Features.js\");\n\n// I don't normally use classes I recommend functional (functions) programming but for now I will use a class\n\nnew _modules_Features_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n//# sourceURL=webpack://01_demo_mailinglist/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;