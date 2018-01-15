"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loginFactory;
function loginFactory(FB) {
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
  return function login() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return new Promise(function (resolve, reject) {
      FB.login(resolve, options);
    });
  };
}