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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPortionRow: () => (/* binding */ addPortionRow),\n/* harmony export */   addRecipeRow: () => (/* binding */ addRecipeRow)\n/* harmony export */ });\nfunction addRecipeRow() {\n    var table = document.getElementById(\"recipe-table\").getElementsByTagName('tbody')[0];\n    var newRowNum = table.getElementsByTagName(\"tr\").length + 1;\n    var newRow = table.insertRow();\n\n    // Make text cell\n    var newCell = newRow.insertCell(0);\n    var textInput = document.createElement(\"input\");\n    textInput.type = \"text\";\n    textInput.name = \"recipe-text-\" + newRowNum;\n    textInput.id = \"recipe-text-\" + newRowNum;\n    textInput.style.width = \"100%\";\n    textInput.addEventListener(\"input\", updateDistributionTable);\n    newCell.appendChild(textInput);\n\n    // Make integer cell\n    newCell = newRow.insertCell(1);\n    var intInput = document.createElement(\"input\");\n    intInput.type = \"number\";\n    intInput.name = \"recipe-integer-\" + newRowNum;\n    intInput.id = \"recipe-integer-\" + newRowNum;\n    intInput.style.width = \"100%\";\n    intInput.addEventListener(\"input\", updateDistributionTable);\n    newCell.appendChild(intInput);\n}\nwindow.addRecipeRow = addRecipeRow;\n\nfunction addPortionRow() {\n    var table = document.getElementById(\"portion-table\").getElementsByTagName('tbody')[0];\n    var newRowNum = table.getElementsByTagName(\"tr\").length + 1;\n    var newRow = table.insertRow();\n\n    // Make text cell\n    var newCell = newRow.insertCell(0);\n    var textInput = document.createElement(\"input\");\n    textInput.type = \"text\";\n    textInput.name = \"portion-text-\" + newRowNum;\n    textInput.id = \"portion-text-\" + newRowNum;\n    textInput.style.width = \"100%\";\n    textInput.addEventListener(\"input\", updateDistributionTable);\n    newCell.appendChild(textInput);\n\n    // Make integer cell\n    newCell = newRow.insertCell(1);\n    var intInput = document.createElement(\"input\");\n    intInput.type = \"number\";\n    intInput.name = \"portion-integer-\" + newRowNum;\n    intInput.id = \"portion-integer-\" + newRowNum;\n    intInput.style.width = \"100%\";\n    intInput.addEventListener(\"input\", updateDistributionTable);\n    newCell.appendChild(intInput);\n}\nwindow.addPortionRow = addPortionRow;\n\nfunction updateDistributionTable() {\n    var recipeTable = document.getElementById(\"recipe-table\").getElementsByTagName('tbody')[0];\n    var portionTable = document.getElementById(\"portion-table\").getElementsByTagName('tbody')[0];\n    var distributionTable = document.getElementById(\"distribution-table\").getElementsByTagName('tbody')[0];\n    var distributionHeader = document.getElementById(\"distribution-table\").getElementsByTagName('thead')[0].rows[0];\n\n    // Clear existing distribution table\n    distributionTable.innerHTML = \"\";\n\n    // Update header\n    while (distributionHeader.cells.length > 1) {\n        distributionHeader.deleteCell(-1);\n    }\n    for (var i = 0; i < portionTable.rows.length; i++) {\n        var portionName = portionTable.rows[i].cells[0].getElementsByTagName(\"input\")[0].value;\n        var newHeaderCell = document.createElement(\"th\");\n        newHeaderCell.className = \"col\" + (i + 2);\n        newHeaderCell.innerText = portionName;\n        distributionHeader.appendChild(newHeaderCell);\n    }\n\n    // Calculate total portion weight\n    var totalPortionWeight = 0;\n    for (var i = 0; i < portionTable.rows.length; i++) {\n        var portionWeight = parseFloat(portionTable.rows[i].cells[1].getElementsByTagName(\"input\")[0].value) || 0;\n        totalPortionWeight += portionWeight;\n    }\n\n    // Update body\n    for (var i = 0; i < recipeTable.rows.length; i++) {\n        var newRow = distributionTable.insertRow();\n        var ingredientName = recipeTable.rows[i].cells[0].getElementsByTagName(\"input\")[0].value;\n        var ingredientWeight = parseFloat(recipeTable.rows[i].cells[1].getElementsByTagName(\"input\")[0].value) || 0;\n\n        var newCell = newRow.insertCell(0);\n        newCell.className = \"col1\";\n        newCell.innerText = ingredientName;\n\n        for (var j = 0; j < portionTable.rows.length; j++) {\n            newCell = newRow.insertCell(j + 1);\n            newCell.className = \"col\" + (j + 2);\n            var portionWeight = parseFloat(portionTable.rows[j].cells[1].getElementsByTagName(\"input\")[0].value) || 0;\n            var portionIngredientWeight = (totalPortionWeight > 0) ? (portionWeight / totalPortionWeight) * ingredientWeight : 0;\n            newCell.innerText = portionIngredientWeight.toFixed(2);\n        }\n    }\n}\nwindow.updateDistributionTable = updateDistributionTable;\n\n//# sourceURL=webpack://portionizer/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;