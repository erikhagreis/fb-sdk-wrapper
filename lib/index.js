'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.getGlobalFB = exports.ui = exports.logout = exports.login = exports.init = exports.getLoginStatus = exports.api = undefined;

var _sdkProvider = require('./sdkProvider');

var _sdkProvider2 = _interopRequireDefault(_sdkProvider);

var _load = require('./load');

var _load2 = _interopRequireDefault(_load);

var _getGlobalFB = require('./getGlobalFB');

var _getGlobalFB2 = _interopRequireDefault(_getGlobalFB);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _getLoginStatus = require('./getLoginStatus');

var _getLoginStatus2 = _interopRequireDefault(_getLoginStatus);

var _init = require('./init');

var _init2 = _interopRequireDefault(_init);

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _logout = require('./logout');

var _logout2 = _interopRequireDefault(_logout);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = exports.api = (0, _sdkProvider2.default)(_api2.default);
var getLoginStatus = exports.getLoginStatus = (0, _sdkProvider2.default)(_getLoginStatus2.default);
var init = exports.init = (0, _sdkProvider2.default)(_init2.default);
var login = exports.login = (0, _sdkProvider2.default)(_login2.default);
var logout = exports.logout = (0, _sdkProvider2.default)(_logout2.default);
var ui = exports.ui = (0, _sdkProvider2.default)(_ui2.default);

exports.getGlobalFB = _getGlobalFB2.default;
exports.load = _load2.default;