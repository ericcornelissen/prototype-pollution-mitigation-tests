// SPDX-License-Identifier: ISC

function isNil(value) {
  return value === null || value === undefined;
}

function isPrimitive(value) {
  return typeof value === "number" || typeof value === "string";
}

export function setup(base) {
  if (isNil(base) || isPrimitive(base)) {
    return base;
  }

  return new Proxy(base, {
    get(target, property, _proxy) {
      /// Allow own properties
      if (Object.hasOwn(target, property)) {
        return setup(target[property]);
      }

      /// Allow inherited properties
      const prototype = Object.getPrototypeOf(target);
      if (!isNil(property)) {
        if (Object.hasOwn(prototype, property)) {
          return setup(prototype[property]);
        }
      }

      return undefined;
    },

    // Intercepting `[[Call]]` with `apply` is necessary to be able to proxy
    // functions.
    apply(target, thisArg, args) {
      return target.apply(thisArg, args);
    },
  });
}
