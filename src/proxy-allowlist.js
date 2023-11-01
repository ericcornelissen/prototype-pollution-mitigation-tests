// SPDX-License-Identifier: ISC

import { isProxyable } from "./_shared.js";

const ALLOWLIST = [
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",
];

export function setup(base) {
  if (!isProxyable(base)) {
    return base;
  }

  return new Proxy(base, {
    get(target, property, _receiver) {
      /// Allow own properties
      if (Object.hasOwn(target, property)) {
        return setup(target[property]);
      }

      /// Allow predefined properties
      if (ALLOWLIST.includes(property)) {
        return setup(target[property]);
      }

      return undefined;
    },
  });
}
