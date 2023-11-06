// SPDX-License-Identifier: ISC

export function setup(base) {
  Object.seal(Object.getPrototypeOf(base));
  return base;
}
