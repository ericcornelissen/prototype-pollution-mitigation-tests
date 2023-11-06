// SPDX-License-Identifier: ISC

export function setup(base) {
  Object.freeze(Object.getPrototypeOf(base));
  return base;
}
