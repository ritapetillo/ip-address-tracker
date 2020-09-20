webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input.js */ \"./components/Input.js\");\n/* harmony import */ var _components_IpCard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/IpCard.js */ \"./components/IpCard.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/emma/Documents/Ritaweb/ip-tracking-app/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar MapIp = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/MapIp.js */ \"./components/MapIp.js\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../components/MapIp.js */ \"./components/MapIp.js\")];\n    },\n    modules: [\"../components/MapIp.js\"]\n  }\n});\n_c2 = MapIp;\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"168.\"),\n      ip = _useState[0],\n      setIp = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      ipData = _useState2[0],\n      setIpData = _useState2[1];\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ip) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return setIp(ip);\n\n            case 2:\n              console.log(ip);\n              getIpDetails(ip);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var getIpDetails = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ip) {\n      var res, json;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return fetch(\"https://geo.ipify.org/api/v1?apiKey=at_Ycuf9ssDWYjHU8yM3Xx7cs7R0Vv3B&ipAddress=\".concat(ip));\n\n            case 2:\n              res = _context2.sent;\n              _context2.next = 5;\n              return res.json();\n\n            case 5:\n              json = _context2.sent;\n              setIpData(json);\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function getIpDetails(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"IP Tracker\"), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"initial-scale=1.0, width=device-width\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://unpkg.com/leaflet@1.6.0/dist/leaflet.css\",\n    integrity: \"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==\",\n    crossorigin: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"Home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Input_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    handleSubmit: handleSubmit,\n    ipTyped: ip,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }), __jsx(_components_IpCard_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    ipDetails: ipData,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"h-screen w-screen\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(MapIp, {\n    cordinates: ipData.location,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Home, \"vZQXUTnWrB7FcByLTf7LmHqsYD4=\");\n\n_c3 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"MapIp$dynamic\");\n$RefreshReg$(_c2, \"MapIp\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJNYXBJcCIsImR5bmFtaWMiLCJzc3IiLCJIb21lIiwidXNlU3RhdGUiLCJpcCIsInNldElwIiwiaXBEYXRhIiwic2V0SXBEYXRhIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsImdldElwRGV0YWlscyIsImZldGNoIiwicmVzIiwianNvbiIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sb0lBQU47QUFBQSxDQUFELEVBQXlDO0FBQUVDLEtBQUcsRUFBRSxLQUFQO0FBQUE7QUFBQTtBQUFBLGtDQUEzQixxREFBMkI7QUFBQTtBQUFBLGNBQTNCLHdCQUEyQjtBQUFBO0FBQUEsQ0FBekMsQ0FBckI7TUFBTUYsSzs7QUFFTixTQUFTRyxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsTUFBRCxDQURkO0FBQUEsTUFDUEMsRUFETztBQUFBLE1BQ0hDLEtBREc7O0FBQUEsbUJBRWNGLHNEQUFRLENBQUMsRUFBRCxDQUZ0QjtBQUFBLE1BRVBHLE1BRk87QUFBQSxNQUVDQyxTQUZEOztBQUlkLE1BQU1DLFlBQVk7QUFBQSxnTUFBRyxpQkFBT0osRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYkMsS0FBSyxDQUFDRCxFQUFELENBRFE7O0FBQUE7QUFFbkJLLHFCQUFPLENBQUNDLEdBQVIsQ0FBWU4sRUFBWjtBQUNBTywwQkFBWSxDQUFDUCxFQUFELENBQVo7O0FBSG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpJLFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBTUEsTUFBTUcsWUFBWTtBQUFBLGlNQUFHLGtCQUFPUCxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0RRLEtBQUssMEZBQzZEUixFQUQ3RCxFQURKOztBQUFBO0FBQ2JTLGlCQURhO0FBQUE7QUFBQSxxQkFJQUEsR0FBRyxDQUFDQyxJQUFKLEVBSkE7O0FBQUE7QUFJYkEsa0JBSmE7QUFLbkJQLHVCQUFTLENBQUNPLElBQUQsQ0FBVDs7QUFMbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkgsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFRQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsa0RBRlA7QUFHRSxhQUFTLEVBQUMsaUdBSFo7QUFJRSxlQUFXLEVBQUMsRUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQVdFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBTyxnQkFBWSxFQUFFSCxZQUFyQjtBQUFtQyxXQUFPLEVBQUVKLEVBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBUSxhQUFTLEVBQUVFLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxjQUFVLEVBQUVBLE1BQU0sQ0FBQ1MsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsQ0FYRixDQURGO0FBcUJEOztHQXZDUWIsSTs7TUFBQUEsSTtBQXlDTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0LmpzXCI7XG5pbXBvcnQgSXBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0lwQ2FyZC5qc1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBNYXBJcCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9NYXBJcC5qc1wiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaXAsIHNldElwXSA9IHVzZVN0YXRlKFwiMTY4LlwiKTtcbiAgY29uc3QgW2lwRGF0YSwgc2V0SXBEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChpcCkgPT4ge1xuICAgIGF3YWl0IHNldElwKGlwKTtcbiAgICBjb25zb2xlLmxvZyhpcCk7XG4gICAgZ2V0SXBEZXRhaWxzKGlwKTtcbiAgfTtcblxuICBjb25zdCBnZXRJcERldGFpbHMgPSBhc3luYyAoaXApID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2dlby5pcGlmeS5vcmcvYXBpL3YxP2FwaUtleT1hdF9ZY3VmOXNzRFdZakhVOHlNM1h4N2NzN1IwVnYzQiZpcEFkZHJlc3M9JHtpcH1gXG4gICAgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRJcERhdGEoanNvbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5JUCBUcmFja2VyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9sZWFmbGV0QDEuNi4wL2Rpc3QvbGVhZmxldC5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi14d0UvQXo5enJqQklwaEFjQmIzRjZKVnF4ZjQ2K0NETHdmTE1IbG9OdTZLRVFDQVdpNkhjRFViZU9mQklwdEY3dGNDenVzS0ZqRncyeXV2RXBETDl3UT09XCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cbiAgICAgICAgPElucHV0IGhhbmRsZVN1Ym1pdD17aGFuZGxlU3VibWl0fSBpcFR5cGVkPXtpcH0gLz5cbiAgICAgICAgPElwQ2FyZCBpcERldGFpbHM9e2lwRGF0YX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlblwiPlxuICAgICAgICAgIDxNYXBJcCBjb3JkaW5hdGVzPXtpcERhdGEubG9jYXRpb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})