"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "load", {
  enumerable: true,
  get: function get() {
    return _load["default"];
  }
});
Object.defineProperty(exports, "getGlobalFB", {
  enumerable: true,
  get: function get() {
    return _getGlobalFB["default"];
  }
});
exports.ui = exports.logout = exports.login = exports.init = exports.getLoginStatus = exports.api = void 0;

var _load = _interopRequireDefault(require("./load"));

var _getGlobalFB = _interopRequireDefault(require("./getGlobalFB"));

var _sdkProvider = _interopRequireDefault(require("./sdkProvider"));

var _api = _interopRequireDefault(require("./api"));

var _getLoginStatus = _interopRequireDefault(require("./getLoginStatus"));

var _init = _interopRequireDefault(require("./init"));

var _login = _interopRequireDefault(require("./login"));

var _logout = _interopRequireDefault(require("./logout"));

var _ui = _interopRequireDefault(require("./ui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = (0, _sdkProvider["default"])(_api["default"]);
exports.api = api;
var getLoginStatus = (0, _sdkProvider["default"])(_getLoginStatus["default"]);
exports.getLoginStatus = getLoginStatus;
var init = (0, _sdkProvider["default"])(_init["default"]);
exports.init = init;
var login = (0, _sdkProvider["default"])(_login["default"]);
exports.login = login;
var logout = (0, _sdkProvider["default"])(_logout["default"]);
exports.logout = logout;
var ui = (0, _sdkProvider["default"])(_ui["default"]);
exports.ui = ui;