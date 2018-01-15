export default function logoutFactory(FB) {
  /**
   * The method FB.logout() logs the user out of your site and, in some cases,
   * Facebook.
   *
   * https://developers.facebook.com/docs/reference/javascript/FB.logout
   *
   * @return {Promise} for the reply from FB
   */
  return function logout() {
    return new Promise((resolve, reject) => {
      FB.logout(resolve);
    });
  };
}
