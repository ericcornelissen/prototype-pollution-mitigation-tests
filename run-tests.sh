#!/bin/sh
# SPDX-License-Identifier: ISC

OUTFILE='test.log'

rm -f $OUTFILE
touch $OUTFILE

{
	echo '# Baseline'
	node --test-reporter=./script/reporter.js test/object/baseline.test.js

	echo
	echo '# Object.create'
	node --test-reporter=./script/reporter.js test/object/object-create-null.test.js

	# TODO: crashes; `Object.freeze` is too invasive for the testing framework?
	#echo
	#echo 'Object.freeze'
	#node --test-reporter=./script/reporter.js test/object/object-freeze.test.js

	echo
	echo '# Object.preventExtension'
	node --test-reporter=./script/reporter.js test/object/object-prevent-extensions.test.js

	echo
	echo '# Object.seal'
	node --test-reporter=./script/reporter.js test/object/object-seal.test.js

	echo
	echo '# Proxy (strict)'
	node --test-reporter=./script/reporter.js test/object/proxy-strict.test.js

	echo
	echo '# Proxy (allowlist)'
	node --test-reporter=./script/reporter.js test/object/proxy-allowlist.test.js

	echo
	echo '# Proxy (denylist)'
	node --test-reporter=./script/reporter.js test/object/proxy-denylist.test.js

	echo
	echo '# Proxy (unrestricted)'
	node --test-reporter=./script/reporter.js test/object/proxy-unrestricted.test.js
} >>$OUTFILE

node script/convert-test.js obj $OUTFILE

# ------------------------------------------------------------------------------

rm -f $OUTFILE
touch $OUTFILE

{
	echo '# Baseline'
	node --test-reporter=./script/reporter.js test/array/baseline.test.js

	echo
	echo '# Object.freeze'
	node --test-reporter=./script/reporter.js test/array/object-freeze.test.js

	echo
	echo '# Object.preventExtension'
	node --test-reporter=./script/reporter.js test/array/object-prevent-extensions.test.js

	echo
	echo '# Object.seal'
	node --test-reporter=./script/reporter.js test/array/object-seal.test.js

	echo
	echo '# Proxy (strict)'
	node --test-reporter=./script/reporter.js test/array/proxy-strict.test.js

	echo
	echo '# Proxy (allowlist)'
	node --test-reporter=./script/reporter.js test/array/proxy-allowlist.test.js

	echo
	echo '# Proxy (denylist)'
	node --test-reporter=./script/reporter.js test/array/proxy-denylist.test.js

	echo
	echo '# Proxy (unrestricted)'
	node --test-reporter=./script/reporter.js test/array/proxy-unrestricted.test.js
} >>$OUTFILE

node script/convert-test.js arr $OUTFILE
