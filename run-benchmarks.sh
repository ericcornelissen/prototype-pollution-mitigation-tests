#!/bin/sh
# SPDX-License-Identifier: ISC

OUTFILE='bench.log'

rm -f $OUTFILE
touch $OUTFILE

{
	echo '# Object creation'
	node bench/create/baseline.bench.js
	node bench/create/object-create-null.bench.js
	node bench/create/object-freeze.bench.js
	node bench/create/object-prevent-extensions.bench.js
	node bench/create/object-seal.bench.js
	node bench/create/proxy-strict.bench.js
	node bench/create/proxy-allowlist.bench.js
	node bench/create/proxy-denylist.bench.js
	node bench/create/proxy-unrestricted.bench.js

	echo
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

	echo
	node bench/access/for-in/baseline.bench.js
	node bench/access/for-in/object-create-null.bench.js
	node bench/access/for-in/object-freeze.bench.js
	node bench/access/for-in/object-prevent-extensions.bench.js
	node bench/access/for-in/object-seal.bench.js
	node bench/access/for-in/proxy-strict.bench.js
	node bench/access/for-in/proxy-allowlist.bench.js
	node bench/access/for-in/proxy-denylist.bench.js
	node bench/access/for-in/proxy-unrestricted.bench.js

	echo
	echo '# Property assignment'
	node bench/assign/override/baseline.bench.js
	node bench/assign/override/object-create-null.bench.js
	node bench/assign/override/object-freeze.bench.js
	node bench/assign/override/object-prevent-extensions.bench.js
	node bench/assign/override/object-seal.bench.js
	node bench/assign/override/proxy-strict.bench.js
	node bench/assign/override/proxy-allowlist.bench.js
	node bench/assign/override/proxy-denylist.bench.js
	node bench/assign/override/proxy-unrestricted.bench.js

	echo
	node bench/assign/delete/baseline.bench.js
	node bench/assign/delete/object-create-null.bench.js
	node bench/assign/delete/object-freeze.bench.js
	node bench/assign/delete/object-prevent-extensions.bench.js
	node bench/assign/delete/object-seal.bench.js
	node bench/assign/delete/proxy-strict.bench.js
	node bench/assign/delete/proxy-allowlist.bench.js
	node bench/assign/delete/proxy-denylist.bench.js
	node bench/assign/delete/proxy-unrestricted.bench.js

	echo
	node bench/assign/extend/baseline.bench.js
	node bench/assign/extend/object-create-null.bench.js
	node bench/assign/extend/object-freeze.bench.js
	node bench/assign/extend/object-prevent-extensions.bench.js
	node bench/assign/extend/object-seal.bench.js
	node bench/assign/extend/proxy-strict.bench.js
	node bench/assign/extend/proxy-allowlist.bench.js
	node bench/assign/extend/proxy-denylist.bench.js
	node bench/assign/extend/proxy-unrestricted.bench.js

	echo
	echo '# Property call'
	node bench/call/present/baseline.bench.js
	node bench/call/present/object-create-null.bench.js
	node bench/call/present/object-freeze.bench.js
	node bench/call/present/object-prevent-extensions.bench.js
	node bench/call/present/object-seal.bench.js
	node bench/call/present/proxy-strict.bench.js
	node bench/call/present/proxy-allowlist.bench.js
	node bench/call/present/proxy-denylist.bench.js
	node bench/call/present/proxy-unrestricted.bench.js

	echo
	node bench/call/prototype/baseline.bench.js
	node bench/call/prototype/object-create-null.bench.js
	node bench/call/prototype/object-freeze.bench.js
	node bench/call/prototype/object-prevent-extensions.bench.js
	node bench/call/prototype/object-seal.bench.js
	node bench/call/prototype/proxy-strict.bench.js
	node bench/call/prototype/proxy-allowlist.bench.js
	node bench/call/prototype/proxy-denylist.bench.js
	node bench/call/prototype/proxy-unrestricted.bench.js
} | tee -a $OUTFILE

node script/convert-bench.js $OUTFILE
