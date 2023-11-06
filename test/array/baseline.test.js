// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

export function setup(base) {
  return [...base];
}

runSuite(setup);
