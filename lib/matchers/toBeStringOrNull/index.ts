import { matcherHint, printExpected } from 'jest-matcher-utils'
import { predict } from '@/matchers/toBeStringOrNull/predict'

const passMessage = (received: unknown) => () =>
  matcherHint('.not.toBeStringOrNull', 'received') +
  '\n\n' +
  'Expected value to not be of type string or null, received\n' +
  `  ${printExpected(received)}\n`

const failMessage = (received: unknown) => () =>
  matcherHint('.toBeStringOrNull', 'received') +
  '\n\n' +
  'Expected value to be of type string or null, received:\n' +
  `  ${printExpected(received)}\n`

/**
 * Use `.toBeStringOrNull` when checking if a value is a `string` or `null`
 *
 * @beta
 */
const toBeStringOrNull = (received: unknown) => {
  const pass = predict(received)

  return {
    pass,
    message: pass ? passMessage(received) : failMessage(received)
  }
}

export { toBeStringOrNull }
