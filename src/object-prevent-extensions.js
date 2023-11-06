// SPDX-License-Identifier: ISC

export function setup(base) {
  Object.preventExtensions(Object.getPrototypeOf(base));
  return base;
}
