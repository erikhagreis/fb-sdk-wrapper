'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _loadEnforcer = require('./loadEnforcer');

var _loadEnforcer2 = _interopRequireDefault(_loadEnforcer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to initialize and setup the SDK. All other SDK methods must be called
 * after this one.
 *
 * https://developers.facebook.com/docs/javascript/reference/FB.init/v2.11
 * https://developers.facebook.com/apps/
 *
 * @param {Object} FB - the window.FB object
 * @param {String} appId - the FB app ID
 * @param {Object} params - Params object (optional)
 */
var init = (0, _loadEnforcer2.default)(function (FB, appId) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  params = (0, _lodash.defaults)({}, params, {
    xbfml: false,
    version: 'v2.11'
  });
  FB.init(_extends({
    appId: appId
  }, params));
});

exports.default = init;