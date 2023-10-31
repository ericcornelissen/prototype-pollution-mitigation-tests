// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

import { setup } from "../../../src/proxy-denylist.js";

runSuite("Proxy (denylist)", setup);
