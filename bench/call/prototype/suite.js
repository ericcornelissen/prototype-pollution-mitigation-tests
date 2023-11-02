// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of calling a function at a prototype
 * property.
 */

import Benchmark from "benchmark";

const property = "a";
const fn = () => { };
const base = { /* empty */ };

Object.prototype[property] = fn;

function canCallPrototypeProperty(object) {
  try {
    object[property]();
    return true;
  } catch (_) {
    return false;
  }
}

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>call>prototype>['x']()",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );

  const object = setup(base);

  if (canCallPrototypeProperty(object)) {
    suite.add(name, () => {
      object[property]();
    });
  }

  suite.run();
}
