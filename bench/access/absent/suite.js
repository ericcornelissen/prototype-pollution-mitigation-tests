// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of accessing an absent property.
 */

import Benchmark from "benchmark";

const property = "a";
const base = { /* absent */ };

function canAccessProperty(object) {
  try {
    return object[property] === undefined;
  } catch(_) {
    return false;
  }
}

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

  if (canAccessProperty(object)) {
    suite.add(name, () => {
      object[property];
    });
  }

  suite.run();
}
