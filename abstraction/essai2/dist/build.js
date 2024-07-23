/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ (() => {

eval("class Person {\n    display() {\n        const element = document.getElementById(\"resultat\");\n        if (element) {\n            element.textContent = `Name: ${this.name}`; // Use textContent for cleaner output\n        }\n        else {\n            console.error(\"Element with id 'resultat' not found.\");\n        }\n    }\n}\nclass Employee extends Person {\n    constructor(name, code) {\n        super(); // must call super()\n        this.empCode = code;\n        this.name = name;\n    }\n}\nlet emp = new Employee(\"Patrick\", 100);\nemp.display(); //James\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.ts"]();
/******/ 	
/******/ })()
;