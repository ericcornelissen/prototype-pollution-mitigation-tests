// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of accessing a prototype property.
 */

import Benchmark from "benchmark";

const property = "a";
const value = "b";
const base = { /* empty */ };

Object.prototype[property] = value;

function canAccessPrototypeProperty(object) {
  try {
    return object[property] === value;
  } catch (_) {
    return false;
  }
}

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>access>prototype>['x']",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );

  const object = setup(base);

  if (canAccessPrototypeProperty(object)) {
    suite.add(name, () => {
      object[property];
    });
  }

  suite.run();
}
