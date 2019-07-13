# fb-sdk-wrapper
Wraps around the Facebook Javascript SDK to make it usable as a ES6 module. Instead of having to add a script tag to your html like it's still 2010, just import this module and it will do it for you. As a bonus it will provide you with a nicer api by using promises.

Essentially, this library exposes functions with almost the same signature as the official JS SDK. The only difference is that instead of requiring callback functions as parameters of the SDK functions, the wrapper will return a promise for the response value.

fb-sdk-wrapper focuses on the 'core' authentication, graph API and UI methods and makes them a little nicer to use. The other functionality can by accessed by simply referring to `window.FB` (after the `load` function has resolved).

## Installing
Use the package manager of your choosing:

```bash
# npm
npm install fb-sdk-wrapper

# yarn
yarn add fb-sdk-wrapper
```

## Usage
Here are some examples of how to use FB SDK Wrapper.

Again, the main thing to keep in mind is that this API tries to follow the official [FB JS SDK reference](https://developers.facebook.com/docs/javascript/reference) as closely as possible except that all callbacks are replaced by promises for the response.

### Loading and initializing the SDK
The first steps to get the SDK to work:

```javascript
import * as Facebook from 'fb-sdk-wrapper';

Facebook.load()
  .then(() => {
    Facebook.init({
      appId: config.appId
    });
  });
```

### Authentication and app authorisation
Next step is to log in and get the user to authorise your app.

```javascript
import * as Facebook from 'fb-sdk-wrapper';

// Get current state
Facebook.getLoginStatus()
  .then(response) => {
    if (response.status === 'connected') {
      // logged in
    } else {
      // not logged in
    }
  });

// Login + get basic authorisation ('public profile')
Facebook.login()
  .then((response) => {
    if (response.status === 'connected') {
      // logged in
    } else {
      // not logged in
    }
  });

// Login + get authorisation for additional scopes
Facebook.login({
    scope: 'public_profile,email,user_friends',
    return_scopes: true
  })
  .then((response) => {
    if (response.status === 'connected') {
      // logged in
    } else {
      // not logged in
    }
  });

// Logout
Facebook.logout()
  .then((response) => {
    // logged out
  });

```

### Graph API queries
When that's out of the way, you can query the graph API:

```javascript
import * as Facebook from 'fb-sdk-wrapper';

// Simplest call
Facebook.api('/dewolfficial/posts')
  .then((response) => {
    // data's here!
  });

// A bit more elaborate request
Facebook.api('/168546367204_10155245614532205', 'get', {
    fields: 'created_time,id,message,message_tags'
  })
  .then((response) => {
    // data's here!
  });
```

## Dependencies
None.

## License
MIT, see [LICENSE](./LICENSE).

## Author
Erik Hagreis
