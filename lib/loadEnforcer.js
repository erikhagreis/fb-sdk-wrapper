'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadEnforcer;

var _getGlobalFB = require('./getGlobalFB');

var _getGlobalFB2 = _interopRequireDefault(_getGlobalFB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Injects the global FB SDK object into all methods in this package which 
 * depend on it.
 * Throws an error if FB has not been loaded yet.
 * 
 * @param {Function} method 
 */
function loadEnforcer(method) {
  return function () {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    var FB = (0, _getGlobalFB2.default)();
    if (!FB) {
      throw new Error('FB SDK Wrapper cannot call method ' + method.name + '; the ' + 'SDK is not loaded yet. Call load() first and wait for its promise ' + 'to resolve.');
    } else {
      return method.apply(undefined, [FB].concat(rest));
    }
  };
}