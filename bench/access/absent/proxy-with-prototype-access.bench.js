// SPDX-License-Identifier: ISC

import { runSuite } from "./suite.js";

import { setup } from "../../../src/proxy-with-prototype-access.js";

runSuite("Proxy (with prototype access)", setup);
