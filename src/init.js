import { defaults } from 'lodash';
import loadEnforcer from './loadEnforcer';

/**
 * Used to initialize and setup the SDK. All other SDK methods must be called
 * after this one.
 *
 * https://developers.facebook.com/docs/javascript/reference/FB.init/v2.11
 * https://developers.facebook.com/apps/
 *
 * @param {Object} params - Params object
 */
const init = loadEnforcer((FB, params = {}) => {
  params = defaults({}, params, {
    xbfml: false,
    version: 'v2.11'
  });
  if (!params.appId) {
    throw new Error('FB.init: params.appId is required.');
  }
  FB.init(params);
});

export default init;
