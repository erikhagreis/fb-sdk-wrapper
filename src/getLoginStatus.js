export default FB => {
  /**
   * Returns the Facebook Login status of a user, with an authResponse object if
   * they are logged in.
   *
   * https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
   *
   * @param {Object} force - force refreshing the login status by bypassing cache
   *
   * @return {Promise} for the reply from FB
   */
  return function getLoginStatus(force = false) {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(resolve, force);
    });
  };
};
