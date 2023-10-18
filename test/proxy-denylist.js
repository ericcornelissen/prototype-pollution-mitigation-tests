// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

runSuite(
  (base) => {
    return new Proxy(base, {
      get(target, property, _receiver) {
        const DENYLIST = [
          "constructor",
          "__proto__",
        ];

        /// Allow own properties
        if (Object.hasOwn(target, property)) {
          return target[property];
        }

        /// Allow non-blocked properties
        if (!DENYLIST.includes(property)) {
          return target[property];
        }

        return undefined;
      },
    });
  },
);
