// SPDX-License-Identifier: ISC

import { isArray, isProxyable } from "./_shared.js";

const ALLOWLIST_FOR_OBJECT = [
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",
];

const ALLOWLIST_FOR_ARRAY = [
  "at",
  "concat",
  "copyWithin",
  "entries",
  "every",
  "fill",
  "filter",
  "find",
  "findIndex",
  "findLast",
  "findLastIndex",
  "flat",
  "flatMap",
  "forEach",
  "includes",
  "indexOf",
  "join",
  "keys",
  "lastIndexOf",
  "map",
  "pop",
  "reduce",
  "reduceRight",
  "reverse",
  "shift",
  "slice",
  "some",
  "sort",
  "splice",
  "toLocaleString",
  "toReversed",
  "toSorted",
  "toSpliced",
  "toString",
  "unshift",
  "values",
  "with",
];

export function setup(base) {
  if (!isProxyable(base)) {
    return base;
  }

  let allowlist = ALLOWLIST_FOR_OBJECT;
  if (isArray(base)) {
    allowlist = ALLOWLIST_FOR_ARRAY;
  }

  return new Proxy(base, {
    get(target, property, _receiver) {
      /// Allow own properties
      if (Object.hasOwn(target, property)) {
        return setup(target[property]);
      }

      /// Allow predefined properties
      if (allowlist.includes(property)) {
        return setup(target[property]);
      }

      return undefined;
    },
  });
}
