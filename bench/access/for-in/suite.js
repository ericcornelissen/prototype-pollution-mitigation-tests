// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of accessing properties with for-in.
 */

import Benchmark from "benchmark";

const property = "a";
const value = "b";
const base = { [property]: value };

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>access>absent>for-in",
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
    for (const entry in object) {
      object[entry];
    }
  });

  suite.run();
}
