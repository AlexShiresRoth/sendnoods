(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./client/components/LocationMarker.js":
/*!*********************************************!*\
  !*** ./client/components/LocationMarker.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar LocationMarker = function LocationMarker(_ref) {\n  var text = _ref.text;\n  var iconStyle = {\n    fontSize: '1.2rem',\n    color: 'dodgerblue'\n  };\n\n  var showUserInfo = function showUserInfo() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, text);\n  };\n\n  var removeUserInfo = function removeUserInfo() {\n    console.log('Leaving user info');\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onMouseEnter: function onMouseEnter() {\n      return showUserInfo();\n    },\n    onMouseLeave: function onMouseLeave() {\n      return removeUserInfo();\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n    className: \"fas fa-user\",\n    style: iconStyle\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationMarker);\n\n//# sourceURL=webpack:///./client/components/LocationMarker.js?");

/***/ }),

/***/ "./client/components/Marker.js":
/*!*************************************!*\
  !*** ./client/components/Marker.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar Marker =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Marker, _React$Component);\n\n  function Marker(props) {\n    var _this;\n\n    _classCallCheck(this, Marker);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marker).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"imgStyles\", {\n      height: '1.5rem',\n      width: '1.5rem'\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"setHoverStateEnter\", function () {\n      _this.setState({\n        hovered: true\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"setHoverStateLeave\", function () {\n      _this.setState({\n        hovered: false\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"showInfo\", function () {\n      if (_this.state.hovered) {\n        var lat = _this.props.locationInfo.geometry.location.lat;\n        var lng = _this.props.locationInfo.geometry.location.lng;\n        var place_id = _this.props.locationInfo.place_id;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: _this.props.mode.mode ? 'ramen-popup dark' : 'ramen-popup'\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, _this.props.locationInfo.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n          href: \"https://www.google.com/maps/dir/?api=1&query=\".concat(lat, \",\").concat(lng, \"&query_place_id=\").concat(place_id)\n        }, _this.props.locationInfo.formatted_address.substring(0, 40), \"...\"));\n      }\n    });\n\n    _this.state = {\n      hovered: false\n    };\n    return _this;\n  }\n\n  _createClass(Marker, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          position: 'relative'\n        },\n        onMouseEnter: this.setHoverStateEnter,\n        onMouseLeave: this.setHoverStateLeave,\n        onClick: this.setHoverStateEnter\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"figure\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: __webpack_require__(/*! ../images/ramen.png */ \"./client/images/ramen.png\"),\n        alt: this.props.text,\n        style: this.imgStyles\n      })), this.showInfo());\n    }\n  }]);\n\n  return Marker;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    mode: state.mode\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps)(Marker));\n\n//# sourceURL=webpack:///./client/components/Marker.js?");

/***/ }),

/***/ "./client/components/RamenSpots.js":
/*!*****************************************!*\
  !*** ./client/components/RamenSpots.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/lib/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LocationMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationMarker */ \"./client/components/LocationMarker.js\");\n/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Marker */ \"./client/components/Marker.js\");\n/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/keys */ \"./config/keys.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/main.css */ \"./client/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar RamenSpots =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(RamenSpots, _React$Component);\n\n  function RamenSpots(props) {\n    var _this;\n\n    _classCallCheck(this, RamenSpots);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(RamenSpots).call(this, props));\n    _this.state = {\n      lat: null,\n      lng: null,\n      userLat: null,\n      userLng: null,\n      center: {\n        lat: null,\n        lng: null\n      },\n      zoom: 12\n    };\n    return _this;\n  }\n\n  _createClass(RamenSpots, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      window.navigator.geolocation.getCurrentPosition(function (position) {\n        return _this2.setState({\n          lat: position.coords.latitude,\n          lng: position.coords.longitude,\n          userLat: position.coords.latitude,\n          userLng: position.coords.longitude\n        });\n      }, function (err) {\n        return _this2.setState({\n          errMessage: err.message\n        });\n      });\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (this.props.locations !== prevProps.locations) {\n        if (this.props.locations.length > 0) {\n          this.setState({\n            lat: this.props.locations[0].geometry.location.lat,\n            lng: this.props.locations[0].geometry.location.lng\n          });\n        }\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var renderMarkers = this.props.locations.map(function (location) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Marker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          lat: location.geometry.location.lat,\n          lng: location.geometry.location.lng,\n          key: location.id,\n          locationInfo: location,\n          text: \"Ramen Spot\"\n        });\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"middle__container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        bootstrapURLKeys: {\n          key: _config_keys__WEBPACK_IMPORTED_MODULE_4__[\"maps_api_key\"]\n        },\n        defaultCenter: _objectSpread({}, this.state.center),\n        defaultZoom: this.state.zoom,\n        center: {\n          lat: this.state.lat,\n          lng: this.state.lng\n        },\n        yesIWantToUseGoogleMapApiInternals: true\n      }, this.props.locations.length > 0 ? renderMarkers : [], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LocationMarker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        lat: this.state.userLat,\n        lng: this.state.userLng,\n        text: \"Current User Location\"\n      })));\n    }\n  }]);\n\n  return RamenSpots;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RamenSpots);\n\n//# sourceURL=webpack:///./client/components/RamenSpots.js?");

/***/ })

}]);