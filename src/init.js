import loadEnforcer from './loadEnforcer';


/**
 * Used to initialize and setup the SDK. All other SDK methods must be called 
 * after this one.
 * 
 * https://developers.facebook.com/docs/javascript/reference/FB.init/v2.11
 * https://developers.facebook.com/apps/
 * 
 * @param {Object} FB - the window.FB object
 * @param {String} appId - the FB app ID
 * @param {Object} params - Params object (optional)
 */
const init = loadEnforcer((FB, appId, params = { 
  xbfml = false, 
  version = 'v2.11' 
}) => {
  FB.init({
    appId: appId,
    ...params
  });
});

export default init;
