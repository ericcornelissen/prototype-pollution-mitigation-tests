// SPDX-License-Identifier: ISC

/**
 * A Test Anything Protocol (TAP) reporter designed with the Node.js test runner
 * in mind that reports only the most deeply nested tests. This means any `test`
 * that contains a nested `test` will not be reported. In other words, it
 * assumes `test`s with any nested `test`s make no assertions.
 *
 * Usage:
 *
 *     node --test-reporter=./reporter.js test/example.test.js
 */

const state = {
  nameStack: [],
  previous: null,
};

export default async function* customReporter(source) {
  for await (const event of source) {
    switch (event.type) {
      case 'test:start':
        state.nameStack.push(event.data.name);
        state.previous = event.data.name;
        break;
      case 'test:pass':
        if (state.previous === event.data.name) {
          yield `${state.nameStack.join(">")}\t+\n`;
        }
        state.nameStack.pop();
        break;
      case 'test:fail':
        if (state.previous === event.data.name) {
          yield `${state.nameStack.join(">")}\t-\n`;
        }
        state.nameStack.pop();
        break;
    }
  }
}
