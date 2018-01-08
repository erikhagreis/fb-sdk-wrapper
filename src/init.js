
/**
 * https://developers.facebook.com/docs/javascript/reference/FB.init/v2.11
 * 
 * @param {Object} FB - the window.FB object
 * @param {String} appId - the FB app ID
 * @param {Object} params - Params object
 */
export default function init(FB, appId, params = { 
  xbfml = false, 
  version = 'v2.11' 
}) {
  FB.init({
    appId: appId,
    ...params
  });
}
