// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

runSuite(
  (base) => {
    return new Proxy(base, {
      get(target, property, _receiver) {
        /// Allow own properties
        if (Object.hasOwn(target, property)) {
          return target[property];
        }

        /// Allow inherited properties
        if (Object.hasOwn(Object.prototype, property)) {
          return Object.prototype[property];
        }

        return undefined;
      },
    });
  },
);
