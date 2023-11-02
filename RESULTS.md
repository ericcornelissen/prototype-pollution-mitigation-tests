<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->
<!-- FILE GENERATED, DO NOT EDIT, -->

# Results

This file contains the last recorded test results for this project. It was run
on 2023-11-2 against Node.js v20.8.0.

_This file should not be edited manually, to update it run `./run-tests.sh` or
`/run-benchmarks.sh` from the root of this project._

<!-- START:TEST -->
## Functionality

test | Baseline | Object.create | Object.preventExtension | Object.seal | Proxy (strict) | Proxy (allowlist) | Proxy (denylist) | Proxy (unrestricted)
--- | --- | --- | --- | --- | --- | --- | --- | ---
`obj>access>present>.x` | X | X | X | X | X | X | X | X
`obj>access>present>['x']` | X | X | X | X | X | X | X | X
`obj>access>present>[42]` | X | X | X | X | X | X | X | X
`obj>access>present>[Symbol]` | X | X | X | X | X | X | X | X
`obj>access>absent>.x` | X | X | X | X | X | X | X | X
`obj>access>absent>['x']` | X | X | X | X | X | X | X | X
`obj>access>absent>[42]` | X | X | X | X | X | X | X | X
`obj>access>absent>[Symbol]` | X | X | X | X | X | X | X | X
`obj>access>prototype>.x` | X |   | X | X |   |   | X | X
`obj>access>prototype>['x']` | X |   | X | X |   |   | X | X
`obj>access>prototype>[42]` | X |   | X | X |   |   | X | X
`obj>access>prototype>[Symbol]` | X |   | X | X |   |   | X | X
`obj>access>.__proto__` | X |   | X | X |   |   |   |  
`obj>access>['__proto__']` | X |   | X | X |   |   |   |  
`obj>access>.constructor` | X |   | X | X |   |   |   | X
`obj>access>['constructor']` | X |   | X | X |   |   |   | X
`obj>assign>override>.x` | X | X | X | X | X | X | X | X
`obj>assign>override>['x']` | X | X | X | X | X | X | X | X
`obj>assign>override>[42]` | X | X | X | X | X | X | X | X
`obj>assign>override>[Symbol]` | X | X | X | X | X | X | X | X
`obj>assign>override>.__proto__.x` | X |   | X | X |   |   |   |  
`obj>assign>override>.__proto__['x']` | X |   | X | X |   |   |   |  
`obj>assign>override>.__proto__[42]` | X |   | X | X |   |   |   |  
`obj>assign>override>.__proto__[Symbol]` | X |   | X | X |   |   |   |  
`obj>assign>override>.constructor.prototype.x` | X |   | X | X |   |   |   |  
`obj>assign>override>.constructor.prototype['x']` | X |   | X | X |   |   |   |  
`obj>assign>override>.constructor.prototype[42]` | X |   | X | X |   |   |   |  
`obj>assign>override>.constructor.prototype[Symbol]` | X |   | X | X |   |   |   |  
`obj>assign>delete>.x` | X | X | X | X | X | X | X | X
`obj>assign>delete>['x']` | X | X | X | X | X | X | X | X
`obj>assign>delete>[42]` | X | X | X | X | X | X | X | X
`obj>assign>delete>[Symbol]` | X | X | X | X | X | X | X | X
`obj>assign>delete>.__proto__.x` | X |   | X |   |   |   |   |  
`obj>assign>delete>.__proto__['x']` | X |   | X |   |   |   |   |  
`obj>assign>delete>.__proto__[42]` | X |   | X |   |   |   |   |  
`obj>assign>delete>.__proto__[Symbol]` | X |   | X |   |   |   |   |  
`obj>assign>delete>.constructor.prototype.x` | X |   | X |   |   |   |   |  
`obj>assign>delete>.constructor.prototype['x']` | X |   | X |   |   |   |   |  
`obj>assign>delete>.constructor.prototype[42]` | X |   | X |   |   |   |   |  
`obj>assign>delete>.constructor.prototype[Symbol]` | X |   | X |   |   |   |   |  
`obj>assign>extend>.x` | X | X | X | X | X | X | X | X
`obj>assign>extend>['x']` | X | X | X | X | X | X | X | X
`obj>assign>extend>[42]` | X | X | X | X | X | X | X | X
`obj>assign>extend>[Symbol]` | X | X | X | X | X | X | X | X
`obj>assign>extend>.__proto__.x` | X |   |   |   |   |   |   |  
`obj>assign>extend>.__proto__['x']` | X |   |   |   |   |   |   |  
`obj>assign>extend>.__proto__[42]` | X |   |   |   |   |   |   |  
`obj>assign>extend>.__proto__[Symbol]` | X |   |   |   |   |   |   |  
`obj>assign>extend>.constructor.prototype.x` | X |   |   |   |   |   |   |  
`obj>assign>extend>.constructor.prototype['x']` | X |   |   |   |   |   |   |  
`obj>assign>extend>.constructor.prototype[42]` | X |   |   |   |   |   |   |  
`obj>assign>extend>.constructor.prototype[Symbol]` | X |   |   |   |   |   |   |  
`obj>assign>.__proto__` | X | X | X | X | X | X | X | X
`obj>assign>['__proto__']` | X | X | X | X | X | X | X | X
`obj>assign>.constructor` | X | X | X | X | X | X | X | X
`obj>assign>['constructor']` | X | X | X | X | X | X | X | X
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
<!-- END:TEST -->

