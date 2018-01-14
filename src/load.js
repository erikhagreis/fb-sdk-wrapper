import { defaults } from 'lodash';

/**
 * Injects the script for the FB JS SDK into the page.
 *
 * @param {Object} params containing optional settings
 *
 * @return {Promise} for the global window.FB object
 */
export default function load(params = {}) {
  params = defaults({}, params, {
    locale: 'en_US'
  });
  return new Promise((resolve, reject) => {
    if (window.FB) {
      return resolve(window.FB);
    }

    const src = `//connect.facebook.net/${params.locale}/sdk.js`;
    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = src;
    script.async = true;
    script.addEventListener('load', () => resolve(window.FB), false);
    script.addEventListener(
      'error',
      () => reject(`Error loading Facebook JS SDK from ${src}`),
      false
    );

    const sibling = document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(script, sibling);
  });
}
