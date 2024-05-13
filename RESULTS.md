<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->
<!-- FILE GENERATED, DO NOT EDIT, -->

# Results

This file contains the last recorded test results for this project. It was run
on 2024-5-13 against Node.js v20.8.0.

_This file should not be edited manually, to update it run `./run-tests.sh` or
`/run-benchmarks.sh` from the root of this project._

## Functionality

<!-- START:TEST:obj -->
### Object

test | Baseline | Object.create | Object.preventExtension | Object.seal | Proxy (strict) | Proxy (allowlist) | Proxy (denylist) | Proxy (unrestricted)
--- | --- | --- | --- | --- | --- | --- | --- | ---
`obj>access>present>.x` | X | X | X | X | X | X | X | X
`obj>access>present>['x']` | X | X | X | X | X | X | X | X
`obj>access>present>[42]` | X | X | X | X | X | X | X | X
`obj>access>present>[Symbol]` | X | X | X | X | X | X | X | X
`obj>access>present>'x' in` | X | X | X | X | X | X | X | X
`obj>access>present>42 in` | X | X | X | X | X | X | X | X
`obj>access>present>[Symbol] in` | X | X | X | X | X | X | X | X
`obj>access>present>{x} =` | X | X | X | X | X | X | X | X
`obj>access>present>{['x']: x} =` | X | X | X | X | X | X | X | X
`obj>access>present>{42: x} =` | X | X | X | X | X | X | X | X
`obj>access>present>{[Symbol]: x} =` | X | X | X | X | X | X | X | X
`obj>access>present>function({x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>present>function({['x']: x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>present>function({42: x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>present>function({[Symbol]: x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>present>(function({x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>present>(function({['x']: x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>present>(function({42: x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>present>(function({[Symbol]: x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>present>(({x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>present>(({['x']: x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>present>(({42: x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>present>(({[Symbol]: x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>absent>.x` | X | X | X | X | X | X | X | X
`obj>access>absent>['x']` | X | X | X | X | X | X | X | X
`obj>access>absent>[42]` | X | X | X | X | X | X | X | X
`obj>access>absent>[Symbol]` | X | X | X | X | X | X | X | X
`obj>access>absent>'x' in` | X | X | X | X | X | X | X | X
`obj>access>absent>42 in` | X | X | X | X | X | X | X | X
`obj>access>absent>[Symbol] in` | X | X | X | X | X | X | X | X
`obj>access>absent>{x} =` | X | X | X | X | X | X | X | X
`obj>access>absent>{['x']: x} =` | X | X | X | X | X | X | X | X
`obj>access>absent>{42: x} =` | X | X | X | X | X | X | X | X
`obj>access>absent>{[Symbol]: x} =` | X | X | X | X | X | X | X | X
`obj>access>absent>function({x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>absent>function({['x']: x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>absent>function({42: x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>absent>function({[Symbol]: x}){return x}` | X | X | X | X | X | X | X | X
`obj>access>absent>(function({x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>absent>(function({['x']: x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>absent>(function({42: x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>absent>(function({[Symbol]: x}){return x})` | X | X | X | X | X | X | X | X
`obj>access>absent>(({x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>absent>(({['x']: x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>absent>(({42: x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>absent>(({[Symbol]: x}) => (x))` | X | X | X | X | X | X | X | X
`obj>access>prototype>.x` | X |   | X | X |   |   | X | X
`obj>access>prototype>['x']` | X |   | X | X |   |   | X | X
`obj>access>prototype>[42]` | X |   | X | X |   |   | X | X
`obj>access>prototype>[Symbol]` | X |   | X | X |   |   | X | X
`obj>access>prototype>'x' in` | X |   | X | X | X | X | X | X
`obj>access>prototype>42 in` | X |   | X | X | X | X | X | X
`obj>access>prototype>[Symbol] in` | X |   | X | X | X | X | X | X
`obj>access>prototype>{x} =` | X |   | X | X |   |   | X | X
`obj>access>prototype>{['x']: x} =` | X |   | X | X |   |   | X | X
`obj>access>prototype>{42: x} =` | X |   | X | X |   |   | X | X
`obj>access>prototype>{[Symbol]: x} =` | X |   | X | X |   |   | X | X
`obj>access>prototype>function({x}){return x}` | X |   | X | X |   |   | X | X
`obj>access>prototype>function({['x']: x}){return x}` | X |   | X | X |   |   | X | X
`obj>access>prototype>function({42: x}){return x}` | X |   | X | X |   |   | X | X
`obj>access>prototype>function({[Symbol]: x}){return x}` | X |   | X | X |   |   | X | X
`obj>access>prototype>(function({x}){return x})` | X |   | X | X |   |   | X | X
`obj>access>prototype>(function({['x']: x}){return x})` | X |   | X | X |   |   | X | X
`obj>access>prototype>(function({42: x}){return x})` | X |   | X | X |   |   | X | X
`obj>access>prototype>(function({[Symbol]: x}){return x})` | X |   | X | X |   |   | X | X
`obj>access>prototype>(({x}) => (x))` | X |   | X | X |   |   | X | X
`obj>access>prototype>(({['x']: x}) => (x))` | X |   | X | X |   |   | X | X
`obj>access>prototype>(({42: x}) => (x))` | X |   | X | X |   |   | X | X
`obj>access>prototype>(({[Symbol]: x}) => (x))` | X |   | X | X |   |   | X | X
`obj>access>.__proto__` | X |   | X | X |   |   |   |  
`obj>access>['__proto__']` | X |   | X | X |   |   |   |  
`obj>access>.constructor` | X |   | X | X |   |   |   | X
`obj>access>['constructor']` | X |   | X | X |   |   |   | X
`obj>access>for-in` | X |   | X | X | X | X | X | X
`obj>assign>override>.x` | X | X | X | X | X | X | X | X
`obj>assign>override>['x']` | X | X | X | X | X | X | X | X
`obj>assign>override>[42]` | X | X | X | X | X | X | X | X
`obj>assign>override>[Symbol]` | X | X | X | X | X | X | X | X
`obj>assign>override>.__proto__.x` | X |   | X | X |   |   |   |  
`obj>assign>override>.__proto__['x']` | X |   | X | X |   |   |   |  
`obj>assign>override>.__proto__[42]` | X |   | X | X |   |   |   |  
`obj>assign>override>.__proto__[Symbol]` | X |   | X | X |   |   |   |  
`obj>assign>override>.constructor.prototype.x` | X |   | X | X |   |   |   | X
`obj>assign>override>.constructor.prototype['x']` | X |   | X | X |   |   |   | X
`obj>assign>override>.constructor.prototype[42]` | X |   | X | X |   |   |   | X
`obj>assign>override>.constructor.prototype[Symbol]` | X |   | X | X |   |   |   | X
`obj>assign>extend>.x` | X | X | X | X | X | X | X | X
`obj>assign>extend>['x']` | X | X | X | X | X | X | X | X
`obj>assign>extend>[42]` | X | X | X | X | X | X | X | X
`obj>assign>extend>[Symbol]` | X | X | X | X | X | X | X | X
`obj>assign>extend>.__proto__.x` | X |   |   |   |   |   |   |  
`obj>assign>extend>.__proto__['x']` | X |   |   |   |   |   |   |  
`obj>assign>extend>.__proto__[42]` | X |   |   |   |   |   |   |  
`obj>assign>extend>.__proto__[Symbol]` | X |   |   |   |   |   |   |  
`obj>assign>extend>.constructor.prototype.x` | X |   |   |   |   |   |   | X
`obj>assign>extend>.constructor.prototype['x']` | X |   |   |   |   |   |   | X
`obj>assign>extend>.constructor.prototype[42]` | X |   |   |   |   |   |   | X
`obj>assign>extend>.constructor.prototype[Symbol]` | X |   |   |   |   |   |   | X
`obj>assign>.__proto__` | X | X | X | X | X | X | X | X
`obj>assign>['__proto__']` | X | X | X | X | X | X | X | X
`obj>assign>.constructor` | X | X | X | X | X | X | X | X
`obj>assign>['constructor']` | X | X | X | X | X | X | X | X
`obj>delete>present>.x` | X | X | X | X | X | X | X | X
`obj>delete>present>['x']` | X | X | X | X | X | X | X | X
`obj>delete>present>[42]` | X | X | X | X | X | X | X | X
`obj>delete>present>[Symbol]` | X | X | X | X | X | X | X | X
`obj>delete>absent>.x` | X | X | X | X | X | X | X | X
`obj>delete>absent>['x']` | X | X | X | X | X | X | X | X
`obj>delete>absent>[42]` | X | X | X | X | X | X | X | X
`obj>delete>absent>[Symbol]` | X | X | X | X | X | X | X | X
`obj>delete>prototype>.x` | X |   | X | X |   |   | X | X
`obj>delete>prototype>['x']` | X |   | X | X |   |   | X | X
`obj>delete>prototype>[42]` | X |   | X | X |   |   | X | X
`obj>delete>prototype>[Symbol]` | X |   | X | X |   |   | X | X
`obj>delete>.__proto__>.x` | X |   | X |   |   |   |   |  
`obj>delete>.__proto__>['x']` | X |   | X |   |   |   |   |  
`obj>delete>.__proto__>[42]` | X |   | X |   |   |   |   |  
`obj>delete>.__proto__>[Symbol]` | X |   | X |   |   |   |   |  
`obj>delete>.constructor>.prototype.x` | X |   | X |   |   |   |   | X
`obj>delete>.constructor>.prototype['x']` | X |   | X |   |   |   |   | X
`obj>delete>.constructor>.prototype[42]` | X |   | X |   |   |   |   | X
`obj>delete>.constructor>.prototype[Symbol]` | X |   | X |   |   |   |   | X
`obj>call>present>.x()` | X | X | X | X | X | X | X | X
`obj>call>present>['x']()` | X | X | X | X | X | X | X | X
`obj>call>prototype>.x()` | X |   | X | X |   |   | X | X
`obj>call>prototype>['x']()` | X |   | X | X |   |   | X | X
`obj>call>prototype>.constructor()` | X |   | X | X |   |   |   | X
`obj>call>prototype>.__defineGetter__()` | X |   | X | X |   |   | X | X
`obj>call>prototype>.__defineSetter__()` | X |   | X | X |   |   | X | X
`obj>call>prototype>.__lookupGetter__()` | X |   | X | X |   |   | X | X
`obj>call>prototype>.__lookupSetter__()` | X |   | X | X |   |   | X | X
`obj>call>prototype>.hasOwnProperty()` | X |   | X | X |   | X | X | X
`obj>call>prototype>.isPrototypeOf()` | X |   | X | X |   | X | X | X
`obj>call>prototype>.propertyIsEnumerable()` | X |   | X | X |   | X | X | X
`obj>call>prototype>.toLocaleString()` | X |   | X | X |   | X | X | X
`obj>call>prototype>.toString()` | X |   | X | X |   | X | X | X
`obj>call>prototype>.valueOf()` | X |   | X | X |   | X | X | X
<!-- END:TEST:obj -->

