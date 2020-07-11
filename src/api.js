export default function apiFactory(FB) {
  /**
   * Make a call to the Graph API.
   *
   * https://developers.facebook.com/docs/javascript/reference/FB.api
   * https://developers.facebook.com/docs/graph-api/reference/
   *
   * @param {String} path - endpoint path to call
   * @param {String} method - (optional) http method to use
   * @param {Object} params - (optional) parameters for the Graph API call
   *
   * @return {Promise} for the reply from FB
   */
  return function api(path, ...rest) {
    return new Promise((resolve, reject) => {
      FB.api(path, ...rest, (response) => {
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
}
