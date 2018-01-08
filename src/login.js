export default { login, getLoginStatus };

/**
 * https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
 * 
 * @param {Object} FB - the window.FB object
 * @param {Object} options - additional options
 */
function login(FB, options = {}) {
  return new Promise((resolve, reject) => {
    FB.login(response => {
      resolve(reponse);
    });
  });
}

/**
 * https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus
 * 
 * @param {Object} FB - the window.FB object
 * @param {Object} force - force refreshing the login status by bypassing cache
 */
function getLoginStatus(FB, force = false) {
  return new Promise((resolve, reject) => {
    FB.getLoginStatus(response => {
      resolve(reponse);
    }, force);
  });
}