<!-- START:TEST:arr -->
### Array

test | Baseline | Object.freeze | Object.preventExtension | Object.seal | Proxy (strict) | Proxy (allowlist) | Proxy (denylist) | Proxy (unrestricted)
--- | --- | --- | --- | --- | --- | --- | --- | ---
`arr>access>present>[42]` | X | X | X | X | X | X | X | X
`arr>access>present>42 in` | X | X | X | X | X | X | X | X
`arr>access>present>[x] =` | X | X | X | X |   | X | X | X
`arr>access>present>function([x]){return x}` | X | X | X | X |   | X | X | X
`arr>access>present>(function([x]){return x})` | X | X | X | X |   | X | X | X
`arr>access>present>(([x]) => (x))` | X | X | X | X |   | X | X | X
`arr>access>absent>[42]` | X | X | X | X | X | X | X | X
`arr>access>absent>42 in` | X | X | X | X | X | X | X | X
`arr>access>absent>[x] =` | X | X | X | X |   | X | X | X
`arr>access>absent>function([x]){return x}` | X | X | X | X |   | X | X | X
`arr>access>absent>(function([x]){return x})` | X | X | X | X |   | X | X | X
`arr>access>absent>(([x]) => (x))` | X | X | X | X |   | X | X | X
`arr>access>prototype>[42]` | X | X | X | X |   |   | X | X
`arr>access>prototype>42 in` | X | X | X | X | X | X | X | X
`arr>access>prototype>[x] =` | X | X | X | X |   | X | X | X
`arr>access>prototype>function([x]){return x}` | X | X | X | X |   | X | X | X
`arr>access>prototype>(function([x]){return x})` | X | X | X | X |   | X | X | X
`arr>access>prototype>(([x]) => (x))` | X | X | X | X |   | X | X | X
`arr>access>.length` | X | X | X | X | X | X | X | X
`arr>access>.__proto__` | X | X | X | X |   |   |   |  
`arr>access>['__proto__']` | X | X | X | X |   |   |   |  
`arr>access>.constructor` | X | X | X | X |   |   |   | X
`arr>access>['constructor']` | X | X | X | X |   |   |   | X
`arr>access>for-in` | X | X | X | X | X | X | X | X
`arr>access>for-of` | X | X | X | X |   | X | X | X
`arr>assign>override>[42]` | X | X | X | X | X | X | X | X
`arr>assign>override>.__proto__[42]` | X |   | X | X |   |   |   |  
`arr>assign>override>.constructor.prototype[42]` | X |   | X | X |   |   |   | X
`arr>assign>extend>[42]` | X | X | X | X | X | X | X | X
`arr>assign>extend>.__proto__[42]` | X |   |   |   |   |   |   |  
`arr>assign>extend>.constructor.prototype[42]` | X |   |   |   |   |   |   | X
`arr>assign>.__proto__` | X | X | X | X | X | X | X | X
`arr>assign>['__proto__']` | X | X | X | X | X | X | X | X
`arr>assign>.constructor` | X |   | X | X | X | X | X | X
`arr>assign>['constructor']` | X |   | X | X | X | X | X | X
`arr>delete>present>[42]` | X | X | X | X | X | X | X | X
`arr>delete>absent>[42]` | X | X | X | X | X | X | X | X
`arr>delete>prototype>[42]` | X | X | X | X |   |   | X | X
`arr>delete>.__proto__>[42]` | X |   | X |   |   |   |   |  
`arr>delete>.constructor>.prototype[42]` | X |   | X |   |   |   |   | X
`arr>call>present>[42]()` | X | X | X | X | X | X | X | X
`arr>call>prototype>.constructor()` | X | X | X | X |   |   |   | X
`arr>call>prototype>[@@iterator]()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.at()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.concat()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.copyWithin()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.entries()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.every()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.fill()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.filter()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.find()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.findIndex()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.findLast()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.findLastIndex()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.flat()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.flatMap()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.forEach()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.includes()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.indexOf()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.join()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.keys()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.lastIndexOf()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.map()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.pop()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.push()` | X | X | X | X |   |   | X | X
`arr>call>prototype>.reduce()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.reduceRight()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.reverse()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.shift()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.slice()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.some()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.sort()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.splice()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.toLocaleString()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.toReversed()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.toSorted()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.toSpliced()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.toString()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.unshift()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.values()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.with()` | X | X | X | X |   | X | X | X
`arr>Array.isArray()` | X | X | X | X | X | X | X | X
<!-- END:TEST:arr -->

