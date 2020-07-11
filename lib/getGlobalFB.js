"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getGlobalFB;

/**
 * Returns the window.FB object and allows access to all its functionality
 * directly.
 *
 * https://developers.facebook.com/docs/javascript/reference/v7.0
 *
 * @return {Object} - the global window.FB object
 */
function getGlobalFB() {
  return window.FB;
}