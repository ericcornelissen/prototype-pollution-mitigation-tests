<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->
<!-- FILE GENERATED, DO NOT EDIT, -->

# Results

This file contains the last recorded test results for this project. It was run
on 2024-4-13 against Node.js v20.8.0.

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
`obj>access>for-in` | X |   | X | X | X | X | X | X
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
<!-- END:TEST:obj -->

<!-- START:TEST:arr -->
### Array

test | Baseline | Object.freeze | Object.preventExtension | Object.seal | Proxy (strict) | Proxy (allowlist) | Proxy (denylist) | Proxy (unrestricted)
--- | --- | --- | --- | --- | --- | --- | --- | ---
`arr>access>present>[42]` | X | X | X | X | X | X | X | X
`arr>access>absent>[42]` | X | X | X | X | X | X | X | X
`arr>access>prototype>[42]` | X | X | X | X |   |   | X | X
`arr>access>.length` | X | X | X | X | X | X | X | X
`arr>access>.__proto__` | X | X | X | X |   |   |   |  
`arr>access>['__proto__']` | X | X | X | X |   |   |   |  
`arr>access>.constructor` | X | X | X | X |   |   |   | X
`arr>access>['constructor']` | X | X | X | X |   |   |   | X
`arr>access>for-in` | X | X | X | X | X | X | X | X
`arr>access>for-of` | X | X | X | X |   |   |   |  
`arr>assign>override>[42]` | X | X | X | X | X | X | X | X
`arr>assign>override>.__proto__[42]` | X |   | X | X |   |   |   |  
`arr>assign>override>.constructor.prototype[42]` | X |   | X | X |   |   |   |  
`arr>assign>delete>[42]` | X | X | X | X | X | X | X | X
`arr>assign>delete>.__proto__[42]` | X |   | X |   |   |   |   |  
`arr>assign>delete>.constructor.prototype[42]` | X |   | X |   |   |   |   |  
`arr>assign>extend>[42]` | X | X | X | X | X | X | X | X
`arr>assign>extend>.__proto__[42]` | X |   |   |   |   |   |   |  
`arr>assign>extend>.constructor.prototype[42]` | X |   |   |   |   |   |   |  
`arr>assign>.__proto__` | X | X | X | X | X | X | X | X
`arr>assign>['__proto__']` | X | X | X | X | X | X | X | X
`arr>assign>.constructor` | X |   | X | X | X | X | X | X
`arr>assign>['constructor']` | X |   | X | X | X | X | X | X
`arr>call>present>[42]()` | X | X | X | X | X | X | X | X
`arr>call>prototype>.constructor()` | X | X | X | X |   |   |   | X
`arr>call>prototype>[@@iterator]()` | X | X | X | X |   |   | X | X
`arr>call>prototype>.at()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.concat()` | X | X | X | X |   | X | X |  
`arr>call>prototype>.copyWithin()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.entries()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.every()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.fill()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.filter()` | X | X | X | X |   | X | X |  
`arr>call>prototype>.find()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.findIndex()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.findLast()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.findLastIndex()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.flat()` | X | X | X | X |   | X | X |  
`arr>call>prototype>.flatMap()` | X | X | X | X |   | X | X |  
`arr>call>prototype>.forEach()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.includes()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.indexOf()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.join()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.keys()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.lastIndexOf()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.map()` | X | X | X | X |   | X | X |  
`arr>call>prototype>.pop()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.push()` | X | X | X | X |   |   | X | X
`arr>call>prototype>.reduce()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.reduceRight()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.reverse()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.shift()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.slice()` | X | X | X | X |   | X | X |  
`arr>call>prototype>.some()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.sort()` | X | X | X | X |   | X | X | X
`arr>call>prototype>.splice()` | X | X | X | X |   | X | X |  
`arr>call>prototype>.toLocaleString()` | X | X | X | X |   | X | X |  
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
obj>create - Baseline x 135,916,393 ops/sec ±1.25% (96 runs sampled)
obj>create - Object.create x 9,083,379 ops/sec ±0.69% (93 runs sampled)
obj>create - Object.freeze x 35,761,736 ops/sec ±0.18% (99 runs sampled)
obj>create - Object.preventExtensions x 78,081,214 ops/sec ±0.99% (97 runs sampled)
obj>create - Object.seal x 42,591,967 ops/sec ±0.63% (94 runs sampled)
obj>create - Proxy (strict) x 72,913,345 ops/sec ±2.78% (91 runs sampled)
obj>create - Proxy (allowlist) x 76,188,511 ops/sec ±1.27% (94 runs sampled)
obj>create - Proxy (denylist) x 74,243,310 ops/sec ±2.18% (92 runs sampled)
obj>create - Proxy (unrestricted) x 75,085,540 ops/sec ±1.73% (96 runs sampled)