<!-- START:BENCH -->
## Benchmark

Note: if an operation is not supported by a mitigation it is omitted from the
benchmark results.

```
# Object creation
obj>create - Baseline x 136,279,389 ops/sec ±0.61% (93 runs sampled)
obj>create - Object.create x 9,220,971 ops/sec ±0.85% (92 runs sampled)
obj>create - Object.freeze x 35,231,816 ops/sec ±0.69% (96 runs sampled)
obj>create - Object.preventExtensions x 78,380,188 ops/sec ±1.93% (97 runs sampled)
obj>create - Object.seal x 43,096,647 ops/sec ±0.42% (98 runs sampled)
obj>create - Proxy (strict) x 74,708,400 ops/sec ±1.82% (95 runs sampled)
obj>create - Proxy (allowlist) x 61,903,735 ops/sec ±2.03% (91 runs sampled)
obj>create - Proxy (denylist) x 74,121,471 ops/sec ±2.24% (93 runs sampled)
obj>create - Proxy (unrestricted) x 70,583,105 ops/sec ±3.26% (88 runs sampled)

# Property access
obj>access>present>['x'] - Baseline x 1,389,850,401 ops/sec ±0.19% (97 runs sampled)
obj>access>present>['x'] - Object.create x 141,123,525 ops/sec ±0.74% (96 runs sampled)
obj>access>present>['x'] - Object.freeze x 1,386,699,705 ops/sec ±0.22% (96 runs sampled)
obj>access>present>['x'] - Object.preventExtensions x 1,388,815,921 ops/sec ±0.12% (96 runs sampled)
obj>access>present>['x'] - Object.seal x 1,395,918,219 ops/sec ±0.18% (99 runs sampled)
obj>access>present>['x'] - Proxy (strict) x 26,564,162 ops/sec ±0.32% (96 runs sampled)
obj>access>present>['x'] - Proxy (allowlist) x 26,727,743 ops/sec ±0.79% (95 runs sampled)
obj>access>present>['x'] - Proxy (denylist) x 26,653,312 ops/sec ±0.40% (95 runs sampled)
obj>access>present>['x'] - Proxy (unrestricted) x 15,934,912 ops/sec ±0.49% (93 runs sampled)

obj>access>absent>['x'] - Baseline x 1,389,862,125 ops/sec ±0.25% (95 runs sampled)
obj>access>absent>['x'] - Object.create x 123,260,908 ops/sec ±0.19% (99 runs sampled)
obj>access>absent>['x'] - Object.freeze x 1,398,225,286 ops/sec ±0.16% (97 runs sampled)
obj>access>absent>['x'] - Object.preventExtensions x 1,401,564,226 ops/sec ±0.16% (94 runs sampled)
obj>access>absent>['x'] - Object.seal x 1,397,444,447 ops/sec ±0.21% (95 runs sampled)
obj>access>absent>['x'] - Proxy (strict) x 33,832,570 ops/sec ±0.56% (96 runs sampled)
obj>access>absent>['x'] - Proxy (allowlist) x 26,516,110 ops/sec ±0.51% (95 runs sampled)
obj>access>absent>['x'] - Proxy (denylist) x 22,160,376 ops/sec ±0.41% (92 runs sampled)
obj>access>absent>['x'] - Proxy (unrestricted) x 15,360,213 ops/sec ±0.81% (92 runs sampled)

obj>access>prototype>['x'] - Baseline x 1,392,295,110 ops/sec ±0.15% (99 runs sampled)
obj>access>prototype>['x'] - Object.freeze x 1,397,817,851 ops/sec ±0.17% (99 runs sampled)
obj>access>prototype>['x'] - Object.preventExtensions x 1,410,508,399 ops/sec ±0.12% (97 runs sampled)
obj>access>prototype>['x'] - Object.seal x 1,410,274,254 ops/sec ±0.09% (101 runs sampled)
obj>access>prototype>['x'] - Proxy (denylist) x 26,748,875 ops/sec ±1.75% (91 runs sampled)
obj>access>prototype>['x'] - Proxy (unrestricted) x 20,339,922 ops/sec ±0.67% (93 runs sampled)

obj>access>absent>for-in - Baseline x 154,201,442 ops/sec ±0.18% (95 runs sampled)
obj>access>absent>for-in - Object.create x 7,394,124 ops/sec ±0.44% (93 runs sampled)
obj>access>absent>for-in - Object.freeze x 153,409,127 ops/sec ±0.61% (95 runs sampled)
obj>access>absent>for-in - Object.preventExtensions x 156,034,837 ops/sec ±0.24% (97 runs sampled)
obj>access>absent>for-in - Object.seal x 154,901,504 ops/sec ±0.14% (96 runs sampled)
obj>access>absent>for-in - Proxy (strict) x 1,737,787 ops/sec ±0.27% (95 runs sampled)
obj>access>absent>for-in - Proxy (allowlist) x 1,740,246 ops/sec ±0.31% (96 runs sampled)
obj>access>absent>for-in - Proxy (denylist) x 1,719,117 ops/sec ±0.26% (97 runs sampled)
obj>access>absent>for-in - Proxy (unrestricted) x 1,503,293 ops/sec ±0.31% (97 runs sampled)

# Property assignment
obj>assign>override>['x'] - Baseline x 227,988,023 ops/sec ±0.10% (97 runs sampled)
obj>assign>override>['x'] - Object.create x 126,071,352 ops/sec ±0.23% (97 runs sampled)
obj>assign>override>['x'] - Object.freeze x 225,635,235 ops/sec ±0.17% (93 runs sampled)
obj>assign>override>['x'] - Object.preventExtensions x 224,877,799 ops/sec ±0.17% (99 runs sampled)
obj>assign>override>['x'] - Object.seal x 225,197,918 ops/sec ±0.12% (93 runs sampled)
obj>assign>override>['x'] - Proxy (strict) x 3,296,035 ops/sec ±0.31% (94 runs sampled)
obj>assign>override>['x'] - Proxy (allowlist) x 3,303,468 ops/sec ±0.25% (98 runs sampled)
obj>assign>override>['x'] - Proxy (denylist) x 3,305,913 ops/sec ±0.29% (97 runs sampled)
obj>assign>override>['x'] - Proxy (unrestricted) x 3,290,309 ops/sec ±0.24% (98 runs sampled)

obj>assign>delete>['x'] - Baseline x 12,569,125 ops/sec ±0.55% (95 runs sampled)
obj>assign>delete>['x'] - Object.create x 18,753,059 ops/sec ±0.46% (96 runs sampled)
obj>assign>delete>['x'] - Object.freeze x 12,447,857 ops/sec ±0.53% (93 runs sampled)
obj>assign>delete>['x'] - Object.preventExtensions x 12,677,417 ops/sec ±0.53% (93 runs sampled)
obj>assign>delete>['x'] - Object.seal x 12,545,581 ops/sec ±0.54% (92 runs sampled)
obj>assign>delete>['x'] - Proxy (strict) x 2,114,734 ops/sec ±0.23% (99 runs sampled)
obj>assign>delete>['x'] - Proxy (allowlist) x 2,092,532 ops/sec ±0.20% (97 runs sampled)
obj>assign>delete>['x'] - Proxy (denylist) x 2,100,982 ops/sec ±0.19% (99 runs sampled)
obj>assign>delete>['x'] - Proxy (unrestricted) x 1,957,802 ops/sec ±0.24% (99 runs sampled)

obj>assign>extend>['x'] - Baseline x 94,248,317 ops/sec ±12.74% (92 runs sampled)
obj>assign>extend>['x'] - Object.create x 92,701,800 ops/sec ±14.31% (88 runs sampled)
obj>assign>extend>['x'] - Object.freeze x 34,833,459 ops/sec ±31.27% (86 runs sampled)
obj>assign>extend>['x'] - Object.preventExtensions x 88,796,594 ops/sec ±15.22% (87 runs sampled)
obj>assign>extend>['x'] - Object.seal x 89,471,185 ops/sec ±14.25% (90 runs sampled)
obj>assign>extend>['x'] - Proxy (strict) x 2,396,407 ops/sec ±4.32% (86 runs sampled)
obj>assign>extend>['x'] - Proxy (allowlist) x 2,400,973 ops/sec ±4.65% (86 runs sampled)
obj>assign>extend>['x'] - Proxy (denylist) x 2,385,032 ops/sec ±4.75% (84 runs sampled)
obj>assign>extend>['x'] - Proxy (unrestricted) x 2,423,451 ops/sec ±4.60% (85 runs sampled)

# Property call
obj>call>present>['x']() - Baseline x 1,421,447,899 ops/sec ±0.12% (99 runs sampled)
obj>call>present>['x']() - Object.create x 143,296,231 ops/sec ±0.74% (99 runs sampled)
obj>call>present>['x']() - Object.freeze x 1,419,677,797 ops/sec ±0.15% (96 runs sampled)
obj>call>present>['x']() - Object.preventExtensions x 1,406,014,852 ops/sec ±0.20% (98 runs sampled)
obj>call>present>['x']() - Object.seal x 1,406,457,216 ops/sec ±0.16% (95 runs sampled)
obj>call>present>['x']() - Proxy (strict) x 11,530,414 ops/sec ±0.25% (95 runs sampled)
obj>call>present>['x']() - Proxy (allowlist) x 11,479,975 ops/sec ±0.35% (96 runs sampled)
obj>call>present>['x']() - Proxy (denylist) x 11,561,778 ops/sec ±0.81% (96 runs sampled)
obj>call>present>['x']() - Proxy (unrestricted) x 9,814,290 ops/sec ±0.87% (94 runs sampled)

obj>call>prototype>['x']() - Baseline x 1,399,587,963 ops/sec ±0.16% (95 runs sampled)
obj>call>prototype>['x']() - Object.freeze x 1,411,677,166 ops/sec ±0.09% (98 runs sampled)
obj>call>prototype>['x']() - Object.preventExtensions x 1,420,509,240 ops/sec ±0.17% (97 runs sampled)
obj>call>prototype>['x']() - Object.seal x 1,409,708,418 ops/sec ±0.23% (97 runs sampled)
obj>call>prototype>['x']() - Proxy (denylist) x 11,742,578 ops/sec ±0.26% (95 runs sampled)
obj>call>prototype>['x']() - Proxy (unrestricted) x 9,756,211 ops/sec ±0.32% (92 runs sampled)
```
<!-- END:BENCH -->
