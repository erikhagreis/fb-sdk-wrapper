export { default as load } from './load';
export { default as getGlobalFB } from './getGlobalFB';

import sdkProvider from './sdkProvider';
import apiFactory from './api';
import getLoginStatusFactory from './getLoginStatus';
import initFactory from './init';
import loginFactory from './login';
import logoutFactory from './logout';
import uiFactory from './ui';

export const api = sdkProvider(apiFactory);
export const getLoginStatus = sdkProvider(getLoginStatusFactory);
export const init = sdkProvider(initFactory);
export const login = sdkProvider(loginFactory);
export const logout = sdkProvider(logoutFactory);
export const ui = sdkProvider(uiFactory);
