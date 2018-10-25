webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_MonWedLotto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MonWedLotto */ "./components/MonWedLotto.js");
/* harmony import */ var _components_Kenoland__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Kenoland */ "./components/Kenoland.js");
/* harmony import */ var _components_Powerball__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Powerball */ "./components/Powerball.js");
/* harmony import */ var _components_Tattslotto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Tattslotto */ "./components/Tattslotto.js");
/* harmony import */ var _components_OzLotto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/OzLotto */ "./components/OzLotto.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scss_icon_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scss/icon.scss */ "./scss/icon.scss");
/* harmony import */ var _scss_icon_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scss_icon_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scss_daxline_pro_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scss/daxline-pro.scss */ "./scss/daxline-pro.scss");
/* harmony import */ var _scss_daxline_pro_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_daxline_pro_scss__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\PROJECT SYNC\\Lottoland\\lottoland-task\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this));
    var dataStructure = {
      numbers: [],
      supplementary: [],
      drawingDate: ""
    };
    _this.state = {
      monWedOz: dataStructure,
      ozPowerBall: dataStructure,
      saturdayOz: dataStructure,
      ozLotto: dataStructure,
      powerBall: dataStructure
    };
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getDrawingApi();
    }
  }, {
    key: "niceDate",
    value: function niceDate(date) {
      var d = new Date(date.year + '-' + date.month + '=' + date.day);
      return moment__WEBPACK_IMPORTED_MODULE_2___default()(d).format('ddd, DD MMM YYYY');
    }
  }, {
    key: "checkArrayEmpty",
    value: function checkArrayEmpty(array) {
      if (array) {
        return array;
      } else {
        return [];
      }
    }
  }, {
    key: "getDrawingApi",
    value: function getDrawingApi() {
      var _this2 = this;

      jquery__WEBPACK_IMPORTED_MODULE_1___default.a.when(jquery__WEBPACK_IMPORTED_MODULE_1___default.a.ajax({
        url: "https://www.lottoland.com/api/drawings",
        dataType: 'jsonp'
      })).then(function (result) {
        console.log(result);

        _this2.setState({
          monWedOz: {
            numbers: _this2.checkArrayEmpty(result.monWedOz.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.monWedOz.last.supplementary),
            drawingDate: _this2.niceDate(result.monWedOz.last.date)
          },
          ozPowerBall: {
            numbers: _this2.checkArrayEmpty(result.ozPowerBall.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.ozPowerBall.last.powerBall),
            drawingDate: _this2.niceDate(result.ozPowerBall.last.date)
          },
          saturdayOz: {
            numbers: _this2.checkArrayEmpty(result.saturdayOz.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.saturdayOz.last.supplementary),
            drawingDate: _this2.niceDate(result.saturdayOz.last.date)
          },
          ozLotto: {
            numbers: _this2.checkArrayEmpty(result.ozLotto.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.ozLotto.last.bonus),
            drawingDate: _this2.niceDate(result.ozLotto.last.date)
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Check out"), " latest lotto results"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/smile.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MonWedLotto__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.monWedOz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Kenoland__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Powerball__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: this.state.ozPowerBall,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tattslotto__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: this.state.saturdayOz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OzLotto__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: this.state.ozLotto,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info-banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/kenolandball.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "textbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Over $350,000 in 6 days to 6 lucky winners!"), " KENOLAND keeps that winning feeling rolling!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Learn More")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "Check out"), " latest lotto results"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/smile.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.1d999573815cdbb5fdbd.hot-update.js.map