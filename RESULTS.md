<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->
<!-- FILE GENERATED, DO NOT EDIT, -->

# Results

This file contains the last recorded test results for this project. It was run
on 2023-11-1 against Node.js v20.8.0.

_This file should not be edited manually, to update it run `./run-tests.sh`
from the root of this project._

## Overview

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
