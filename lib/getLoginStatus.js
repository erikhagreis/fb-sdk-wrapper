'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadEnforcer = require('./loadEnforcer');

var _loadEnforcer2 = _interopRequireDefault(_loadEnforcer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns the Facebook Login status of a user, with an authResponse object if 
 * they are logged in.
 * 
 * https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
 * 
 * @param {Object} force - force refreshing the login status by bypassing cache
 * 
 * @return {Promise} for the reply from FB
 */
var getLoginStatus = (0, _loadEnforcer2.default)(function (FB) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return new Promise(function (resolve, reject) {
    FB.getLoginStatus(resolve, force);
  });
});

exports.default = getLoginStatus;