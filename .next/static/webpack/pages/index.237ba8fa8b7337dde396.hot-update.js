webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Input_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Input.module.css */ \"./styles/Input.module.css\");\n/* harmony import */ var _styles_Input_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Input_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/emma/Documents/Ritaweb/ip-tracking-app/components/Input.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Input(_ref) {\n  _s();\n\n  var handleSubmit = _ref.handleSubmit,\n      ipTyped = _ref.ipTyped;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"34.167.36.\"),\n      ip = _useState[0],\n      setIp = _useState[1];\n\n  var submitIp = function submitIp(e) {\n    e.preventDefault();\n    handleSubmit(ip);\n  };\n\n  var changeInput = function changeInput(e) {\n    setIp(e.target.value); // console.log(ip);\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_Input_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.input,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"IP Address Tracker\")), __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    className: \"flex flex-row\",\n    onSubmit: submitIp,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    name: \"ip\",\n    id: \"ip\",\n    placeholder: \"Search for any IP address or domain\",\n    className: \"rounded-l-lg px-6 py-2 h-16 flex-grow\",\n    onChange: changeInput,\n    value: ip,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }), __jsx(\"button\", {\n    className: \"bg-black py-2 rounded-r-lg text-white h-16 w-16 \",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/icon-arrow.svg\",\n    alt: \"send\",\n    className: \"self-center mr-auto ml-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  })))));\n}\n\n_s(Input, \"ZcE/cy0oLPBbMsDFfrCHs50aS1c=\");\n\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0IiwiaGFuZGxlU3VibWl0IiwiaXBUeXBlZCIsInVzZVN0YXRlIiwiaXAiLCJzZXRJcCIsInN1Ym1pdElwIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlSW5wdXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0eWxlcyIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMEM7QUFBQTs7QUFBQSxNQUF6QkMsWUFBeUIsUUFBekJBLFlBQXlCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNwQkMsc0RBQVEsQ0FBQyxZQUFELENBRFk7QUFBQSxNQUNqQ0MsRUFEaUM7QUFBQSxNQUM3QkMsS0FENkI7O0FBR3hDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FQLGdCQUFZLENBQUNHLEVBQUQsQ0FBWjtBQUNELEdBSEQ7O0FBSUEsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0YsQ0FBRCxFQUFPO0FBQ3pCRixTQUFLLENBQUNFLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUFWLENBQUwsQ0FEeUIsQ0FFekI7QUFDRCxHQUhEOztBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFnQyxZQUFRLEVBQUVQLFFBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLElBRlA7QUFHRSxNQUFFLEVBQUMsSUFITDtBQUlFLGVBQVcsRUFBQyxxQ0FKZDtBQUtFLGFBQVMsRUFBQyx1Q0FMWjtBQU1FLFlBQVEsRUFBRUcsV0FOWjtBQU9FLFNBQUssRUFBRUwsRUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFVRTtBQUFRLGFBQVMsRUFBQyxrREFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFDLHdCQUROO0FBRUUsT0FBRyxFQUFDLE1BRk47QUFHRSxhQUFTLEVBQUMsNkJBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsQ0FERixDQUpGLENBREY7QUEyQkQ7O0dBdkNRSixLOztLQUFBQSxLO0FBeUNNQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5wdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9JbnB1dC5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIElucHV0KHsgaGFuZGxlU3VibWl0LCBpcFR5cGVkIH0pIHtcbiAgY29uc3QgW2lwLCBzZXRJcF0gPSB1c2VTdGF0ZShcIjM0LjE2Ny4zNi5cIik7XG5cbiAgY29uc3Qgc3VibWl0SXAgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBoYW5kbGVTdWJtaXQoaXApO1xuICB9O1xuICBjb25zdCBjaGFuZ2VJbnB1dCA9IChlKSA9PiB7XG4gICAgc2V0SXAoZS50YXJnZXQudmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGlwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDE+SVAgQWRkcmVzcyBUcmFja2VyPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiIG9uU3VibWl0PXtzdWJtaXRJcH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiaXBcIlxuICAgICAgICAgICAgaWQ9XCJpcFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYW55IElQIGFkZHJlc3Mgb3IgZG9tYWluXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbC1sZyBweC02IHB5LTIgaC0xNiBmbGV4LWdyb3dcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZUlucHV0fVxuICAgICAgICAgICAgdmFsdWU9e2lwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibGFjayBweS0yIHJvdW5kZWQtci1sZyB0ZXh0LXdoaXRlIGgtMTYgdy0xNiBcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9pY29uLWFycm93LnN2Z1wiXG4gICAgICAgICAgICAgIGFsdD1cInNlbmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciBtci1hdXRvIG1sLWF1dG9cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

})