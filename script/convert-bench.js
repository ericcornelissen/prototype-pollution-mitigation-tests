// SPDX-License-Identifier: ISC

/**
 * A script to convert the file outputted by the `run-benchmarks.sh` script into
 * a MarkDown code snippet (and corresponding file) for manual review by humans.
 */

import fs from "node:fs";
import process from "node:process";

import { preamble } from "./convert-shared.js"

// -----------------------------------------------------------------------------

const OUT_FILE = "RESULTS.md";

// -----------------------------------------------------------------------------

const srcFile = process.argv[2];
const benchResults = fs.readFileSync(srcFile).toString().trim();

// -----------------------------------------------------------------------------

const testObjResults = fs.readFileSync(OUT_FILE)
  .toString()
  .match(/<!-- START:TEST:obj -->[^]+<!-- END:TEST:obj -->/gm);
const testArrResults = fs.readFileSync(OUT_FILE)
  .toString()
  .match(/<!-- START:TEST:arr -->[^]+<!-- END:TEST:arr -->/gm);

const markdown = `${preamble()}

## Functionality

${testObjResults}

${testArrResults}

<!-- START:BENCH -->
## Benchmark

Note: if an operation is not supported by a mitigation it is omitted from the
benchmark results.

\`\`\`
${benchResults}
\`\`\`
<!-- END:BENCH -->
`;

fs.writeFileSync(OUT_FILE, markdown);
