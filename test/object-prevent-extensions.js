// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

runSuite(
  (base) => {
    Object.preventExtensions(Object.prototype);
    return base;
  },
);
