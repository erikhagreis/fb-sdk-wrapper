'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadEnforcer = require('./loadEnforcer');

var _loadEnforcer2 = _interopRequireDefault(_loadEnforcer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to trigger different forms of Facebook created UI dialogs, such as the
 * Feed dialog, or the Requests dialog.
 *
 * https://developers.facebook.com/docs/javascript/reference/FB.ui/
 *
 * @param {Object} params - parameters for the Graph API call
 */
var ui = (0, _loadEnforcer2.default)(function (FB) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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
});

exports.default = ui;