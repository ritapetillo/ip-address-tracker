webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MapIp.js":
/*!*****************************!*\
  !*** ./components/MapIp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ \"./node_modules/leaflet/dist/leaflet-src.js\");\n/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/emma/Documents/Ritaweb/ip-tracking-app/components/MapIp.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar RL = false;\nvar Map = false;\nvar TileLayer = false;\nvar Marker = false;\nvar Popup = false;\n\nif (process.env.BROWSER) {\n  RL = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\");\n  Map = RL.Map;\n  TileLayer = RL.TileLayer;\n  Marker = RL.Marker;\n  Popup = RL.Popup;\n}\n\nfunction MapIp(_ref) {\n  var cordinates = _ref.cordinates;\n  var position = [cordinates === null || cordinates === void 0 ? void 0 : cordinates.lat, cordinates === null || cordinates === void 0 ? void 0 : cordinates.lng];\n  return __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, process.env.BROWSER && __jsx(Map, {\n    style: {\n      width: '100%',\n      height: '500px'\n    },\n    center: position,\n    zoom: 13,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(TileLayer, {\n    url: \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\",\n    attribution: \"\\xA9 <a href=\\\"http://osm.org/copyright\\\">OpenStreetMap</a> contributors\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(Marker, {\n    position: position,\n    icon: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(Popup, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, \"A pretty CSS3 popup.\", __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 38\n    }\n  }), \"Easily customizable.\"))));\n}\n\n_c = MapIp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapIp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MapIp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBJcC5qcz85NjNmIl0sIm5hbWVzIjpbIlJMIiwiTWFwIiwiVGlsZUxheWVyIiwiTWFya2VyIiwiUG9wdXAiLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInJlcXVpcmUiLCJNYXBJcCIsImNvcmRpbmF0ZXMiLCJwb3NpdGlvbiIsImxhdCIsImxuZyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQUlBLEVBQUUsR0FBRyxLQUFUO0FBQ0EsSUFBSUMsR0FBRyxHQUFHLEtBQVY7QUFDQSxJQUFJQyxTQUFTLEdBQUcsS0FBaEI7QUFDQSxJQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLElBQUlDLEtBQUssR0FBRyxLQUFaOztBQUNBLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QlAsSUFBRSxHQUFHUSxtQkFBTyxDQUFDLCtEQUFELENBQVo7QUFDQVAsS0FBRyxHQUFHRCxFQUFFLENBQUNDLEdBQVQ7QUFDQUMsV0FBUyxHQUFHRixFQUFFLENBQUNFLFNBQWY7QUFDQUMsUUFBTSxHQUFHSCxFQUFFLENBQUNHLE1BQVo7QUFDQUMsT0FBSyxHQUFHSixFQUFFLENBQUNJLEtBQVg7QUFDRDs7QUFFRCxTQUFTSyxLQUFULE9BQStCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjO0FBQzdCLE1BQU1DLFFBQVEsR0FBRyxDQUFDRCxVQUFELGFBQUNBLFVBQUQsdUJBQUNBLFVBQVUsQ0FBRUUsR0FBYixFQUFrQkYsVUFBbEIsYUFBa0JBLFVBQWxCLHVCQUFrQkEsVUFBVSxDQUFFRyxHQUE5QixDQUFqQjtBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFaLElBQ0MsTUFBQyxHQUFEO0FBQUssU0FBSyxFQUFFO0FBQUNPLFdBQUssRUFBQyxNQUFQO0FBQWNDLFlBQU0sRUFBRTtBQUF0QixLQUFaO0FBQTRDLFVBQU0sRUFBRUosUUFBcEQ7QUFBOEQsUUFBSSxFQUFFLEVBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFDRSxPQUFHLEVBQUMsb0RBRE47QUFFRSxlQUFXLEVBQUMsMEVBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0UsTUFBQyxNQUFEO0FBQVEsWUFBUSxFQUFFQSxRQUFsQjtBQUE0QixRQUFJLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUEyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTNCLHlCQURGLENBTEYsQ0FGRixDQURGO0FBZ0JEOztLQW5CUUYsSztBQXFCTUEsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcElwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJsZWFmbGV0XCI7XG5cbmxldCBSTCA9IGZhbHNlO1xubGV0IE1hcCA9IGZhbHNlO1xubGV0IFRpbGVMYXllciA9IGZhbHNlO1xubGV0IE1hcmtlciA9IGZhbHNlO1xubGV0IFBvcHVwID0gZmFsc2U7XG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBSTCA9IHJlcXVpcmUoXCJyZWFjdC1sZWFmbGV0XCIpO1xuICBNYXAgPSBSTC5NYXA7XG4gIFRpbGVMYXllciA9IFJMLlRpbGVMYXllcjtcbiAgTWFya2VyID0gUkwuTWFya2VyO1xuICBQb3B1cCA9IFJMLlBvcHVwO1xufVxuXG5mdW5jdGlvbiBNYXBJcCh7IGNvcmRpbmF0ZXMgfSkge1xuICBjb25zdCBwb3NpdGlvbiA9IFtjb3JkaW5hdGVzPy5sYXQsIGNvcmRpbmF0ZXM/LmxuZ107XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgIHtwcm9jZXNzLmVudi5CUk9XU0VSICYmIChcbiAgICAgIDxNYXAgc3R5bGU9e3t3aWR0aDonMTAwJScsaGVpZ2h0OiAnNTAwcHgnfX0gY2VudGVyPXtwb3NpdGlvbn0gem9vbT17MTN9PlxuICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgdXJsPVwiaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAgIGF0dHJpYnV0aW9uPVwiJmNvcHk7IDxhIGhyZWY9JnF1b3Q7aHR0cDovL29zbS5vcmcvY29weXJpZ2h0JnF1b3Q7Pk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9yc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrZXIgcG9zaXRpb249e3Bvc2l0aW9ufSBpY29uPScnPlxuICAgICAgICAgIDxQb3B1cD5BIHByZXR0eSBDU1MzIHBvcHVwLjxiciAvPkVhc2lseSBjdXN0b21pemFibGUuPC9Qb3B1cD5cbiAgICAgICAgPC9NYXJrZXI+XG4gICAgICA8L01hcD5cbiAgICApfVxuICA8L2Rpdj5cbik7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwSXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapIp.js\n");

/***/ })

})