// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

runSuite(
  (base) => {
    Object.seal(Object.prototype);
    return base;
  },
);
