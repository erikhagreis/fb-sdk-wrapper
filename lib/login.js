'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadEnforcer = require('./loadEnforcer');

var _loadEnforcer2 = _interopRequireDefault(_loadEnforcer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Prompts a user to login to your app using the Login dialog in a popup. This
 * method can also be used with an already logged-in user to request additional
 * permissions from them.
 *
 * https://developers.facebook.com/docs/reference/javascript/FB.login
 *
 * @param {Object} options - additional options
 *
 * @return {Promise} for the reply from FB
 */
var login = (0, _loadEnforcer2.default)(function (FB) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return new Promise(function (resolve, reject) {
    FB.login(resolve, options);
  });
});

exports.default = login;