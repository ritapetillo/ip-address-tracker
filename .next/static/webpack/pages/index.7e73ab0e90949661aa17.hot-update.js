webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MapIp.js":
/*!*****************************!*\
  !*** ./components/MapIp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/emma/Documents/Ritaweb/ip-tracking-app/components/MapIp.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar MapIp = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MapIp, _Component);\n\n  var _super = _createSuper(MapIp);\n\n  function MapIp() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MapIp);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MapIp, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      console.log(\"componentWillMount\");\n      Map = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\").Map;\n      TileLayer = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\").TileLayer;\n      TileLayer = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\").TileLayer;\n      Marker = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\").Marker;\n      Popup = __webpack_require__(/*! react-leaflet */ \"./node_modules/react-leaflet/es/index.js\").Popup;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var position = [-12.76767, -76.343434];\n      return __jsx(Map, {\n        center: position,\n        zoom: 10,\n        style: {\n          height: \"100vh\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 7\n        }\n      }, __jsx(TileLayer, {\n        attribution: \"\\xA9 <a href=\\\"http://osm.org/copyright\\\">OpenStreetMap</a> contributors\",\n        url: \"http://{s}.tile.osm.org/{z}/{x}/{y}.png\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }\n      }), __jsx(Marker, {\n        position: position,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }\n      }, __jsx(Popup, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }\n      }, __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }\n      }, \"A pretty CSS3 popup. \", __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 36\n        }\n      }), \" Easily customizable.\"))));\n    }\n  }]);\n\n  return MapIp;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapIp);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBJcC5qcz85NjNmIl0sIm5hbWVzIjpbIk1hcElwIiwiY29uc29sZSIsImxvZyIsIk1hcCIsInJlcXVpcmUiLCJUaWxlTGF5ZXIiLCJNYXJrZXIiLCJQb3B1cCIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdNQSxLOzs7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7QUFDQUMsU0FBRyxHQUFHQyxtQkFBTyxDQUFDLCtEQUFELENBQVAsQ0FBeUJELEdBQS9CO0FBQ0FFLGVBQVMsR0FBR0QsbUJBQU8sQ0FBQywrREFBRCxDQUFQLENBQXlCQyxTQUFyQztBQUNBQSxlQUFTLEdBQUdELG1CQUFPLENBQUMsK0RBQUQsQ0FBUCxDQUF5QkMsU0FBckM7QUFDQUMsWUFBTSxHQUFHRixtQkFBTyxDQUFDLCtEQUFELENBQVAsQ0FBeUJFLE1BQWxDO0FBQ0FDLFdBQUssR0FBR0gsbUJBQU8sQ0FBQywrREFBRCxDQUFQLENBQXlCRyxLQUFqQztBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQUYsRUFBWSxDQUFDLFNBQWIsQ0FBakI7QUFDQSxhQUNFLE1BQUMsR0FBRDtBQUFLLGNBQU0sRUFBRUEsUUFBYjtBQUF1QixZQUFJLEVBQUUsRUFBN0I7QUFBaUMsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVixTQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxTQUFEO0FBQ0UsbUJBQVcsRUFBQywwRUFEZDtBQUVFLFdBQUcsRUFBQyx5Q0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFLRSxNQUFDLE1BQUQ7QUFBUSxnQkFBUSxFQUFFRCxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUN1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRHZCLDBCQURGLENBREYsQ0FMRixDQURGO0FBZUQ7Ozs7RUEzQmlCRSwrQzs7QUE4QkxWLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYXBJcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5jbGFzcyBNYXBJcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvbXBvbmVudFdpbGxNb3VudFwiKTtcbiAgICBNYXAgPSByZXF1aXJlKFwicmVhY3QtbGVhZmxldFwiKS5NYXA7XG4gICAgVGlsZUxheWVyID0gcmVxdWlyZShcInJlYWN0LWxlYWZsZXRcIikuVGlsZUxheWVyO1xuICAgIFRpbGVMYXllciA9IHJlcXVpcmUoXCJyZWFjdC1sZWFmbGV0XCIpLlRpbGVMYXllcjtcbiAgICBNYXJrZXIgPSByZXF1aXJlKFwicmVhY3QtbGVhZmxldFwiKS5NYXJrZXI7XG4gICAgUG9wdXAgPSByZXF1aXJlKFwicmVhY3QtbGVhZmxldFwiKS5Qb3B1cDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFstMTIuNzY3NjcsIC03Ni4zNDM0MzRdO1xuICAgIHJldHVybiAoXG4gICAgICA8TWFwIGNlbnRlcj17cG9zaXRpb259IHpvb209ezEwfSBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cbiAgICAgICAgPFRpbGVMYXllclxuICAgICAgICAgIGF0dHJpYnV0aW9uPScmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vc20ub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICAgICAgICB1cmw9XCJodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8TWFya2VyIHBvc2l0aW9uPXtwb3NpdGlvbn0+XG4gICAgICAgICAgPFBvcHVwPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIEEgcHJldHR5IENTUzMgcG9wdXAuIDxiciAvPiBFYXNpbHkgY3VzdG9taXphYmxlLlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgIDwvTWFya2VyPlxuICAgICAgPC9NYXA+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBJcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MapIp.js\n");

/***/ })

})