<!-- START:BENCH -->
## Benchmark

Note: if an operation is not supported by a mitigation it is omitted from the
benchmark results.

```
# Object creation
obj>create - Baseline x 171,127,469 ops/sec ±1.01% (96 runs sampled)
obj>create - Object.create x 16,168,084 ops/sec ±0.96% (91 runs sampled)
obj>create - Object.freeze x 45,864,470 ops/sec ±0.19% (96 runs sampled)
obj>create - Object.preventExtensions x 95,529,736 ops/sec ±1.01% (93 runs sampled)
obj>create - Object.seal x 55,378,579 ops/sec ±0.42% (94 runs sampled)
obj>create - Proxy (strict) x 79,246,626 ops/sec ±2.31% (85 runs sampled)
obj>create - Proxy (allowlist) x 78,548,986 ops/sec ±1.61% (89 runs sampled)
obj>create - Proxy (denylist) x 79,711,397 ops/sec ±2.86% (86 runs sampled)
obj>create - Proxy (unrestricted) x 78,065,569 ops/sec ±1.94% (89 runs sampled)

# Property access
obj>access>present>['x'] - Baseline x 1,730,238,082 ops/sec ±1.01% (89 runs sampled)
obj>access>present>['x'] - Object.create x 195,688,415 ops/sec ±0.07% (102 runs sampled)
obj>access>present>['x'] - Object.freeze x 1,856,764,731 ops/sec ±0.09% (94 runs sampled)
obj>access>present>['x'] - Object.preventExtensions x 1,857,357,202 ops/sec ±0.08% (100 runs sampled)
obj>access>present>['x'] - Object.seal x 1,858,376,478 ops/sec ±0.08% (101 runs sampled)
obj>access>present>['x'] - Proxy (strict) x 41,572,791 ops/sec ±0.40% (94 runs sampled)
obj>access>present>['x'] - Proxy (allowlist) x 38,845,475 ops/sec ±0.75% (89 runs sampled)
obj>access>present>['x'] - Proxy (denylist) x 38,486,006 ops/sec ±0.73% (92 runs sampled)
obj>access>present>['x'] - Proxy (unrestricted) x 35,848,205 ops/sec ±0.63% (91 runs sampled)

obj>access>absent>['x'] - Baseline x 1,751,029,537 ops/sec ±0.98% (93 runs sampled)
obj>access>absent>['x'] - Object.create x 157,366,114 ops/sec ±1.01% (91 runs sampled)
obj>access>absent>['x'] - Object.freeze x 1,834,203,403 ops/sec ±0.34% (99 runs sampled)
obj>access>absent>['x'] - Object.preventExtensions x 1,698,809,281 ops/sec ±0.80% (92 runs sampled)
obj>access>absent>['x'] - Object.seal x 1,846,378,550 ops/sec ±0.44% (93 runs sampled)
obj>access>absent>['x'] - Proxy (strict) x 53,718,570 ops/sec ±0.37% (96 runs sampled)
obj>access>absent>['x'] - Proxy (allowlist) x 37,519,240 ops/sec ±0.81% (91 runs sampled)
obj>access>absent>['x'] - Proxy (denylist) x 41,695,028 ops/sec ±0.43% (94 runs sampled)
obj>access>absent>['x'] - Proxy (unrestricted) x 30,025,222 ops/sec ±1.09% (95 runs sampled)

obj>access>prototype>['x'] - Baseline x 1,858,685,044 ops/sec ±0.09% (100 runs sampled)
obj>access>prototype>['x'] - Object.freeze x 1,859,160,428 ops/sec ±0.10% (99 runs sampled)
obj>access>prototype>['x'] - Object.preventExtensions x 1,858,074,458 ops/sec ±0.16% (99 runs sampled)
obj>access>prototype>['x'] - Object.seal x 1,859,102,743 ops/sec ±0.10% (100 runs sampled)
obj>access>prototype>['x'] - Proxy (denylist) x 40,663,401 ops/sec ±0.40% (94 runs sampled)
obj>access>prototype>['x'] - Proxy (unrestricted) x 31,552,054 ops/sec ±0.24% (93 runs sampled)

# Property assignment
obj>assign>override>['x'] - Baseline x 215,515,626 ops/sec ±0.31% (97 runs sampled)
obj>assign>override>['x'] - Object.create x 156,766,864 ops/sec ±0.10% (101 runs sampled)
obj>assign>override>['x'] - Object.freeze x 213,432,368 ops/sec ±0.49% (95 runs sampled)
obj>assign>override>['x'] - Object.preventExtensions x 214,497,164 ops/sec ±0.45% (100 runs sampled)
obj>assign>override>['x'] - Object.seal x 214,411,320 ops/sec ±0.36% (96 runs sampled)
obj>assign>override>['x'] - Proxy (strict) x 4,920,643 ops/sec ±0.95% (96 runs sampled)
obj>assign>override>['x'] - Proxy (allowlist) x 5,095,409 ops/sec ±0.23% (97 runs sampled)
obj>assign>override>['x'] - Proxy (denylist) x 4,926,799 ops/sec ±0.88% (95 runs sampled)
obj>assign>override>['x'] - Proxy (unrestricted) x 5,148,868 ops/sec ±0.25% (96 runs sampled)

obj>assign>delete>['x'] - Baseline x 17,252,652 ops/sec ±0.67% (97 runs sampled)
obj>assign>delete>['x'] - Object.create x 27,947,479 ops/sec ±0.23% (98 runs sampled)
obj>assign>delete>['x'] - Object.freeze x 17,307,108 ops/sec ±0.72% (96 runs sampled)
obj>assign>delete>['x'] - Object.preventExtensions x 17,952,154 ops/sec ±0.49% (95 runs sampled)
obj>assign>delete>['x'] - Object.seal x 17,698,661 ops/sec ±0.42% (99 runs sampled)
obj>assign>delete>['x'] - Proxy (strict) x 3,045,679 ops/sec ±0.96% (98 runs sampled)
obj>assign>delete>['x'] - Proxy (allowlist) x 2,926,203 ops/sec ±1.13% (93 runs sampled)
obj>assign>delete>['x'] - Proxy (denylist) x 2,982,951 ops/sec ±0.98% (97 runs sampled)
obj>assign>delete>['x'] - Proxy (unrestricted) x 3,071,470 ops/sec ±0.36% (98 runs sampled)

obj>assign>extend>['x'] - Baseline x 115,926,121 ops/sec ±10.65% (91 runs sampled)
obj>assign>extend>['x'] - Object.create x 120,183,032 ops/sec ±10.09% (93 runs sampled)
obj>assign>extend>['x'] - Object.freeze x 78,411,701 ops/sec ±27.90% (88 runs sampled)
obj>assign>extend>['x'] - Object.preventExtensions x 120,772,454 ops/sec ±9.42% (95 runs sampled)
obj>assign>extend>['x'] - Object.seal x 118,837,485 ops/sec ±10.46% (90 runs sampled)
obj>assign>extend>['x'] - Proxy (strict) x 3,306,862 ops/sec ±5.06% (78 runs sampled)
obj>assign>extend>['x'] - Proxy (allowlist) x 3,603,138 ops/sec ±4.92% (83 runs sampled)
obj>assign>extend>['x'] - Proxy (denylist) x 3,656,220 ops/sec ±4.94% (84 runs sampled)
obj>assign>extend>['x'] - Proxy (unrestricted) x 3,639,209 ops/sec ±4.99% (83 runs sampled)

# Property call
obj>call>present>['x']() - Baseline x 1,832,798,127 ops/sec ±0.72% (100 runs sampled)
obj>call>present>['x']() - Object.create x 184,526,271 ops/sec ±0.13% (90 runs sampled)
obj>call>present>['x']() - Object.freeze x 1,851,680,146 ops/sec ±0.12% (100 runs sampled)
obj>call>present>['x']() - Object.preventExtensions x 1,697,551,385 ops/sec ±0.74% (93 runs sampled)
obj>call>present>['x']() - Object.seal x 1,750,668,728 ops/sec ±0.99% (93 runs sampled)
obj>call>present>['x']() - Proxy (strict) x 21,005,730 ops/sec ±0.91% (94 runs sampled)
obj>call>present>['x']() - Proxy (allowlist) x 21,694,657 ops/sec ±0.57% (93 runs sampled)
obj>call>present>['x']() - Proxy (denylist) x 21,862,692 ops/sec ±0.32% (99 runs sampled)
obj>call>present>['x']() - Proxy (unrestricted) x 21,737,251 ops/sec ±0.36% (97 runs sampled)

obj>call>prototype>['x']() - Baseline x 1,855,999,675 ops/sec ±0.11% (100 runs sampled)
obj>call>prototype>['x']() - Object.freeze x 1,724,127,831 ops/sec ±0.93% (94 runs sampled)
obj>call>prototype>['x']() - Object.preventExtensions x 1,754,758,310 ops/sec ±0.96% (95 runs sampled)
obj>call>prototype>['x']() - Object.seal x 1,856,664,298 ops/sec ±0.12% (99 runs sampled)
obj>call>prototype>['x']() - Proxy (denylist) x 22,023,099 ops/sec ±0.31% (94 runs sampled)
obj>call>prototype>['x']() - Proxy (unrestricted) x 18,752,653 ops/sec ±0.44% (93 runs sampled)
```
<!-- END:BENCH -->
