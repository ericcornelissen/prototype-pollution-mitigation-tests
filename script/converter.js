// SPDX-License-Identifier: ISC

/**
 * A script to convert the file outputted by the `run-tests.sh` script into a
 * MarkDown table (and corresponding file) for manual comparison by humans.
 */

import cp from "node:child_process";
import fs from "node:fs";
import process from "node:process";

// -----------------------------------------------------------------------------

const NAME_KEY = Symbol();

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
    let mark = " ";
    if (resultSet.get(testCase) === "+") {
      mark = "X";
    }

    lineBuilder.push("|", mark);
  }

  tableBuilder.push(lineBuilder.join(" "));
}

const table = tableBuilder.join("\n");

// -----------------------------------------------------------------------------

const date = new Date();
const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

const nodeVersion = cp.execSync("node --version").toString().trim();

const markdown = `<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->
<!-- FILE GENERATED, DO NOT EDIT, -->

# Results

This file contains the last recorded test results for this project. It was run
on ${today} against Node.js ${nodeVersion}.

_This file should not be edited manually, to update it run \`./run-tests.sh\`
from the root of this project._

## Overview

${table}
`;

fs.writeFileSync("RESULTS.md", markdown);
