// SPDX-License-Identifier: ISC

/**
 * A benchmark suite evaluating property access performance for various
 * prototype pollution mitigation methods.
 */

import Benchmark from "benchmark";

import * as objectCreateNull from "../src/object-create-null.js"
import * as plainObject from "../src/plain-object.js"
import * as proxyAllowlist from "../src/proxy-allowlist.js"
import * as proxyDenylist from "../src/proxy-denylist.js"
import * as proxyStrict from "../src/proxy-strict.js"
import * as proxyWithPrototypeAccess from "../src/proxy-with-prototype-access.js"

// -----------------------------------------------------------------------------

const presentProperty = "a";
const absentProperty = "b";
const protoProperty = "c";

Object.prototype[protoProperty] = "aa";

const base = { [presentProperty]: "bb" };

const nullObject = objectCreateNull.setup(base);
const object = plainObject.setup(base);
const allowlistProxyObject = proxyAllowlist.setup(base);
const denylistProxyObject = proxyDenylist.setup(base);
const strictProxyObject = proxyStrict.setup(base);
const advancedProxyObject = proxyWithPrototypeAccess.setup(base);

// -----------------------------------------------------------------------------

const objAccessPresentSuite = new Benchmark.Suite(
  "obj>access>present>['x']",
  {
    onCycle: (event) => {
      const fn = event.currentTarget.name;
      const cycleResult = event.target.toString();
      console.log(fn, "-", cycleResult);
    },
  },
);

objAccessPresentSuite.add("plain object", () => {
  object[presentProperty];
});

objAccessPresentSuite.add("Object.create(null)", () => {
  nullObject[presentProperty];
});

objAccessPresentSuite.add("new Proxy (allowlist)", () => {
  allowlistProxyObject[presentProperty];
});

objAccessPresentSuite.add("new Proxy (denylist)", () => {
  denylistProxyObject[presentProperty];
});

objAccessPresentSuite.add("new Proxy (strict)", () => {
  strictProxyObject[presentProperty];
});

objAccessPresentSuite.add("new Proxy (advanced)", () => {
  advancedProxyObject[presentProperty];
});

objAccessPresentSuite.run();

// -----------------------------------------------------------------------------

const objAccessAbsentSuite = new Benchmark.Suite(
  "obj>access>absent>['x']",
  {
    onCycle: (event) => {
      const fn = event.currentTarget.name;
      const cycleResult = event.target.toString();
      console.log(fn, "-", cycleResult);
    },
  },
);

objAccessAbsentSuite.add("plain object", () => {
  object[absentProperty];
});

objAccessAbsentSuite.add("Object.create(null)", () => {
  nullObject[absentProperty];
});

objAccessAbsentSuite.add("new Proxy (allowlist)", () => {
  allowlistProxyObject[absentProperty];
});

objAccessAbsentSuite.add("new Proxy (denylist)", () => {
  denylistProxyObject[absentProperty];
});

objAccessAbsentSuite.add("new Proxy (strict)", () => {
  strictProxyObject[absentProperty];
});

objAccessAbsentSuite.add("new Proxy (advanced)", () => {
  advancedProxyObject[absentProperty];
});

objAccessAbsentSuite.run();

// -----------------------------------------------------------------------------

const objAccessPrototypeSuite = new Benchmark.Suite(
  "obj>access>prototype>['x']",
  {
    onCycle: (event) => {
      const fn = event.currentTarget.name;
      const cycleResult = event.target.toString();
      console.log(fn, "-", cycleResult);
    },
  },
);

objAccessPrototypeSuite.add("plain object", () => {
  object[protoProperty];
});

objAccessPrototypeSuite.add("Object.create(null)", () => {
  nullObject[protoProperty];
});

objAccessPrototypeSuite.add("new Proxy (allowlist)", () => {
  allowlistProxyObject[protoProperty];
});

objAccessPrototypeSuite.add("new Proxy (denylist)", () => {
  denylistProxyObject[protoProperty];
});

objAccessPrototypeSuite.add("new Proxy (strict)", () => {
  strictProxyObject[protoProperty];
});

objAccessPrototypeSuite.add("new Proxy (advanced)", () => {
  advancedProxyObject[protoProperty];
});

objAccessPrototypeSuite.run();
