// SPDX-License-Identifier: ISC

const ALLOWLIST = [
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf",
];

export function setup(base) {
  return new Proxy(base, {
    get(target, property, _receiver) {
      /// Allow own properties
      if (Object.hasOwn(target, property)) {
        return target[property];
      }

      /// Allow predefined properties
      if (ALLOWLIST.includes(property)) {
        return target[property];
      }

      return undefined;
    },
  });
}
