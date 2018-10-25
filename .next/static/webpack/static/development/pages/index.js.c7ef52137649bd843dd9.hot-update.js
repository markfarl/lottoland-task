webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MegaMillions.js":
/*!************************************!*\
  !*** ./components/MegaMillions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\PROJECT SYNC\\Lottoland\\lottoland-task\\components\\MegaMillions.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MegaMillions =
/*#__PURE__*/
function (_Component) {
  _inherits(MegaMillions, _Component);

  function MegaMillions() {
    _classCallCheck(this, MegaMillions);

    return _possibleConstructorReturn(this, _getPrototypeOf(MegaMillions).apply(this, arguments));
  }

  _createClass(MegaMillions, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lotto-card mega-millions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "borderLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "head-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/uspower.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "US Power"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-top-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "$50 Million*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "sub-time-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon icon-clock-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), " 2 Std. 47 Min.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "rectangle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon icon-arrow-67 selection-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inner-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Draw ", this.props.data.nr), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "title-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.props.data.drawingDate)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon icon-arrow-68 selection-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lotto-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Winning numbers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number-circle-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.props.data.numbers.map(function (name, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          className: "number-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, name);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lotto-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Supps"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "number-circle-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, this.props.data.supplementary.map(function (name, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index,
          className: "number-circle red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, name);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Prize details"), " | ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Help & FAQ")));
    }
  }]);

  return MegaMillions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MegaMillions);

/***/ }),

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
/* harmony import */ var _components_USpower__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/USpower */ "./components/USpower.js");
/* harmony import */ var _components_WorldMillions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/WorldMillions */ "./components/WorldMillions.js");
/* harmony import */ var _components_MegaMillions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MegaMillions */ "./components/MegaMillions.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_icon_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scss/icon.scss */ "./scss/icon.scss");
/* harmony import */ var _scss_icon_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_icon_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scss_daxline_pro_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../scss/daxline-pro.scss */ "./scss/daxline-pro.scss");
/* harmony import */ var _scss_daxline_pro_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_daxline_pro_scss__WEBPACK_IMPORTED_MODULE_14__);
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
      nr: "",
      drawingDate: ""
    };
    _this.state = {
      monWedOz: dataStructure,
      ozPowerBall: dataStructure,
      saturdayOz: dataStructure,
      ozLotto: dataStructure,
      powerBall: dataStructure,
      worldMillions: dataStructure,
      megaMillions: dataStructure
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
            nr: result.monWedOz.last.nr,
            numbers: _this2.checkArrayEmpty(result.monWedOz.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.monWedOz.last.supplementary),
            drawingDate: _this2.niceDate(result.monWedOz.last.date)
          },
          ozPowerBall: {
            nr: result.ozPowerBall.last.nr,
            numbers: _this2.checkArrayEmpty(result.ozPowerBall.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.ozPowerBall.last.powerBall),
            drawingDate: _this2.niceDate(result.ozPowerBall.last.date)
          },
          saturdayOz: {
            nr: result.saturdayOz.last.nr,
            numbers: _this2.checkArrayEmpty(result.saturdayOz.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.saturdayOz.last.supplementary),
            drawingDate: _this2.niceDate(result.saturdayOz.last.date)
          },
          ozLotto: {
            nr: result.ozLotto.last.nr,
            numbers: _this2.checkArrayEmpty(result.ozLotto.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.ozLotto.last.bonus),
            drawingDate: _this2.niceDate(result.ozLotto.last.date)
          },
          powerBall: {
            nr: result.powerBall.last.nr,
            numbers: _this2.checkArrayEmpty(result.powerBall.last.numbers),
            supplementary: _this2.checkArrayEmpty(result.powerBall.last.powerballs),
            drawingDate: _this2.niceDate(result.powerBall.last.date)
          },
          worldMillions: {
            nr: result.worldMillions.last.nr,
            numbers: _this2.checkArrayEmpty(result.worldMillions.last.numbers)[0].toString().split(''),
            drawingDate: _this2.niceDate(result.worldMillions.last.date)
          },
          megaMillions: {
            nr: result.megaMillions.last.nr,
            numbers: _this2.checkArrayEmpty(result.megaMillions.last.numbers)[0].toString().split(''),
            supplementary: _this2.checkArrayEmpty(result.megaMillions.last.powerballs),
            drawingDate: _this2.niceDate(result.megaMillions.last.date)
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
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Check out"), " latest lotto results"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/smile.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MonWedLotto__WEBPACK_IMPORTED_MODULE_4__["default"], {
        data: this.state.monWedOz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Kenoland__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Powerball__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: this.state.ozPowerBall,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Tattslotto__WEBPACK_IMPORTED_MODULE_7__["default"], {
        data: this.state.saturdayOz,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_OzLotto__WEBPACK_IMPORTED_MODULE_8__["default"], {
        data: this.state.ozLotto,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info-banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/kenolandball.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "textbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Over $350,000 in 6 days to 6 lucky winners!"), " KENOLAND keeps that winning feeling rolling!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Learn More")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-title-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Never lose a ticket")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/images/smile.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_USpower__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: this.state.powerBall,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorldMillions__WEBPACK_IMPORTED_MODULE_10__["default"], {
        data: this.state.worldMillions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MegaMillions__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: this.state.megaMillions,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })));
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
//# sourceMappingURL=index.js.c7ef52137649bd843dd9.hot-update.js.map