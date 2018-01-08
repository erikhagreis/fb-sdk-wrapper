/**
 * https://developers.facebook.com/docs/javascript/reference/FB.api
 * https://developers.facebook.com/docs/graph-api/reference/
 * 
 * @param {Object} FB - the window.FB object
 * @param {String} access_token - the accesstoken from login / getloginstatus
 * @param {String} path - endpoint path to call
 * @param {String} method - http method to use
 * @param {Object} params - parameters for the Graph API call
 */
export function apiCall(FB, access_token, path, method = 'get', params = {}) {
  return new Promise((resolve, reject) => {
    FB.api(path, {
      access_token,
      ...params
    },
    (response) => {
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