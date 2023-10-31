// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of extending an object with a new
 * property.
 */

import Benchmark from "benchmark";

let property = 0;
const value = "a";
const testProperty = "aa", testValue = "bb";
const base = { /* empty */ };

function canExtend(object) {
  try {
    object[testProperty] = testValue;
    return true;
  } catch (_) {
    return false;
  }
}

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>assign>extend>['x']",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );

  const object = setup(base);

  if (canExtend(object)) {
    suite.add(name, () => {
      object[(property++ % 0xFFFFFF)] = value;
    });
  }

  suite.run();
}