# Property access
obj>access>present>['x'] - Baseline x 1,394,328,571 ops/sec ±0.16% (100 runs sampled)
obj>access>present>['x'] - Object.create x 138,659,790 ops/sec ±4.03% (92 runs sampled)
obj>access>present>['x'] - Object.freeze x 1,389,297,781 ops/sec ±0.14% (98 runs sampled)
obj>access>present>['x'] - Object.preventExtensions x 1,382,436,470 ops/sec ±0.14% (96 runs sampled)
obj>access>present>['x'] - Object.seal x 1,402,166,535 ops/sec ±0.19% (97 runs sampled)
obj>access>present>['x'] - Proxy (strict) x 26,937,024 ops/sec ±0.46% (97 runs sampled)
obj>access>present>['x'] - Proxy (allowlist) x 27,228,680 ops/sec ±0.44% (91 runs sampled)
obj>access>present>['x'] - Proxy (denylist) x 27,115,944 ops/sec ±0.88% (95 runs sampled)
obj>access>present>['x'] - Proxy (unrestricted) x 27,007,603 ops/sec ±0.44% (97 runs sampled)

obj>access>absent>['x'] - Baseline x 1,402,509,306 ops/sec ±0.12% (97 runs sampled)
obj>access>absent>['x'] - Object.create x 119,818,099 ops/sec ±1.33% (96 runs sampled)
obj>access>absent>['x'] - Object.freeze x 1,398,183,524 ops/sec ±0.15% (100 runs sampled)
obj>access>absent>['x'] - Object.preventExtensions x 1,409,231,668 ops/sec ±0.08% (98 runs sampled)
obj>access>absent>['x'] - Object.seal x 1,387,315,068 ops/sec ±0.17% (97 runs sampled)
obj>access>absent>['x'] - Proxy (strict) x 33,461,314 ops/sec ±0.80% (95 runs sampled)
obj>access>absent>['x'] - Proxy (allowlist) x 25,694,573 ops/sec ±1.02% (92 runs sampled)
obj>access>absent>['x'] - Proxy (denylist) x 27,247,156 ops/sec ±0.46% (96 runs sampled)
obj>access>absent>['x'] - Proxy (unrestricted) x 19,828,480 ops/sec ±0.51% (94 runs sampled)

obj>access>prototype>['x'] - Baseline x 1,390,418,974 ops/sec ±0.16% (98 runs sampled)
obj>access>prototype>['x'] - Object.freeze x 1,399,265,679 ops/sec ±0.24% (96 runs sampled)
obj>access>prototype>['x'] - Object.preventExtensions x 1,393,729,679 ops/sec ±0.25% (97 runs sampled)
obj>access>prototype>['x'] - Object.seal x 1,403,706,350 ops/sec ±0.18% (96 runs sampled)
obj>access>prototype>['x'] - Proxy (denylist) x 27,145,223 ops/sec ±0.35% (97 runs sampled)
obj>access>prototype>['x'] - Proxy (unrestricted) x 20,830,912 ops/sec ±1.07% (94 runs sampled)

obj>access>absent>for-in - Baseline x 155,005,759 ops/sec ±0.42% (97 runs sampled)
obj>access>absent>for-in - Object.create x 7,506,894 ops/sec ±0.56% (98 runs sampled)
obj>access>absent>for-in - Object.freeze x 151,582,224 ops/sec ±0.59% (94 runs sampled)
obj>access>absent>for-in - Object.preventExtensions x 152,058,357 ops/sec ±0.39% (94 runs sampled)
obj>access>absent>for-in - Object.seal x 152,592,287 ops/sec ±0.73% (98 runs sampled)
obj>access>absent>for-in - Proxy (strict) x 1,741,113 ops/sec ±0.33% (96 runs sampled)
obj>access>absent>for-in - Proxy (allowlist) x 1,700,883 ops/sec ±0.36% (97 runs sampled)
obj>access>absent>for-in - Proxy (denylist) x 1,673,905 ops/sec ±1.19% (94 runs sampled)
obj>access>absent>for-in - Proxy (unrestricted) x 1,714,280 ops/sec ±0.43% (96 runs sampled)

# Property assignment
obj>assign>override>['x'] - Baseline x 222,224,090 ops/sec ±0.23% (99 runs sampled)
obj>assign>override>['x'] - Object.create x 124,217,041 ops/sec ±0.79% (96 runs sampled)
obj>assign>override>['x'] - Object.freeze x 223,585,584 ops/sec ±0.16% (97 runs sampled)
obj>assign>override>['x'] - Object.preventExtensions x 222,747,627 ops/sec ±0.32% (95 runs sampled)
obj>assign>override>['x'] - Object.seal x 222,679,757 ops/sec ±0.15% (96 runs sampled)
obj>assign>override>['x'] - Proxy (strict) x 3,253,336 ops/sec ±0.55% (94 runs sampled)
obj>assign>override>['x'] - Proxy (allowlist) x 3,287,610 ops/sec ±0.37% (96 runs sampled)
obj>assign>override>['x'] - Proxy (denylist) x 3,272,541 ops/sec ±0.34% (99 runs sampled)
obj>assign>override>['x'] - Proxy (unrestricted) x 3,291,297 ops/sec ±0.28% (97 runs sampled)

