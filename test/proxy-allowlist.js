// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

runSuite(
  (base) => {
    return new Proxy(base, {
      get(target, property, _receiver) {
        const ALLOWLIST = [
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf",
        ];

        /// Allow own properties
        if (Object.hasOwn(target, property)) {
          return target[property];
        }

        /// Allow predefined properties
        if (ALLOWLIST.includes(property)) {
          return target[property];
        }

        return undefined;
      },
    });
  },
);
