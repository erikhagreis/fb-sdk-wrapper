"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initFactory;

var _lodash = require("lodash");

function initFactory(FB) {
  /**
   * Used to initialize and setup the SDK. All other SDK methods must be called
   * after this one.
   *
   * https://developers.facebook.com/docs/javascript/reference/FB.init/v2.11
   * https://developers.facebook.com/apps/
   *
   * @param {Object} params - Params object
   */
  return function init() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    params = (0, _lodash.defaults)({}, params, {
      xfbml: false,
      version: 'v2.11'
    });

    if (!params.appId) {
      throw new Error('FB.init: params.appId is required.');
    }

    FB.init(params);
  };
}