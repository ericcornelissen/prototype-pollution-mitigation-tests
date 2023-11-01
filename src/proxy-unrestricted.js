// SPDX-License-Identifier: ISC

import { isNil, isProxyable } from "./_shared.js";

export function setup(base) {
  if (!isProxyable(base)) {
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
  });
}
