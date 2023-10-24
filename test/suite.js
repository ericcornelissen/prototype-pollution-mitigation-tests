// SPDX-License-Identifier: ISC

/**
 * A reusable test suite to test what access an object has to various different
 * kinds of properties.
 */

import assert from "node:assert/strict";
import test from "node:test";

// -----------------------------------------------------------------------------

const noop = () => void 0;

const keys = {
  present: {
    string: "a",
    number: 101,
    symbol: Symbol(),
    function: "fn1",
  },
  absent: {
    string: "b",
    number: 102,
    symbol: Symbol(),
  },
  prototype: {
    string: "c",
    number: 103,
    symbol: Symbol(),
    function: "fn2",
  },
  extend: {
    string: "d",
    number: 104,
    symbol: Symbol(),
  },
  extendPrototype: {
    string: "e",
    number: 105,
    symbol: Symbol(),
  },
};

const values = {
  present: {
    number: {
      initial: 201,
      replace: 202,
    },
    string: {
      initial: "foo",
      override: "bar",
    },
    symbol: {
      initial: "@",
      override: "&",
    },
  },
  prototype: {
    number: {
      initial: 203,
      override: 204,
    },
    string: {
      initial: "hello",
      override: "world",
    },
    symbol: {
      initial: "#",
      override: "%",
    },
  },
  extend: {
    number: 205,
    string: "foobar",
    symbol: "$",
  },
  extendPrototype: {
    number: 205,
    string: "Hello world!",
    symbol: "$",
  },
};

const base = {
  [keys.present.string]: values.present.string.initial,
  [keys.present.number]: values.present.number.initial,
  [keys.present.symbol]: values.present.symbol.initial,
  [keys.present.function]: noop,
};

// -----------------------------------------------------------------------------

function structurallyEqual(actual, expected, message) {
  try {
    assert.equal(actual, expected, message);
  } catch (error) {
    const sameStructure = "Values have same structure but are not reference-equal:"
    if (!error.message.startsWith(sameStructure)) {
      throw error;
    }
  }
}

// -----------------------------------------------------------------------------

