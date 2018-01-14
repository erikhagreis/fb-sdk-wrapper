'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = load;

var _lodash = require('lodash');

/**
 * Injects the script for the FB JS SDK into the page.
 *
 * @param {Object} params containing optional settings
 *
 * @return {Promise} for the global window.FB object
 */
function load() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  params = (0, _lodash.defaults)({}, params, {
    locale: 'en_US'
  });
  return new Promise(function (resolve, reject) {
    if (window.FB) {
      return resolve(window.FB);
    }

    var src = '//connect.facebook.net/' + params.locale + '/sdk.js';
    var script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = src;
    script.async = true;
    script.addEventListener('load', function () {
      return resolve(window.FB);
    }, false);
    script.addEventListener('error', function () {
      return reject('Error loading Facebook JS SDK from ' + src);
    }, false);

    var sibling = document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(script, sibling);
  });
}