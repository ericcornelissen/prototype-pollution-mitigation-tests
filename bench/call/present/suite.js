// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of calling a function at a property.
 */

import Benchmark from "benchmark";

const property = "a";
const fn = () => { };
const base = { [property]: fn };

function canCallProperty(object) {
  try {
    object[property]();
    return true;
  } catch (_) {
    return false;
  }
}

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>call>present>['x']()",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );

  const object = setup(base);

  if (canCallProperty(object)) {
    suite.add(name, () => {
      object[property]();
    });
  }

  suite.run();
}
