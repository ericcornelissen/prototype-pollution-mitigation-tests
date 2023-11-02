// SPDX-License-Identifier: ISC

import cp from "node:child_process";

const nodeVersion = () => cp.execSync("node --version").toString().trim();

export const preamble = () => `<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->
<!-- FILE GENERATED, DO NOT EDIT, -->

# Results

This file contains the last recorded test results for this project. It was run
on ${today()} against Node.js ${nodeVersion()}.

_This file should not be edited manually, to update it run \`./run-tests.sh\` or
\`/run-benchmarks.sh\` from the root of this project._`;

const today = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}
