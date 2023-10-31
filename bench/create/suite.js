// SPDX-License-Identifier: ISC

/**
 * A benchmark evaluating the performance of extending an object with a new
 * property.
 */

import Benchmark from "benchmark";

const base = { foo: "bar" };

export function runSuite(name, setup) {
  const suite = new Benchmark.Suite(
    "obj>create",
    {
      onCycle: (event) => {
        const fn = event.currentTarget.name;
        const cycleResult = event.target.toString();
        console.log(fn, "-", cycleResult);
      },
    },
  );


  suite.add(name, () => {
    setup(base);
  });

  suite.run();
}
