webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MapIp.js":
/*!*****************************!*\
  !*** ./components/MapIp.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/emma/Documents/Ritaweb/ip-tracking-app/components/MapIp.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction MapIp(_ref) {\n  var cordinates = _ref.cordinates;\n  var position = [cordinates === null || cordinates === void 0 ? void 0 : cordinates.lat, cordinates === null || cordinates === void 0 ? void 0 : cordinates.lng];\n\n  function initMap() {\n    var map = new google.maps.Map(document.getElementById(\"map\"), {\n      zoom: 8,\n      center: {\n        lat: 40.731,\n        lng: -73.997\n      }\n    });\n    var geocoder = new google.maps.Geocoder();\n    var infowindow = new google.maps.InfoWindow();\n    document.getElementById(\"submit\").addEventListener(\"click\", function () {\n      geocodeLatLng(geocoder, map, infowindow);\n    });\n  }\n\n  function geocodeLatLng(geocoder, map, infowindow) {\n    var input = document.getElementById(\"latlng\").value;\n    var latlngStr = input.split(\",\", 2);\n    var latlng = {\n      lat: parseFloat(latlngStr[0]),\n      lng: parseFloat(latlngStr[1])\n    };\n    geocoder.geocode({\n      location: latlng\n    }, function (results, status) {\n      if (status === \"OK\") {\n        if (results[0]) {\n          map.setZoom(11);\n          var marker = new google.maps.Marker({\n            position: latlng,\n            map: map\n          });\n          infowindow.setContent(results[0].formatted_address);\n          infowindow.open(map, marker);\n        } else {\n          window.alert(\"No results found\");\n        }\n      } else {\n        window.alert(\"Geocoder failed due to: \" + status);\n      }\n    });\n  }\n\n  return __jsx(\"div\", {\n    id: \"map\",\n    className: \"h-\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }\n  });\n}\n\n_c = MapIp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapIp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MapIp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBJcC5qcz85NjNmIl0sIm5hbWVzIjpbIk1hcElwIiwiY29yZGluYXRlcyIsInBvc2l0aW9uIiwibGF0IiwibG5nIiwiaW5pdE1hcCIsIm1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiem9vbSIsImNlbnRlciIsImdlb2NvZGVyIiwiR2VvY29kZXIiLCJpbmZvd2luZG93IiwiSW5mb1dpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW9jb2RlTGF0TG5nIiwiaW5wdXQiLCJ2YWx1ZSIsImxhdGxuZ1N0ciIsInNwbGl0IiwibGF0bG5nIiwicGFyc2VGbG9hdCIsImdlb2NvZGUiLCJsb2NhdGlvbiIsInJlc3VsdHMiLCJzdGF0dXMiLCJzZXRab29tIiwibWFya2VyIiwiTWFya2VyIiwic2V0Q29udGVudCIsImZvcm1hdHRlZF9hZGRyZXNzIiwib3BlbiIsIndpbmRvdyIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLFNBQVNBLEtBQVQsT0FBK0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDN0IsTUFBTUMsUUFBUSxHQUFHLENBQUNELFVBQUQsYUFBQ0EsVUFBRCx1QkFBQ0EsVUFBVSxDQUFFRSxHQUFiLEVBQWtCRixVQUFsQixhQUFrQkEsVUFBbEIsdUJBQWtCQSxVQUFVLENBQUVHLEdBQTlCLENBQWpCOztBQUNBLFdBQVNDLE9BQVQsR0FBbUI7QUFDakIsUUFBTUMsR0FBRyxHQUFHLElBQUlDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxHQUFoQixDQUFvQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0FBQzlEQyxVQUFJLEVBQUUsQ0FEd0Q7QUFFOURDLFlBQU0sRUFBRTtBQUFFVixXQUFHLEVBQUUsTUFBUDtBQUFlQyxXQUFHLEVBQUUsQ0FBQztBQUFyQjtBQUZzRCxLQUFwRCxDQUFaO0FBSUEsUUFBTVUsUUFBUSxHQUFHLElBQUlQLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTyxRQUFoQixFQUFqQjtBQUNBLFFBQU1DLFVBQVUsR0FBRyxJQUFJVCxNQUFNLENBQUNDLElBQVAsQ0FBWVMsVUFBaEIsRUFBbkI7QUFDQVAsWUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDTyxnQkFBbEMsQ0FBbUQsT0FBbkQsRUFBNEQsWUFBTTtBQUNoRUMsbUJBQWEsQ0FBQ0wsUUFBRCxFQUFXUixHQUFYLEVBQWdCVSxVQUFoQixDQUFiO0FBQ0QsS0FGRDtBQUdEOztBQUVELFdBQVNHLGFBQVQsQ0FBdUJMLFFBQXZCLEVBQWlDUixHQUFqQyxFQUFzQ1UsVUFBdEMsRUFBa0Q7QUFDaEQsUUFBTUksS0FBSyxHQUFHVixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NVLEtBQWhEO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixLQUFLLENBQUNHLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQWxCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHO0FBQ2JyQixTQUFHLEVBQUVzQixVQUFVLENBQUNILFNBQVMsQ0FBQyxDQUFELENBQVYsQ0FERjtBQUVibEIsU0FBRyxFQUFFcUIsVUFBVSxDQUFDSCxTQUFTLENBQUMsQ0FBRCxDQUFWO0FBRkYsS0FBZjtBQUlBUixZQUFRLENBQUNZLE9BQVQsQ0FBaUI7QUFBRUMsY0FBUSxFQUFFSDtBQUFaLEtBQWpCLEVBQXVDLFVBQUNJLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMxRCxVQUFJQSxNQUFNLEtBQUssSUFBZixFQUFxQjtBQUNuQixZQUFJRCxPQUFPLENBQUMsQ0FBRCxDQUFYLEVBQWdCO0FBQ2R0QixhQUFHLENBQUN3QixPQUFKLENBQVksRUFBWjtBQUNBLGNBQU1DLE1BQU0sR0FBRyxJQUFJeEIsTUFBTSxDQUFDQyxJQUFQLENBQVl3QixNQUFoQixDQUF1QjtBQUNwQzlCLG9CQUFRLEVBQUVzQixNQUQwQjtBQUVwQ2xCLGVBQUcsRUFBRUE7QUFGK0IsV0FBdkIsQ0FBZjtBQUlBVSxvQkFBVSxDQUFDaUIsVUFBWCxDQUFzQkwsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXTSxpQkFBakM7QUFDQWxCLG9CQUFVLENBQUNtQixJQUFYLENBQWdCN0IsR0FBaEIsRUFBcUJ5QixNQUFyQjtBQUNELFNBUkQsTUFRTztBQUNMSyxnQkFBTSxDQUFDQyxLQUFQLENBQWEsa0JBQWI7QUFDRDtBQUNGLE9BWkQsTUFZTztBQUNMRCxjQUFNLENBQUNDLEtBQVAsQ0FBYSw2QkFBNkJSLE1BQTFDO0FBQ0Q7QUFDRixLQWhCRDtBQWlCRDs7QUFFRCxTQUNDO0FBQUssTUFBRSxFQUFDLEtBQVI7QUFBYyxhQUFTLEVBQUMsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUREO0FBR0Q7O0tBM0NRN0IsSztBQTZDTUEsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcElwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBNYXBJcCh7IGNvcmRpbmF0ZXMgfSkge1xuICBjb25zdCBwb3NpdGlvbiA9IFtjb3JkaW5hdGVzPy5sYXQsIGNvcmRpbmF0ZXM/LmxuZ107XG4gIGZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgem9vbTogOCxcbiAgICAgIGNlbnRlcjogeyBsYXQ6IDQwLjczMSwgbG5nOiAtNzMuOTk3IH1cbiAgICB9KTtcbiAgICBjb25zdCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgIGNvbnN0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdygpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBnZW9jb2RlTGF0TG5nKGdlb2NvZGVyLCBtYXAsIGluZm93aW5kb3cpO1xuICAgIH0pO1xuICB9XG4gIFxuICBmdW5jdGlvbiBnZW9jb2RlTGF0TG5nKGdlb2NvZGVyLCBtYXAsIGluZm93aW5kb3cpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGF0bG5nXCIpLnZhbHVlO1xuICAgIGNvbnN0IGxhdGxuZ1N0ciA9IGlucHV0LnNwbGl0KFwiLFwiLCAyKTtcbiAgICBjb25zdCBsYXRsbmcgPSB7XG4gICAgICBsYXQ6IHBhcnNlRmxvYXQobGF0bG5nU3RyWzBdKSxcbiAgICAgIGxuZzogcGFyc2VGbG9hdChsYXRsbmdTdHJbMV0pXG4gICAgfTtcbiAgICBnZW9jb2Rlci5nZW9jb2RlKHsgbG9jYXRpb246IGxhdGxuZyB9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzID09PSBcIk9LXCIpIHtcbiAgICAgICAgaWYgKHJlc3VsdHNbMF0pIHtcbiAgICAgICAgICBtYXAuc2V0Wm9vbSgxMSk7XG4gICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICBwb3NpdGlvbjogbGF0bG5nLFxuICAgICAgICAgICAgbWFwOiBtYXBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbmZvd2luZG93LnNldENvbnRlbnQocmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcyk7XG4gICAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJObyByZXN1bHRzIGZvdW5kXCIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cuYWxlcnQoXCJHZW9jb2RlciBmYWlsZWQgZHVlIHRvOiBcIiArIHN0YXR1cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgPGRpdiBpZD1cIm1hcFwiIGNsYXNzTmFtZT1cImgtXCI+PC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcElwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MapIp.js\n");

/***/ })

})