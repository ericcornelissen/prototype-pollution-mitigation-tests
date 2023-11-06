// SPDX-License-Identifier: ISC

import assert from "node:assert/strict";

export const noop = () => void 0;

export function structurallyEqual(actual, expected, message) {
  try {
    assert.equal(actual, expected, message);
  } catch (error) {
    const sameStructure = "Values have same structure but are not reference-equal:"
    if (!error.message.startsWith(sameStructure)) {
      throw error;
    }
  }
}
