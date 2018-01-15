export default function loginFactory(FB) {
  /**
   * Prompts a user to login to your app using the Login dialog in a popup. This
   * method can also be used with an already logged-in user to request additional
   * permissions from them.
   *
   * https://developers.facebook.com/docs/reference/javascript/FB.login
   *
   * @param {Object} options - additional options
   *
   * @return {Promise} for the reply from FB
   */
  return function login(options = {}) {
    return new Promise((resolve, reject) => {
      FB.login(resolve, options);
    });
  };
}
