webpackHotUpdate_N_E("pages/index",{

/***/ "./components/IpCard.js":
/*!******************************!*\
  !*** ./components/IpCard.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_IpCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/IpCard.module.css */ \"./styles/IpCard.module.css\");\n/* harmony import */ var _styles_IpCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_IpCard_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/emma/Documents/Ritaweb/ip-tracking-app/components/IpCard.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction IpCard(_ref) {\n  var ipDetails = _ref.ipDetails;\n  var location = ipDetails.location;\n  return __jsx(\"div\", {\n    className: _styles_IpCard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ipCard,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"IP\"), __jsx(\"h2\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, ipDetails.ip)), __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"location\"), __jsx(\"h2\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, location.city, \" \", location.region, \", \", location.country)), __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"timezone\"), __jsx(\"h2\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, \"IP\")), __jsx(\"div\", {\n    className: \"border-0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, \"isp\"), __jsx(\"h2\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"IP\")));\n}\n\n_c = IpCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IpCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"IpCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JcENhcmQuanM/OTA0OSJdLCJuYW1lcyI6WyJJcENhcmQiLCJpcERldGFpbHMiLCJsb2NhdGlvbiIsInN0eWxlcyIsImlwQ2FyZCIsImlwIiwiY2l0eSIsInJlZ2lvbiIsImNvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsT0FBK0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDM0IsTUFBTUMsUUFBUSxHQUFHRCxTQUFTLENBQUNDLFFBQTNCO0FBQ0YsU0FDRTtBQUFLLGFBQVMsRUFBRUMsZ0VBQU0sQ0FBQ0MsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtCSCxTQUFTLENBQUNJLEVBQTVCLENBRkYsQ0FERixFQUtFO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQkgsUUFBUSxDQUFDSSxJQUEzQixPQUFrQ0osUUFBUSxDQUFDSyxNQUEzQyxRQUFxREwsUUFBUSxDQUFDTSxPQUE5RCxDQUZGLENBTEYsRUFTRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixDQVRGLEVBYUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRixDQWJGLENBREY7QUFvQkQ7O0tBdEJRUixNO0FBd0JNQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSXBDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0lwQ2FyZC5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIElwQ2FyZCh7IGlwRGV0YWlscyB9KSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBpcERldGFpbHMubG9jYXRpb25cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlwQ2FyZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXCI+SVA8L2gzPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+e2lwRGV0YWlscy5pcH08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXCI+bG9jYXRpb248L2gzPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+e2xvY2F0aW9uLmNpdHl9IHtsb2NhdGlvbi5yZWdpb259LCB7bG9jYXRpb24uY291bnRyeX08L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXCI+dGltZXpvbmU8L2gzPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+SVA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJcIj5pc3A8L2gzPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+SVA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElwQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/IpCard.js\n");

/***/ })

})