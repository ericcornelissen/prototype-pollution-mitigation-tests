#!/bin/sh
# SPDX-License-Identifier: ISC

echo '# Property access'
node bench/access/present/baseline.bench.js
node bench/access/present/object-create-null.bench.js
node bench/access/present/object-freeze.bench.js
node bench/access/present/object-prevent-extensions.bench.js
node bench/access/present/object-seal.bench.js
node bench/access/present/proxy-strict.bench.js
node bench/access/present/proxy-allowlist.bench.js
node bench/access/present/proxy-denylist.bench.js
node bench/access/present/proxy-unrestricted.bench.js

echo
node bench/access/absent/baseline.bench.js
node bench/access/absent/object-create-null.bench.js
node bench/access/absent/object-freeze.bench.js
node bench/access/absent/object-prevent-extensions.bench.js
node bench/access/absent/object-seal.bench.js
node bench/access/absent/proxy-strict.bench.js
node bench/access/absent/proxy-allowlist.bench.js
node bench/access/absent/proxy-denylist.bench.js
node bench/access/absent/proxy-unrestricted.bench.js

echo
node bench/access/prototype/baseline.bench.js
node bench/access/prototype/object-create-null.bench.js
node bench/access/prototype/object-freeze.bench.js
node bench/access/prototype/object-prevent-extensions.bench.js
node bench/access/prototype/object-seal.bench.js
node bench/access/prototype/proxy-strict.bench.js
node bench/access/prototype/proxy-allowlist.bench.js
node bench/access/prototype/proxy-denylist.bench.js
node bench/access/prototype/proxy-unrestricted.bench.js
