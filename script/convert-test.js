// SPDX-License-Identifier: ISC

/**
 * A script to convert the file outputted by the `run-tests.sh` script into a
 * MarkDown table (and corresponding file) for manual comparison by humans.
 */

import fs from "node:fs";
import process from "node:process";

import { preamble } from "./convert-shared.js"

// -----------------------------------------------------------------------------

const NAME_KEY = Symbol();
const OUT_FILE = "RESULTS.md";

const results = [];
const testCases = new Set();

// -----------------------------------------------------------------------------

const srcFile = process.argv[2];
const lines = fs.readFileSync(srcFile).toString().split(/\n/);
for (const line of lines) {
  if (line.length === 0) {
    /// skip empty lines
  } else if (line.startsWith("#")) {
    /// new section
    const name = line.substring(2, /* end */);

    const resultSet = new Map([[NAME_KEY, name]]);
    results.push(resultSet);
  } else {
    /// data point
    const [testName, testResult] = line.split(/\t/);

    const resultSet = results[results.length - 1];
    resultSet.set(testName, testResult);

    testCases.add(testName);
  }
}

// -----------------------------------------------------------------------------

const tableBuilder = [];

/// Create table head
const tableHead = ["test"];
for (const resultSet of results) {
  tableHead.push("|", resultSet.get(NAME_KEY));
}
tableBuilder.push(tableHead.join(" "))

const tableDivider = ["---"];
for (const _ of results) {
  tableDivider.push("|", "---");
}
tableBuilder.push(tableDivider.join(" "))

/// Create table body
for (const testCase of testCases) {
  const lineBuilder = [`\`${testCase}\``];
  for (const resultSet of results) {
    const mark = resultSet.get(testCase) === "+" ? "X" : " ";
    lineBuilder.push("|", mark);
  }

  tableBuilder.push(lineBuilder.join(" "));
}

const table = tableBuilder.join("\n");

// -----------------------------------------------------------------------------

const benchResults = fs.readFileSync(OUT_FILE)
  .toString()
  .match(/<!-- START:BENCH -->[^]+<!-- END:BENCH -->/gm);

const markdown = `${preamble()}

<!-- START:TEST -->
## Functionality

${table}
<!-- END:TEST -->

${benchResults}
`;

fs.writeFileSync(OUT_FILE, markdown);
