'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
 * @param {Object} params - Params object
 */
var init = (0, _loadEnforcer2.default)(function (FB) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  params = (0, _lodash.defaults)({}, params, {
    xbfml: false,
    version: 'v2.11'
  });
  if (!params.appId) {
    throw new Error('FB.init: params.appId is required.');
  }
  FB.init(params);
});

exports.default = init;