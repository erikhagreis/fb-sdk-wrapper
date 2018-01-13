import getGlobalFB from './getGlobalFB';

/**
 * Injects the global FB SDK object into all methods in this package which 
 * depend on it.
 * Throws an error if FB has not been loaded yet.
 * 
 * @param {Function} method 
 */
export default function loadEnforcer(method) {
  return (...rest) => {
    const FB = getGlobalFB();
    if (!FB) {
      throw new Error(`FB SDK Wrapper cannot call method ${method.name}; the `
        + `SDK is not loaded yet. Call load() first and wait for its promise `
        + `to resolve.`);
    }
    else {
      return method(FB, ...rest);
    }
  }
}
