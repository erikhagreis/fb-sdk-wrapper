'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sdkProvider;

var _getGlobalFB = require('./getGlobalFB');

var _getGlobalFB2 = _interopRequireDefault(_getGlobalFB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Injects the global FB SDK object on demand into the factory which depends on
 * it. Throws an error if FB has not been loaded yet.
 *
 * @param {Function} getGlobalFB getter for the SDK object
 * @param {Function} factory to call and inject the FB SDK into
 */
function sdkProvider(factory) {
  return function () {
    var FB = (0, _getGlobalFB2.default)();
    if (!FB) {
      throw new Error('FB SDK Wrapper cannot call factory ' + factory.name + '; the ' + 'SDK is not loaded yet. Call load() first and wait for its promise ' + 'to resolve.');
    } else {
      return factory(FB).apply(undefined, arguments);
    }
  };
}