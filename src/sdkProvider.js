import getGlobalFB from './getGlobalFB';

/**
 * Injects the global FB SDK object on demand into the factory which depends on
 * it. Throws an error if FB has not been loaded yet.
 *
 * @param {Function} getGlobalFB getter for the SDK object
 * @param {Function} factory to call and inject the FB SDK into
 */
export default function sdkProvider(factory) {
  return (...rest) => {
    const FB = getGlobalFB();
    if (!FB) {
      throw new Error(
        `FB SDK Wrapper cannot call factory ${factory.name}; the ` +
          `SDK is not loaded yet. Call load() first and wait for its promise ` +
          `to resolve.`
      );
    } else {
      return factory(FB)(...rest);
    }
  };
}
