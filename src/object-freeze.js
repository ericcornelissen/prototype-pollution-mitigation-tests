// SPDX-License-Identifier: ISC

let backupPrototype = Object.prototype;

export function setup(base) {
  Object.freeze(Object.prototype);
  return base;
}
