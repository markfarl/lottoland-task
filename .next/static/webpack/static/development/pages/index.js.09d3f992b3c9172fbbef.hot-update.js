webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Powerball.js":
/*!*********************************!*\
  !*** ./components/Powerball.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\PROJECT SYNC\\Lottoland\\lottoland-task\\components\\Powerball.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Powerball =
/*#__PURE__*/
function (_Component) {
  _inherits(Powerball, _Component);

  function Powerball() {
    _classCallCheck(this, Powerball);

    return _possibleConstructorReturn(this, _getPrototypeOf(Powerball).apply(this, arguments));
  }

  _createClass(Powerball, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "lotto-card powerball",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "borderLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "head-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Powerball"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Drawn every Thursday")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "rectangle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "icon icon-arrow-67 selection-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "inner-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Draw ", this.props.data.nr), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "title-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.data.drawingDate)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "icon icon-arrow-68 selection-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "lotto-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Winning numbers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "number-circle-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.props.data.numbers.map(function (name, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: index,
          className: "number-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, name);
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "lotto-numbers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Supps"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "number-circle-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, this.props.data.supplementary.map(function (name, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: index,
          className: "number-circle red",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, name);
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Prize details"), " | ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Help & FAQ")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(props);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Powerball;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Powerball);

/***/ })

})
//# sourceMappingURL=index.js.09d3f992b3c9172fbbef.hot-update.js.map