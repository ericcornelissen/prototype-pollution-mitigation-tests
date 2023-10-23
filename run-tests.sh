#!/bin/sh
# SPDX-License-Identifier: ISC

OUTFILE='out.txt'

rm $OUTFILE
touch $OUTFILE

echo '# Plain object' >>$OUTFILE
node --test-reporter=./script/reporter.js test/plain-object.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.create' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object-create-null.test.js >>$OUTFILE

# TODO: crashes; `Object.freeze` is too invasive for the testing framework?
#echo >>$OUTFILE
#echo 'Object.freeze' >>$OUTFILE
#node --test-reporter=./script/reporter.js test/object-freeze.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.preventExtension' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object-prevent-extensions.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.seal' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object-seal.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (strict)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-strict.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (allowlist)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-allowlist.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (denylist)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-denylist.test.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (explicit prototype access)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-with-prototype-access.test.js >>$OUTFILE

node script/converter.js $OUTFILE
