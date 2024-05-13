// SPDX-License-Identifier: ISC

import { isNil, isProxyable } from "./_shared.js";

export function setup(base) {
  if (!isProxyable(base)) {
    return base;
  }

  const handler = {
    get(target, property, _proxy) {
      /// Allow own properties
      if (Object.hasOwn(target, property)) {
        const descriptor = Reflect.getOwnPropertyDescriptor(target, property);
        if (descriptor.configurable === false && descriptor.writable === false) {
          return target[property];
        }

        return setup(target[property]);
      }

      /// Allow inherited properties
      let prototype = Object.getPrototypeOf(target);
      while (!isNil(prototype)) {
        if (Object.hasOwn(prototype, property)) {
          return setup(prototype[property]);
        } else {
          prototype = Object.getPrototypeOf(prototype);
        }
      }

      return undefined;
    },
  };

  return new Proxy(base, handler);
}