obj>assign>delete>['x'] - Baseline x 12,271,718 ops/sec ±0.99% (93 runs sampled)
obj>assign>delete>['x'] - Object.create x 18,003,924 ops/sec ±1.00% (96 runs sampled)
obj>assign>delete>['x'] - Object.freeze x 12,264,175 ops/sec ±1.19% (90 runs sampled)
obj>assign>delete>['x'] - Object.preventExtensions x 12,408,537 ops/sec ±0.64% (95 runs sampled)
obj>assign>delete>['x'] - Object.seal x 12,556,603 ops/sec ±0.73% (92 runs sampled)
obj>assign>delete>['x'] - Proxy (strict) x 2,103,362 ops/sec ±0.20% (96 runs sampled)
obj>assign>delete>['x'] - Proxy (allowlist) x 2,019,797 ops/sec ±0.94% (97 runs sampled)
obj>assign>delete>['x'] - Proxy (denylist) x 2,094,718 ops/sec ±0.56% (94 runs sampled)
obj>assign>delete>['x'] - Proxy (unrestricted) x 2,092,579 ops/sec ±0.31% (96 runs sampled)

obj>assign>extend>['x'] - Baseline x 87,137,628 ops/sec ±13.98% (91 runs sampled)
obj>assign>extend>['x'] - Object.create x 86,836,835 ops/sec ±12.32% (91 runs sampled)
obj>assign>extend>['x'] - Object.freeze x 31,343,166 ops/sec ±29.96% (85 runs sampled)
obj>assign>extend>['x'] - Object.preventExtensions x 90,248,583 ops/sec ±13.79% (89 runs sampled)
obj>assign>extend>['x'] - Object.seal x 87,788,822 ops/sec ±14.33% (88 runs sampled)
obj>assign>extend>['x'] - Proxy (strict) x 2,372,712 ops/sec ±4.97% (84 runs sampled)
obj>assign>extend>['x'] - Proxy (allowlist) x 2,385,932 ops/sec ±4.14% (85 runs sampled)
obj>assign>extend>['x'] - Proxy (denylist) x 2,365,324 ops/sec ±4.88% (85 runs sampled)
obj>assign>extend>['x'] - Proxy (unrestricted) x 2,189,915 ops/sec ±4.45% (85 runs sampled)

# Property call
obj>call>present>['x']() - Baseline x 1,393,583,537 ops/sec ±0.23% (97 runs sampled)
obj>call>present>['x']() - Object.create x 140,708,549 ops/sec ±0.33% (94 runs sampled)
obj>call>present>['x']() - Object.freeze x 1,383,626,532 ops/sec ±0.26% (96 runs sampled)
obj>call>present>['x']() - Object.preventExtensions x 1,398,150,930 ops/sec ±0.17% (98 runs sampled)
obj>call>present>['x']() - Object.seal x 1,393,849,774 ops/sec ±0.23% (98 runs sampled)
obj>call>present>['x']() - Proxy (strict) x 11,443,276 ops/sec ±0.92% (95 runs sampled)
obj>call>present>['x']() - Proxy (allowlist) x 11,525,511 ops/sec ±0.36% (95 runs sampled)
obj>call>present>['x']() - Proxy (denylist) x 11,143,878 ops/sec ±0.73% (89 runs sampled)
obj>call>present>['x']() - Proxy (unrestricted) x 11,340,255 ops/sec ±0.63% (93 runs sampled)

obj>call>prototype>['x']() - Baseline x 1,390,802,752 ops/sec ±0.18% (98 runs sampled)
obj>call>prototype>['x']() - Object.freeze x 1,403,159,470 ops/sec ±0.16% (98 runs sampled)
obj>call>prototype>['x']() - Object.preventExtensions x 1,391,458,341 ops/sec ±0.17% (99 runs sampled)
obj>call>prototype>['x']() - Object.seal x 1,388,645,888 ops/sec ±0.21% (97 runs sampled)
obj>call>prototype>['x']() - Proxy (denylist) x 11,492,414 ops/sec ±0.66% (95 runs sampled)
obj>call>prototype>['x']() - Proxy (unrestricted) x 9,925,120 ops/sec ±0.90% (93 runs sampled)
```
<!-- END:BENCH -->
