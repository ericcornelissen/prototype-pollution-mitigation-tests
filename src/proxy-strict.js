// SPDX-License-Identifier: ISC

import { isProxyable } from "./_shared.js";

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

      return false;
    },
  };

  return new Proxy(base, handler);
}
