import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils'
import { predict } from '@/matchers/toEqualOneOf/predict'

const passMessage = (item: unknown, list: unknown[]) => () =>
  matcherHint('.not.toEqualOneOf', 'item', 'list') +
  '\n\n' +
  'Expected value to not be in list:\n' +
  `  ${printExpected(list)}\n` +
  'Received:\n' +
  `  ${printReceived(item)}`

const failMessage = (item: unknown, list: unknown[]) => () =>
  matcherHint('.toEqualOneOf', 'item', 'list') +
  '\n\n' +
  'Expected value to be in list:\n' +
  `  ${printExpected(list)}\n` +
  'Received:\n' +
  `  ${printReceived(item)}`

const toEqualOneOf = (received: any, expected: unknown[]) => {
  const pass = predict(received, expected)

  return {
    pass,
    message: pass
      ? passMessage(received, expected)
      : failMessage(received, expected)
  }
}

export { toEqualOneOf }
