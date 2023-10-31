// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of deleting a property from an object.
 */

import Benchmark from "benchmark";

const property = "a";
const value = "b";
const base = { /* empty */ };

function canDelete(object) {
  try {
    delete object[property];
    object[property] = value;
    return true;
  } catch (_) {
    return false;
  }
}

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>assign>delete>['x']",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );

  const object = setup(base);

  if (canDelete(object)) {
    suite.add(name, () => {
      delete object[property];
      object[property] = value;
    });
  }

  suite.run();
}
