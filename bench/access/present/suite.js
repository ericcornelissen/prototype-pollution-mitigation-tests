// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of accessing a present property.
 */

import Benchmark from "benchmark";

const property = "a";
const value = "b";
const base = { [property]: value };

function canAccessProperty(object) {
  try {
    return object[property] === value;
  } catch (_) {
    return false;
  }
}

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>access>present>['x']",
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
