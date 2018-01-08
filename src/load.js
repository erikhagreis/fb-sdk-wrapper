export default function load() {
  return new Promise((resolve, reject) => {
    if (window.FB) {
      return resolve(window.FB);
    }

    const script = document.createElement('script');
    script.id = 'facebook-jssdk';
    script.src = '//connect.facebook.net/en_US/sdk.js';
    script.async = true;
    script.addEventListener('load', () => resolve(window.FB), false);
    script.addEventListener('error', () => reject('Error loading Facebook JS SDK'), false);

    const sibling = d.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(script, sibling);
  });
};
