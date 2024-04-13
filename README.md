<!-- SPDX-License-Identifier: CC-BY-SA-4.0 -->

# Prototype Pollution Mitigation Tests

A test suite to test object behavior along with a collection of [Prototype
Pollution] mitigation implementations in order to compare and contrast them.

Test results are available in [RESULTS.md] (should be up-to-date) or can be
generated manually using the `./run-*.sh` scripts. This requires an appropriate
version of Node.js is available on the PATH, if not you can use `./container.sh`
to create an ephemeral container in which you can run the tests.

## Mitigations

### `Object.create`

The [`Object.create`] static method creates a new object, using an existing
object as the prototype of the newly created object. By using `null` as the
prototype of a newly created object prototype pollution can be avoided
altogether.

The downside of this mitigation is that any existing code that relies on
prototype-based inheritance will not work. Also, it cannot protect existing code
against prototype pollution without rewriting that code.

### `Object.freeze`

The [`Object.freeze`] static method _freezes_ an object, preventing extensions
and making existing properties non-writable and non-configurable. When applied
to `Object.prototype` it prevents all prototype pollution on objects covering
all code, including third-party code.

The downside of this mitigation is that it may break existing code that needs to
extend or modify `Object.prototype`, for example [polyfill] libraries.

### `Object.preventExtension`

The [`Object.preventExtension`] static method prevents new properties from ever
being added to an object. When applied to `Object.prototype` it prevents some
prototype pollution - specifically when it requires adding a new property to the
prototype - covering all code, including third-party code.

The downside of this mitigation is that it may break existing code that needs to
extend `Object.prototype`, for example [polyfill] libraries. It also doesn't
prevent all prototype pollution attacks (e.g. overriding an existing property
can still lead to a denial of service).

### `Object.seal`

The [`Object.seal`] static method _seals_ an object, preventing extensions and
making existing properties non-configurable, but existing properties can still
be modified unless individually configured otherwise. When applied to
`Object.prototype` it prevents some prototype pollution - except modifying some
existing properties - covering all code, including third-party code.

The downside of this mitigation is that it may break existing code that needs to
extend `Object.prototype`, for example [polyfill] libraries. It also doesn't
prevent all prototype pollution attacks (e.g. overriding an existing property
can still lead to a denial of service).

### `Proxy`

A [`Proxy`] object proxies another object, intercepting and redefining
fundamental operations for that object. When configured appropriately it can be
used to prevent prototype pollution on newly created objects altogether.

The downsides of any `Proxy` based mitigation are that it's inefficient and
that it does not cover third-party code.

#### Strict

In this project a "strict `Proxy`" refers to a `Proxy` which only allows access
to the [own][`Object.hasOwn`] properties of the given object. The effect is
almost identical to using the `Object.create` mitigation.

One benefit over `Object.create` is that a strict `Proxy` can dynamically ensure
that the entire object structure is recursively protected.

#### Allowlist

In this project a "denylist `Proxy`" refers to a `Proxy` which allows access to
the [own][`Object.hasOwn`] properties of the given object, as well as any
property present in a predetermined allowlist. When used on an object it
prevents prototype pollution by only allowing access to known good properties.

The downside of using an allowlist is that it may be incomplete, leading to
unexpected failures for non-problematic code.

The code in this project has the allowlist embedded within the proxy. In
practice the allowlist could be made configurable with corresponding benefits
and drawbacks.

#### Denylist

In this project a "denylist `Proxy`" refers to a `Proxy` which allows access to
the [own][`Object.hasOwn`] properties of the given object, as well as any
property NOT in a predetermined denylist (aka blocklist). When used on an object
it prevents prototype pollution by blocking access to properties known to lead
to pollution.

The downside of using a denylist is that it may be incomplete, allowing for as
of yet unknown attacks to slip through.

The code in this project has the denylist embedded within the proxy. In practice
the denylist could be made configurable with corresponding benefits and
drawbacks.

#### Unrestricted

In this project an "unrestricted `Proxy`" refers to a `Proxy` which poses almost
no restrictions on property access - allowing [own][`Object.hasOwn`] and
prototype property access - and automatically wraps all accessed values in an
unrestricted `Proxy` as well (unless it's a [primitive] value). When used on an
object it prevents prototype pollution because prototype objects can't be
wrapped in a `Proxy`.

The downside of using an unrestricted `Proxy` is that it may be affected is
still affected by polluted properties.

An open question with this mitigation is whether [primitive] values can be
vulnerable to prototype pollution.

### Alternative Mitigations

There are more mitigations that exist, but these fall outside the scope of this
project (i.e. they can't be evaluated within the context of this project).

#### `Map`

A [`Map`] can be used instead of an object, especially when the intended use of
the object is to map arbitrary keys to values. A `Map` cannot be used as a
drop-in replacement for an object because it has a distinct API.

The benefits of using a `Map` is that it is unaffected by prototype pollution
and prevents polluting the prototype as well.

The drawbacks of using a `Map` is that it's not a drop-in replacement and that
it does not necessarily make sense in all scenarios.

#### Linting

Linters can be used to warn about patterns that are prone to lead to or be
affected by prototype pollution. The benefit of using linters is that there is
no runtime impact, the drawback is that it is unlikely to be 100% accurate.

- [ESLint rule `no-prototype-builtins`] - Disallows using standard (builtin)
  prototype functions indirectly (e.g. `foo.hasOwnProperty()`). This helps with
  adopting the `Object.create(null)` mitigation.
- [`eslint-plugin-security/detect-object-injection`] - Disallows non-literal
  object entry lookup or assignment to prevent prototype pollution.

## License

The source code is licensed under the `ISC` license, see [LICENSE] for the full
license text. Documentation and results are available under the [CC BY-SA 4.0]
license.

[cc by-sa 4.0]: https://creativecommons.org/licenses/by-sa/4.0/
[license]: ./LICENSE
[polyfill]: https://developer.mozilla.org/en-US/docs/Glossary/Polyfill
[primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[prototype pollution]: https://portswigger.net/web-security/prototype-pollution
[results.md]: ./RESULTS.md

[`map`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[`object.create`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
[`object.freeze`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
[`object.hasown`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
[`object.preventextension`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
[`object.seal`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
[`proxy`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

[eslint rule `no-prototype-builtins`]: https://eslint.org/docs/latest/rules/no-prototype-builtins
[`eslint-plugin-security/detect-object-injection`]: https://github.com/eslint-community/eslint-plugin-security/blob/5a258c20b4394b6265b8e5a826b57b0c92a1c1f9/docs/rules/detect-object-injection.md
