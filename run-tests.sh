#!/bin/sh
# SPDX-License-Identifier: ISC

OUTFILE='test.log'

rm -f $OUTFILE
touch $OUTFILE

echo '# Baseline' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/baseline.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.create' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/object-create-null.test.js >>$OUTFILE

# TODO: crashes; `Object.freeze` is too invasive for the testing framework?
#echo >>$OUTFILE
#echo 'Object.freeze' >>$OUTFILE
#node --test-reporter=./script/reporter.js test/object/object-freeze.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.preventExtension' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/object-prevent-extensions.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.seal' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/object-seal.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (strict)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/proxy-strict.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (allowlist)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/proxy-allowlist.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (denylist)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/proxy-denylist.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (unrestricted)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object/proxy-unrestricted.test.js >>$OUTFILE

node script/convert-test.js $OUTFILE
