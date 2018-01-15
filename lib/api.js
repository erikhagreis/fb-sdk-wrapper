'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apiFactory;
function apiFactory(FB) {
  /**
   * Make a call to the Graph API.
   *
   * https://developers.facebook.com/docs/javascript/reference/FB.api
   * https://developers.facebook.com/docs/graph-api/reference/
   *
   * @param {String} path - endpoint path to call
   * @param {String} method - (optional) http method to use
   * @param {Object} params - (optional) parameters for the Graph API call
   *
   * @return {Promise} for the reply from FB
   */
  return function api(path) {
    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      FB.api.apply(FB, [path].concat(rest, [function (response) {
        if (!response) {
          reject('No response from Facebook');
        } else if (response.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      }]));
    });
  };
}