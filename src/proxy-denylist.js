// SPDX-License-Identifier: ISC

import { isProxyable } from "./_shared.js";

const DENYLIST = [
  "constructor",
  "__proto__",
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

      /// Allow non-blocked properties
      // This is checked after `Object.hasOwn` because we don't want to prevent
      // access to properties explicitly added to the object. This assumes the
      // object was created in a trusted setting and could be problematic if say
      // `{}.__proto__ = Object.prototype`.
      if (!DENYLIST.includes(property)) {
        return setup(target[property]);
      }

      return undefined;
    },
  });
}
