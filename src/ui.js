import loadEnforcer from './loadEnforcer';

/**
 * Used to trigger different forms of Facebook created UI dialogs, such as the
 * Feed dialog, or the Requests dialog.
 *
 * https://developers.facebook.com/docs/javascript/reference/FB.ui/
 *
 * @param {Object} params - parameters for the Graph API call
 */
const ui = loadEnforcer((FB, params = {}) => {
  return new Promise((resolve, reject) => {
    FB.ui(params, response => {
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

export default ui;
