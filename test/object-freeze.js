// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

runSuite(
  (base) => {
    Object.freeze(Object.prototype);
    return base;
  },
);
