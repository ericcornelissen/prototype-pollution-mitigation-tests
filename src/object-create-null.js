// SPDX-License-Identifier: ISC

export function setup(base) {
  const obj = Object.create(null);
  for (const key of Object.getOwnPropertyNames(base)) {
    obj[key] = base[key];
  }
  for (const key of Object.getOwnPropertySymbols(base)) {
    obj[key] = base[key];
  }

  return obj;
}
