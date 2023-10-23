// SPDX-License-Identifier: ISC

const DENYLIST = [
  "constructor",
  "__proto__",
];

export function setup(base) {
  return new Proxy(base, {
    get(target, property, _receiver) {
      /// Allow own properties
      if (Object.hasOwn(target, property)) {
        return target[property];
      }

      /// Allow non-blocked properties
      if (!DENYLIST.includes(property)) {
        return target[property];
      }

      return undefined;
    },
  });
}
