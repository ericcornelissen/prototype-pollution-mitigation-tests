// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

runSuite(
  (base) => {
    const obj = Object.create(null);
    for (const key of Object.getOwnPropertyNames(base)) {
      obj[key] = base[key];
    }
    for (const key of Object.getOwnPropertySymbols(base)) {
      obj[key] = base[key];
    }

    return obj;
  },
);
