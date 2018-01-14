'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadEnforcer = require('./loadEnforcer');

var _loadEnforcer2 = _interopRequireDefault(_loadEnforcer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The method FB.logout() logs the user out of your site and, in some cases,
 * Facebook.
 *
 * https://developers.facebook.com/docs/reference/javascript/FB.logout
 *
 * @return {Promise} for the reply from FB
 */
var logout = (0, _loadEnforcer2.default)(function (FB) {
  return new Promise(function (resolve, reject) {
    FB.logout(resolve);
  });
});

exports.default = logout;