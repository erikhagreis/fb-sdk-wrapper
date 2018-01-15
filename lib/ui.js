'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uiFactory;
function uiFactory(FB) {
  /**
   * Used to trigger different forms of Facebook created UI dialogs, such as the
   * Feed dialog, or the Requests dialog.
   *
   * https://developers.facebook.com/docs/javascript/reference/FB.ui/
   *
   * @param {Object} params - parameters for the Graph API call
   */
  return function ui() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return new Promise(function (resolve, reject) {
      FB.ui(params, function (response) {
        if (!response) {
          reject('No response from Facebook');
        } else if (response.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      });
    });
  };
}