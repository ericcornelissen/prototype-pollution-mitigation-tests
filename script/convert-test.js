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

const test = process.argv[2];

// -----------------------------------------------------------------------------

const srcFile = process.argv[3];
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

const testObjResults = fs.readFileSync(OUT_FILE)
  .toString()
  .match(/<!-- START:TEST:obj -->[^]+<!-- END:TEST:obj -->/gm);
const testArrResults = fs.readFileSync(OUT_FILE)
  .toString()
  .match(/<!-- START:TEST:arr -->[^]+<!-- END:TEST:arr -->/gm);
const benchResults = fs.readFileSync(OUT_FILE)
  .toString()
  .match(/<!-- START:BENCH -->[^]+<!-- END:BENCH -->/gm);

let markdown;
if (test === "obj") {
  markdown = `${preamble()}

## Functionality

<!-- START:TEST:obj -->
### Object

${table}
<!-- END:TEST:obj -->

${testArrResults}

${benchResults}
`;
} else if (test === "arr") {
  markdown = `${preamble()}

## Functionality

${testObjResults}

<!-- START:TEST:arr -->
### Array

${table}
<!-- END:TEST:arr -->

${benchResults}
`;
} else {
  throw new Error(`Unknown test type '${test}'`);
}

fs.writeFileSync(OUT_FILE, markdown);
