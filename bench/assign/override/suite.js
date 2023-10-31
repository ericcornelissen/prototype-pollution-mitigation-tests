// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of overriding a property.
 */

import Benchmark from "benchmark";

const property = "a";
let value = 0;
const base = { [property]: value };

function canOverride(object) {
  try {
    object[property] = value++;
    return true;
  } catch (_) {
    return false;
  }
}

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>assign>override>['x']",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );

  const object = setup(base);

  if (canOverride(object)) {
    suite.add(name, () => {
      object[property] = value++;
    });
  }

  suite.run();
}
