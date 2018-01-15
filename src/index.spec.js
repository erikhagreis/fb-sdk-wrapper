import { last } from 'lodash';
import * as Facebook from './index';

describe('FB SDK wrapper', () => {
  beforeEach(() => {
    global.window.FB = {
      api: jest.fn((...rest) => {
        last(rest)('response!');
      }),
      getLoginStatus: jest.fn(callback => {
        callback('response!');
      }),
      init: jest.fn(),
      login: jest.fn(callback => {
        callback('response!');
      }),
      logout: jest.fn(callback => {
        callback('response!');
      }),
      ui: jest.fn((params, callback) => {
        callback('response!');
      })
    };
  });

  describe('the api method', () => {
    it('returns a promise for a response', done => {
      Facebook.api('/dewolfficial/posts').then(response => {
        expect(response).toBe('response!');
        done();
      });
    });

    describe('different ways to call the api method', () => {
      it('handles a call signature: <path>', () => {
        Facebook.api('/dewolfficial/posts');
        expect(FB.api).toHaveBeenCalledWith(
          '/dewolfficial/posts',
          expect.any(Function)
        );
      });

      it('handles a call signature: <path>, <method>', () => {
        Facebook.api('/168546367204_10155245614532205', 'delete');
        expect(FB.api).toHaveBeenCalledWith(
          '/168546367204_10155245614532205',
          'delete',
          expect.any(Function)
        );
      });

      it('handles a call signature: <path>, <params>', () => {
        Facebook.api('/dewolfficial/posts', {
          fields: 'created_time,id,message'
        });
        expect(FB.api).toHaveBeenCalledWith(
          '/dewolfficial/posts',
          {
            fields: 'created_time,id,message'
          },
          expect.any(Function)
        );
      });

      it('handles a call signature: <path>, <method>, <params>', () => {
        Facebook.api('/dewolfficial/posts', 'get', {
          fields: 'created_time,id,message'
        });
        expect(FB.api).toHaveBeenCalledWith(
          '/dewolfficial/posts',
          'get',
          {
            fields: 'created_time,id,message'
          },
          expect.any(Function)
        );
      });
    });
  });

  describe('the getLoginStatus method', () => {
    it('calls the FB method as expected', () => {
      Facebook.getLoginStatus(false);
      expect(FB.getLoginStatus).toHaveBeenCalledWith(
        expect.any(Function),
        false
      );
    });

    it('returns a promise for a response', done => {
      Facebook.getLoginStatus().then(response => {
        expect(response).toBe('response!');
        done();
      });
    });
  });

  describe('the init method', () => {
    it('calls the FB method as expected', () => {
      Facebook.init({ appId: '1234567890|dummy-app-id' });
      expect(FB.init).toHaveBeenCalled();
    });
  });

  describe('the login method', () => {
    it('calls the FB method as expected', () => {
      Facebook.login({
        scope: 'public_profile,email,user_friends',
        return_scopes: true
      });
      expect(FB.login).toHaveBeenCalledWith(expect.any(Function), {
        scope: 'public_profile,email,user_friends',
        return_scopes: true
      });
    });

    it('returns a promise for a response', done => {
      Facebook.login().then(response => {
        expect(response).toBe('response!');
        done();
      });
    });
  });

  describe('the logout method', () => {
    it('calls the FB method as expected', () => {
      Facebook.logout();
      expect(FB.logout).toHaveBeenCalledWith(expect.any(Function));
    });

    it('returns a promise for a response', done => {
      Facebook.logout().then(response => {
        expect(response).toBe('response!');
        done();
      });
    });
  });

  describe('the ui method', () => {
    it('calls the FB method as expected', () => {
      Facebook.ui({
        method: 'share',
        href: 'https://github.com/erikhagreis/fb-sdk-wrapper'
      });
      expect(FB.ui).toHaveBeenCalledWith(
        {
          method: 'share',
          href: 'https://github.com/erikhagreis/fb-sdk-wrapper'
        },
        expect.any(Function)
      );
    });

    it('returns a promise for a response', done => {
      Facebook.ui().then(response => {
        expect(response).toBe('response!');
        done();
      });
    });
  });
});
