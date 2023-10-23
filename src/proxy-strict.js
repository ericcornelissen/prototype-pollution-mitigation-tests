// SPDX-License-Identifier: ISC

export function setup(base) {
  return new Proxy(base, {
    get(target, property, _receiver) {
      /// Allow own properties
      if (Object.hasOwn(target, property)) {
        return target[property];
      }

      return undefined;
    },
  });
}
