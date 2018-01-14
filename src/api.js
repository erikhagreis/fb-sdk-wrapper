import loadEnforcer from './loadEnforcer';

/**
 * Make an API call to the Graph API.
 *
 * https://developers.facebook.com/docs/javascript/reference/FB.api
 * https://developers.facebook.com/docs/graph-api/reference/
 *
 * @param {String} path - endpoint path to call
 * @param {String} method - http method to use
 * @param {Object} params - parameters for the Graph API call
 *
 * @return {Promise} for the reply from FB
 */
const api = loadEnforcer((FB, path, method = 'get', params = {}) => {
  if (typeof method === 'function') {
    params = method;
    method = 'get';
  }

  return new Promise((resolve, reject) => {
    FB.api(path, method, params, response => {
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

export default api;
