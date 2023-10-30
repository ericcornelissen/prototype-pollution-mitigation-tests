// SPDX-License-Identifier: ISC

/**
 * A benchmark suite evaluating property access performance for various
 * prototype pollution mitigation methods.
 */

import Benchmark from "benchmark";

const property = "a";
const base = { /* absent */ };

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>access>absent>['x']",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );

  const object = setup(base);

  suite.add(name, () => {
    object[property];
  });

  suite.run();
}