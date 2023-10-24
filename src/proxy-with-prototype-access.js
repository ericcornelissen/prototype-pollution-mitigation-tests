// SPDX-License-Identifier: ISC

function isNil(value) {
  return value === null || value === undefined;
}

export function setup(base) {
  if (
    isNil(base)
    ||
    typeof base === "number"
    ||
    typeof base === "string"
  ) {
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
