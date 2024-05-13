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

  const handler = {
    get(target, property, _receiver) {
      if (handler.has(target, property)) {
        return setup(target[property]);
      }

      return undefined;
    },
    has(target, property) {
      if (Object.hasOwn(target, property)) {
        return true;
      }

      // This is checked after `Object.hasOwn` because we don't want to prevent
      // access to properties explicitly added to the object. This assumes the
      // object was created in a trusted setting and could be problematic if say
      // `{}.__proto__ = Object.prototype`.
      if (property in target && !DENYLIST.includes(property)) {
        return true;
      }

      return false;
    },
  };

  return new Proxy(base, handler);
}
