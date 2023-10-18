#!/bin/sh
# SPDX-License-Identifier: ISC

OUTFILE='out.txt'

rm $OUTFILE
touch $OUTFILE

echo '# Plain object' >>$OUTFILE
node --test-reporter=./script/reporter.js test/plain-object.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.create' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object-create-null.js >>$OUTFILE

# TODO: crashes; `Object.freeze` is too invasive for the testing framework?
#echo >>$OUTFILE
#echo 'Object.freeze' >>$OUTFILE
#node --test-reporter=./script/reporter.js test/object-freeze.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.preventExtension' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object-prevent-extensions.js >>$OUTFILE

echo >>$OUTFILE
echo '# Object.seal' >>$OUTFILE
node --test-reporter=./script/reporter.js test/object-seal.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (strict)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-strict.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (allowlist)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-allowlist.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (denylist)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-denylist.js >>$OUTFILE

echo >>$OUTFILE
echo '# Proxy (explicit prototype access)' >>$OUTFILE
node --test-reporter=./script/reporter.js test/proxy-with-prototype-access.js >>$OUTFILE

node script/converter.js $OUTFILE
