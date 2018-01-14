'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadEnforcer = require('./loadEnforcer');

var _loadEnforcer2 = _interopRequireDefault(_loadEnforcer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Make an API call to the Graph API.
 * 
 * https://developers.facebook.com/docs/javascript/reference/FB.api
 * https://developers.facebook.com/docs/graph-api/reference/
 * 
 * @param {String} path - endpoint path to call
 * @param {String} method - http method to use
 * @param {Object} params - parameters for the Graph API call
 * 
 * @return {Promise} for the reply from FB
 */
var api = (0, _loadEnforcer2.default)(function (FB, path) {
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  return new Promise(function (resolve, reject) {
    FB.api(path, method, params, function (response) {
      if (!response) {
        reject('No response from Facebook');
      } else if (response.error) {
        reject(response.error);
      } else {
        resolve(response);
      }
    });
  });
});

exports.default = api;