export function runSuite(setup) {
  test("obj", async (t) => {
    t.beforeEach((t) => {
      try {
        Object.prototype[keys.prototype.string] = values.prototype.string.initial;
        Object.prototype[keys.prototype.number] = values.prototype.number.initial;
        Object.prototype[keys.prototype.symbol] = values.prototype.symbol.initial;
        Object.prototype[keys.prototype.function] = noop;

        delete Object.prototype[keys.extendPrototype.string];
        delete Object.prototype[keys.extendPrototype.number];
        delete Object.prototype[keys.extendPrototype.symbol];
      } catch (_) { }

      t.obj = setup({ ...base });
    });

    await t.test("access", async (t) => {
      await t.test("present", async (t) => {
        await t.test(".x", (t) => {
          assert.equal("a", keys.present.string);

          assert.equal(t.obj.a, values.present.string.initial);
        });

        await t.test("['x']", (t) => {
          assert.equal(t.obj[keys.present.string], values.present.string.initial);
        });

        await t.test("[42]", (t) => {
          assert.equal(t.obj[keys.present.number], values.present.number.initial);
        });

        await t.test("[Symbol]", (t) => {
          assert.equal(t.obj[keys.present.symbol], values.present.symbol.initial);
        });
      });

      await t.test("absent", async (t) => {
        await t.test(".x", (t) => {
          assert.equal("b", keys.absent.string);

          assert.equal(t.obj.b, undefined);
        });

        await t.test("['x']", (t) => {
          assert.equal(t.obj[keys.absent.string], undefined);
        });

        await t.test("[42]", (t) => {
          assert.equal(t.obj[keys.absent.number], undefined);
        });

        await t.test("[Symbol]", (t) => {
          assert.equal(t.obj[keys.absent.symbol], undefined);
        });
      });

      await t.test("prototype", async (t) => {
        await t.test(".x", (t) => {
          assert.equal("c", keys.prototype.string);

          assert.equal(t.obj.c, values.prototype.string.initial);
        });

        await t.test("['x']", (t) => {
          assert.equal(t.obj[keys.prototype.string], values.prototype.string.initial);
        });

        await t.test("[42]", (t) => {
          assert.equal(t.obj[keys.prototype.number], values.prototype.number.initial);
        });

        await t.test("[Symbol]", (t) => {
          assert.equal(t.obj[keys.prototype.symbol], values.prototype.symbol.initial);
        });
      });

      await t.test(".__proto__", (t) => {
        structurallyEqual(t.obj.__proto__, Object.getPrototypeOf(base));
      });

      await t.test("['__proto__']", (t) => {
        structurallyEqual(t.obj["__proto__"], Object.getPrototypeOf(base));
      });

      await t.test(".constructor", (t) => {
        structurallyEqual(t.obj.constructor, Object.getPrototypeOf(base).constructor);
      });

      await t.test("['constructor']", (t) => {
        structurallyEqual(t.obj["constructor"], Object.getPrototypeOf(base).constructor);
      });
    });

    await t.test("assign", async (t) => {
      await t.test("override", async (t) => {
        await t.test(".x", (t) => {
          assert.equal("a", keys.present.string);

          t.obj.a = values.present.string.override;
          assert.equal(t.obj.a, values.present.string.override);
        });

        await t.test("['x']", (t) => {
          t.obj[keys.present.string] = values.present.string.override;
          assert.equal(t.obj[keys.present.string], values.present.string.override);
        });

        await t.test("[42]", (t) => {
          t.obj[keys.present.number] = values.present.number.override;
          assert.equal(t.obj[keys.present.number], values.present.number.override);
        });

        await t.test("[Symbol]", (t) => {
          t.obj[keys.present.symbol] = values.present.symbol.override;
          assert.equal(t.obj[keys.present.symbol], values.present.symbol.override);
        });

        await t.test(".__proto__.x", (t) => {
          assert.equal("c", keys.prototype.string);

          t.obj.__proto__.c = values.prototype.string.override;
          assert.equal(t.obj.c, values.prototype.string.override);
          assert.equal(Object.prototype.c, values.prototype.string.override);
        });

        await t.test(".__proto__['x']", (t) => {
          t.obj.__proto__[keys.prototype.string] = values.prototype.string.override;
          assert.equal(t.obj[keys.prototype.string], values.prototype.string.override);
          assert.equal(Object.prototype[keys.prototype.string], values.prototype.string.override);
        });

        await t.test(".__proto__[42]", (t) => {
          t.obj.__proto__[keys.prototype.number] = values.prototype.number.override;
          assert.equal(t.obj[keys.prototype.number], values.prototype.number.override);
          assert.equal(Object.prototype[keys.prototype.number], values.prototype.number.override);
        });

        await t.test(".__proto__[Symbol]", (t) => {
          t.obj.__proto__[keys.prototype.symbol] = values.prototype.symbol.override;
          assert.equal(t.obj[keys.prototype.symbol], values.prototype.symbol.override);
          assert.equal(Object.prototype[keys.prototype.symbol], values.prototype.symbol.override);
        });

        await t.test(".constructor.prototype.x", (t) => {
          assert.equal("c", keys.prototype.string);

          t.obj.constructor.prototype.c = values.prototype.string.override;
          assert.equal(t.obj.c, values.prototype.string.override);
          assert.equal(Object.prototype.c, values.prototype.string.override);
        });

        await t.test(".constructor.prototype['x']", (t) => {
          t.obj.constructor.prototype[keys.prototype.string] = values.prototype.string.override;
          assert.equal(t.obj[keys.prototype.string], values.prototype.string.override);
          assert.equal(Object.prototype[keys.prototype.string], values.prototype.string.override);
        });

        await t.test(".constructor.prototype[42]", (t) => {
          t.obj.constructor.prototype[keys.prototype.number] = values.prototype.string.number;
          assert.equal(t.obj[keys.prototype.number], values.prototype.string.number);
          assert.equal(Object.prototype[keys.prototype.number], values.prototype.string.number);
        });

        await t.test(".constructor.prototype[Symbol]", (t) => {
          t.obj.constructor.prototype[keys.prototype.symbol] = values.prototype.symbol.override;
          assert.equal(t.obj[keys.prototype.symbol], values.prototype.symbol.override);
          assert.equal(Object.prototype[keys.prototype.symbol], values.prototype.symbol.override);
        });
      });

      await t.test("delete", async (t) => {
        await t.test(".x", (t) => {
          assert.equal("a", keys.present.string);

          delete t.obj.a;
          assert.ok(!Object.hasOwn(t.obj, keys.present.string));
        });

        await t.test("['x']", (t) => {
          delete t.obj[keys.present.string];
          assert.ok(!Object.hasOwn(t.obj, keys.present.string));
        });

        await t.test("[42]", (t) => {
          delete t.obj[keys.present.number];
          assert.ok(!Object.hasOwn(t.obj, keys.present.number));
        });

        await t.test("[Symbol]", (t) => {
          delete t.obj[keys.present.symbol];
          assert.ok(!Object.hasOwn(t.obj, keys.present.symbol));
        });

        await t.test(".__proto__.x", (t) => {
          assert.equal("c", keys.prototype.string);

          delete t.obj.__proto__.c;
          assert.equal(t.obj.c, undefined);
          assert.equal(Object.prototype.c, undefined);
        });

        await t.test(".__proto__['x']", (t) => {
          delete t.obj.__proto__[keys.prototype.string];
          assert.equal(t.obj[keys.prototype.string], undefined);
          assert.equal(Object.prototype[keys.prototype.string], undefined);
        });

        await t.test(".__proto__[42]", (t) => {
          delete t.obj.__proto__[keys.prototype.number];
          assert.equal(t.obj[keys.prototype.number], undefined);
          assert.equal(Object.prototype[keys.prototype.number], undefined);
        });

        await t.test(".__proto__[Symbol]", (t) => {
          delete t.obj.__proto__[keys.prototype.symbol];
          assert.equal(t.obj[keys.prototype.symbol], undefined);
          assert.equal(Object.prototype[keys.prototype.symbol], undefined);
        });

        await t.test(".constructor.prototype.x", (t) => {
          assert.equal("c", keys.prototype.string);

          delete t.obj.constructor.prototype.c;
          assert.equal(t.obj.c, undefined);
          assert.equal(Object.prototype.c, undefined);
        });

        await t.test(".constructor.prototype['x']", (t) => {
          delete t.obj.constructor.prototype[keys.prototype.string];
          assert.equal(t.obj[keys.prototype.string], undefined);
          assert.equal(Object.prototype[keys.prototype.string], undefined);
        });

        await t.test(".constructor.prototype[42]", (t) => {
          delete t.obj.constructor.prototype[keys.prototype.number];
          assert.equal(t.obj[keys.prototype.number], undefined);
          assert.equal(Object.prototype[keys.prototype.number], undefined);
        });

        await t.test(".constructor.prototype[Symbol]", (t) => {
          delete t.obj.constructor.prototype[keys.prototype.symbol];
          assert.equal(t.obj[keys.prototype.symbol], undefined);
          assert.equal(Object.prototype[keys.prototype.symbol], undefined);
        });
      });

      await t.test("extend", async (t) => {
        await t.test(".x", (t) => {
          assert.equal("d", keys.extend.string);

          t.obj.d = values.extend.string;
          assert.equal(t.obj.d, values.extend.string);
        });

        await t.test("['x']", (t) => {
          t.obj[keys.extend.string] = values.extend.string;
          assert.equal(t.obj[keys.extend.string], values.extend.string);
        });

        await t.test("[42]", (t) => {
          t.obj[keys.extend.number] = values.extend.number;
          assert.equal(t.obj[keys.extend.number], values.extend.number);
        });

        await t.test("[Symbol]", (t) => {
          t.obj[keys.extend.symbol] = values.extend.symbol;
          assert.equal(t.obj[keys.extend.symbol], values.extend.symbol);
        });

        await t.test(".__proto__.x", (t) => {
          assert.equal("e", keys.extendPrototype.string);

          t.obj.__proto__.e = values.extendPrototype.string;
          assert.equal(t.obj.e, values.extendPrototype.string);
          assert.equal(Object.prototype.e, values.extendPrototype.string);
        });

        await t.test(".__proto__['x']", (t) => {
          t.obj.__proto__[keys.extendPrototype.string] = values.extendPrototype.string;
          assert.equal(t.obj[keys.extendPrototype.string], values.extendPrototype.string);
          assert.equal(Object.prototype[keys.extendPrototype.string], values.extendPrototype.string);
        });

        await t.test(".__proto__[42]", (t) => {
          t.obj.__proto__[keys.extendPrototype.number] = values.extendPrototype.number;
          assert.equal(t.obj[keys.extendPrototype.number], values.extendPrototype.number);
          assert.equal(Object.prototype[keys.extendPrototype.number], values.extendPrototype.number);
        });

        await t.test(".__proto__[Symbol]", (t) => {
          t.obj.__proto__[keys.extendPrototype.symbol] = values.extendPrototype.symbol;
          assert.equal(t.obj[keys.extendPrototype.symbol], values.extendPrototype.symbol);
          assert.equal(Object.prototype[keys.extendPrototype.symbol], values.extendPrototype.symbol);
        });

        await t.test(".constructor.prototype.x", (t) => {
          assert.equal("e", keys.extendPrototype.string);

          t.obj.constructor.prototype.e = values.extendPrototype.string;
          assert.equal(t.obj.e, values.extendPrototype.string);
          assert.equal(Object.prototype.e, values.extendPrototype.string);
        });

        await t.test(".constructor.prototype['x']", (t) => {
          t.obj.constructor.prototype[keys.extendPrototype.string] = values.extendPrototype.string;
          assert.equal(t.obj[keys.extendPrototype.string], values.extendPrototype.string);
          assert.equal(Object.prototype[keys.extendPrototype.string], values.extendPrototype.string);
        });

        await t.test(".constructor.prototype[42]", (t) => {
          t.obj.constructor.prototype[keys.extendPrototype.number] = values.extendPrototype.number;
          assert.equal(t.obj[keys.extendPrototype.number], values.extendPrototype.number);
          assert.equal(Object.prototype[keys.extendPrototype.number], values.extendPrototype.number);
        });

        await t.test(".constructor.prototype[Symbol]", (t) => {
          t.obj.constructor.prototype[keys.extendPrototype.symbol] = values.extendPrototype.symbol;
          assert.equal(t.obj[keys.extendPrototype.symbol], values.extendPrototype.symbol);
          assert.equal(Object.prototype[keys.extendPrototype.symbol], values.extendPrototype.symbol);
        });
      });

      await t.test(".__proto__", (t) => {
        assert.doesNotThrow(() => { t.obj.__proto__ = Object.prototype; });
      });

      await t.test("['__proto__']", (t) => {
        assert.doesNotThrow(() => { t.obj["__proto__"] = Object.prototype; });
      });

      await t.test(".constructor", (t) => {
        assert.doesNotThrow(() => { t.obj.constructor = Object.prototype.constructor; });
      });

      await t.test("['constructor']", (t) => {
        assert.doesNotThrow(() => { t.obj["constructor"] = Object.prototype.constructor; });
      });
    });

    await t.test("call", async (t) => {
      await t.test("present", async (t) => {
        await t.test(".x()", (t) => {
          assert.equal("fn1", keys.present.function);

          assert.doesNotThrow(() => t.obj.fn1());
        });

        await t.test("['x']()", (t) => {
          assert.doesNotThrow(() => t.obj[keys.present.function]());
        });
      });

      await t.test("prototype", async (t) => {
        await t.test(".x()", (t) => {
          assert.equal("fn2", keys.prototype.function);

          assert.doesNotThrow(() => t.obj.fn2());
        });

        await t.test("['x']()", (t) => {
          assert.doesNotThrow(() => t.obj[keys.prototype.function]());
        });

        await t.test(".constructor()", (t) => {
          assert.doesNotThrow(() => t.obj.constructor());
        });

        await t.test(".__defineGetter__()", (t) => {
          const prop = "aaa";
          const func = noop;

          assert.doesNotThrow(() => t.obj.__defineGetter__(prop, func));
        });

        await t.test(".__defineSetter__()", (t) => {
          const prop = "bbb";
          const func = noop;

          assert.doesNotThrow(() => t.obj.__defineGetter__(prop, func));
        });

        await t.test(".__lookupGetter__()", (t) => {
          const prop = "ccc";

          assert.doesNotThrow(() => t.obj.__lookupGetter__(prop));
        });

        await t.test(".__lookupSetter__()", (t) => {
          const prop = "ddd";

          assert.doesNotThrow(() => t.obj.__lookupSetter__(prop));
        });

        await t.test(".hasOwnProperty()", (t) => {
          const prop = "eee";

          assert.equal(typeof t.obj.hasOwnProperty(prop), "boolean");
        });

        await t.test(".isPrototypeOf()", (t) => {
          assert.equal(typeof t.obj.isPrototypeOf(Object), "boolean");
        });

        await t.test(".propertyIsEnumerable()", (t) => {
          const prop = "fff";

          assert.equal(typeof t.obj.propertyIsEnumerable(prop), "boolean");
        });

        await t.test(".toLocaleString()", (t) => {
          const locale = "en";

          assert.equal(typeof t.obj.toLocaleString(locale), "string");
        });

        await t.test(".toString()", (t) => {
          assert.equal(typeof t.obj.toString(), "string");
        });

        await t.test(".valueOf()", (t) => {
          assert.doesNotThrow(() => t.obj.valueOf());
        });
      });
    });
  });
}
