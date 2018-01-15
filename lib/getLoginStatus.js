"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (FB) {
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
  return function getLoginStatus() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    return new Promise(function (resolve, reject) {
      FB.getLoginStatus(resolve, force);
    });
  };
};