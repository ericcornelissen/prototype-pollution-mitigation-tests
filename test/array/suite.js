// SPDX-License-Identifier: ISC

/**
 * A reusable test suite to test what access an array has to various different
 * kinds of properties.
 */

import assert from "node:assert/strict";
import test from "node:test";

import { noop, setEqual, structurallyEqual } from "../shared.js";

// -----------------------------------------------------------------------------

const indices = {
  present: 0,
  function: 1,
  absent: 2,
  extend: 3,
}

const keys = {
  prototype: {
    number: 100,
    function: 101,
  },
  extendPrototype: {
    number: 102,
  },
};

const values = {
  present: {
    initial: 200,
    override: 201,
  },
  prototype: {
    number: {
      initial: 202,
      override: 203,
    },
  },
  extend: {
    number: 204,
  },
  extendPrototype: {
    number: 205,
  },
};

const base = [
  values.present.initial,
  noop,
];

// -----------------------------------------------------------------------------

export function runSuite(setup) {
  test("arr", async (t) => {
    t.beforeEach((t) => {
      try {
        Array.prototype[keys.prototype.number] = values.prototype.number.initial;
        Array.prototype[keys.prototype.function] = noop;

        delete Array.prototype[keys.extendPrototype.number];
      } catch (_) { }

      t.arr = setup([...base]);
    });

    await t.test("access", async (t) => {
      await t.test("present", async (t) => {
        await t.test("[42]", (t) => {
          assert.equal(t.arr[indices.present], values.present.initial);
        });
      });

      await t.test("absent", async (t) => {
        await t.test("[42]", (t) => {
          assert.equal(t.arr[indices.absent], undefined);
        });
      });

      await t.test("prototype", async (t) => {
        await t.test("[42]", (t) => {
          assert.equal(t.arr[keys.prototype.number], values.prototype.number.initial);
        });
      });

      await t.test(".length", (t) => {
        structurallyEqual(t.arr.length, base.length);
      });

      await t.test(".__proto__", (t) => {
        structurallyEqual(t.arr.__proto__, Object.getPrototypeOf(base));
      });

      await t.test("['__proto__']", (t) => {
        structurallyEqual(t.arr["__proto__"], Object.getPrototypeOf(base));
      });

      await t.test(".constructor", (t) => {
        structurallyEqual(t.arr.constructor, Object.getPrototypeOf(base).constructor);
      });

      await t.test("['constructor']", (t) => {
        structurallyEqual(t.arr["constructor"], Object.getPrototypeOf(base).constructor);
      });

      await t.test("for-in", (t) => {
        const expected = new Set(["0", "1", "100", "101"]);

        const actual = new Set();
        for (const entry in t.arr) {
          actual.add(entry);
        }

        setEqual(actual, expected);
      });

      await t.test("for-of", (t) => {
        const actual = [];
        for (const entry of t.arr) {
          actual.push(entry);
        }

        assert.deepEqual(actual, base);
      });
    });

    await t.test("assign", async (t) => {
      await t.test("override", async (t) => {
        await t.test("[42]", (t) => {
          t.arr[indices.present] = values.present.override;
          assert.equal(t.arr[indices.present], values.present.override);
        });

        await t.test(".__proto__[42]", (t) => {
          t.arr.__proto__[keys.prototype.number] = values.prototype.number.override;
          assert.equal(t.arr[keys.prototype.number], values.prototype.number.override);
          assert.equal(Array.prototype[keys.prototype.number], values.prototype.number.override);
        });

        await t.test(".constructor.prototype[42]", (t) => {
          t.arr.constructor.prototype[keys.prototype.number] = values.prototype.number.override;
          assert.equal(t.arr[keys.prototype.number], values.prototype.number.override);
          assert.equal(Array.prototype[keys.prototype.number], values.prototype.number.override);
        });
      });

      await t.test("delete", async (t) => {
        await t.test("[42]", (t) => {
          delete t.arr[indices.present];
          assert.equal(t.arr[indices.present], undefined);
        });

        await t.test(".__proto__[42]", (t) => {
          delete t.arr.__proto__[keys.prototype.number];
          assert.equal(t.arr[keys.prototype.number], undefined);
          assert.equal(Object.prototype[keys.prototype.number], undefined);
        });

        await t.test(".constructor.prototype[42]", (t) => {
          delete t.arr.constructor.prototype[keys.prototype.number];
          assert.equal(t.arr[keys.prototype.number], undefined);
          assert.equal(Object.prototype[keys.prototype.number], undefined);
        });
      });

      await t.test("extend", async (t) => {
        await t.test("[42]", (t) => {
          t.arr[indices.extend] = values.extend.number;
          assert.equal(t.arr[indices.extend], values.extend.number);
        });

        await t.test(".__proto__[42]", (t) => {
          t.arr.__proto__[keys.extendPrototype.number] = values.extendPrototype.number;
          assert.equal(t.arr[keys.extendPrototype.number], values.extendPrototype.number);
          assert.equal(Array.prototype[keys.extendPrototype.number], values.extendPrototype.number);
        });

        await t.test(".constructor.prototype[42]", (t) => {
          t.arr.constructor.prototype[keys.extendPrototype.number] = values.extendPrototype.number;
          assert.equal(t.arr[keys.extendPrototype.number], values.extendPrototype.number);
          assert.equal(Array.prototype[keys.extendPrototype.number], values.extendPrototype.number);
        });
      });

      await t.test(".__proto__", (t) => {
        assert.doesNotThrow(() => { t.arr.__proto__ = Array.prototype; });
      });

      await t.test("['__proto__']", (t) => {
        assert.doesNotThrow(() => { t.arr["__proto__"] = Array.prototype; });
      });

      await t.test(".constructor", (t) => {
        assert.doesNotThrow(() => { t.arr.constructor = Array.prototype.constructor; });
      });

      await t.test("['constructor']", (t) => {
        assert.doesNotThrow(() => { t.arr["constructor"] = Array.prototype.constructor; });
      });
    });

    await t.test("call", async (t) => {
      await t.test("present", async (t) => {
        await t.test("[42]()", (t) => {
          assert.doesNotThrow(() => t.arr[indices.function]());
        });
      });

      await t.test("prototype", async (t) => {
        await t.test("[42]()", (t) => {
          assert.doesNotThrow(() => t.arr[keys.prototype.function]());
        });

        await t.test(".constructor()", (t) => {
          assert.doesNotThrow(() => t.arr.constructor());
        });

        await t.test("[@@iterator]()", (t) => {
          assert.doesNotThrow(() => t.arr[Symbol.iterator]());
        });

        await t.test(".at()", (t) => {
          const index = 0;

          assert.doesNotThrow(() => t.arr.at(index));
        });

        await t.test(".concat()", (t) => {
          const other = ["foo", "bar"];

          assert.doesNotThrow(() => t.arr.concat(other));
        });

        await t.test(".copyWithin()", (t) => {
          const target = 0, start = 1, end = undefined;

          assert.doesNotThrow(() => t.arr.copyWithin(target, start, end));
        });

        await t.test(".entries()", (t) => {
          assert.doesNotThrow(() => t.arr.entries());
        });

        await t.test(".every()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.every(callbackFn));
        });

        await t.test(".fill()", (t) => {
          const value = 0, start = undefined, end = undefined;

          assert.doesNotThrow(() => t.arr.fill(value, start, end));
        });

        await t.test(".filter()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.filter(callbackFn));
        });

        await t.test(".find()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.find(callbackFn));
        });

        await t.test(".findIndex()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.findIndex(callbackFn));
        });

        await t.test(".findLast()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.findLast(callbackFn));
        });

        await t.test(".findLastIndex()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.findLastIndex(callbackFn));
        });

        await t.test(".flat()", (t) => {
          assert.doesNotThrow(() => t.arr.flat());
        });

        await t.test(".flatMap()", (t) => {
          const callbackFn = (x) => [42];

          assert.doesNotThrow(() => t.arr.flatMap(callbackFn));
        });

        await t.test(".forEach()", (t) => {
          const callbackFn = noop;

          assert.doesNotThrow(() => t.arr.forEach(callbackFn));
        });

        await t.test(".includes()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.includes(callbackFn));
        });

        await t.test(".indexOf()", (t) => {
          const searchElement = 0, fromIndex = undefined;

          assert.doesNotThrow(() => t.arr.indexOf(searchElement, fromIndex));
        });

        await t.test(".join()", (t) => {
          const separator = undefined;

          assert.doesNotThrow(() => t.arr.join(separator));
        });

        await t.test(".keys()", (t) => {
          assert.doesNotThrow(() => t.arr.keys());
        });

        await t.test(".lastIndexOf()", (t) => {
          const searchElement = 0, fromIndex = undefined;

          assert.doesNotThrow(() => t.arr.lastIndexOf(searchElement, fromIndex));
        });

        await t.test(".map()", (t) => {
          const callbackFn = noop;

          assert.doesNotThrow(() => t.arr.map(callbackFn));
        });

        await t.test(".pop()", (t) => {
          assert.doesNotThrow(() => t.arr.pop());
        });

        await t.test(".push()", (t) => {
          const element1 = 9001;

          assert.doesNotThrow(() => t.arr.push(element1));
        });

        await t.test(".reduce()", (t) => {
          const callbackFn = noop, initialValue = undefined;

          assert.doesNotThrow(() => t.arr.reduce(callbackFn, initialValue));
        });

        await t.test(".reduceRight()", (t) => {
          const callbackFn = noop, initialValue = undefined;

          assert.doesNotThrow(() => t.arr.reduceRight(callbackFn, initialValue));
        });

        await t.test(".reverse()", (t) => {
          assert.doesNotThrow(() => t.arr.reverse());
        });

        await t.test(".shift()", (t) => {
          assert.doesNotThrow(() => t.arr.shift());
        });

        await t.test(".slice()", (t) => {
          const start = 0, end = undefined;

          assert.doesNotThrow(() => t.arr.slice(start, end));
        });

        await t.test(".some()", (t) => {
          const callbackFn = () => true;

          assert.doesNotThrow(() => t.arr.some(callbackFn));
        });

        await t.test(".sort()", (t) => {
          assert.doesNotThrow(() => t.arr.sort());
        });

        await t.test(".splice()", (t) => {
          const start = 0, deleteCount = 1, item1 = 2;

          assert.doesNotThrow(() => t.arr.splice(start, deleteCount, item1));
        });

        await t.test(".toLocaleString()", (t) => {
          const locale = "en";

          assert.equal(typeof t.arr.toLocaleString(locale), "string");
        });

        await t.test(".toReversed()", (t) => {
          assert.doesNotThrow(() => t.arr.toReversed());
        });

        await t.test(".toSorted()", (t) => {
          assert.doesNotThrow(() => t.arr.toSorted());
        });

        await t.test(".toSpliced()", (t) => {
          const start = 0, deleteCount = 1, item1 = 2;

          assert.doesNotThrow(() => t.arr.toSpliced(start, deleteCount, item1));
        });

        await t.test(".toString()", (t) => {
          assert.equal(typeof t.arr.toString(), "string");
        });

        await t.test(".unshift()", (t) => {
          const element1 = 9002;

          assert.doesNotThrow(() => t.arr.unshift(element1));
        });

        await t.test(".values()", (t) => {
          assert.doesNotThrow(() => t.arr.values());
        });

        await t.test(".values()", (t) => {
          const index = 0, value = 1;

          assert.doesNotThrow(() => t.arr.with(index, value));
        });
      });
    });

    await t.test("Array.isArray()", (t) => {
      assert.ok(Array.isArray(t.arr));
    });
  });
}
