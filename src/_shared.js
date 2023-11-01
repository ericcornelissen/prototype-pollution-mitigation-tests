// SPDX-License-Identifier: ISC

export function isNil(value) {
  return value === null || value === undefined;
}

function isPrimitive(value) {
  return typeof value === "number" || typeof value === "string";
}

export function isProxyable(value) {
  return !(isNil(value) || isPrimitive(value));
}
