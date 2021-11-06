import { matcherHint, printExpected } from 'jest-matcher-utils'
import { predict } from '@/matchers/toBeNumberOrNull/predict'

const passMessage = (received: unknown) => () =>
  matcherHint('.not.toBeNumberOrNull', 'received') +
  '\n\n' +
  'Expected value to not be of type number or null, received\n' +
  `  ${printExpected(received)}\n`

const failMessage = (received: unknown) => () =>
  matcherHint('.toBeNumberOrNull', 'received') +
  '\n\n' +
  'Expected value to be of type number or null, received:\n' +
  `  ${printExpected(received)}\n`

/**
 * Use `.toBeNumberOrNull` when checking if a value is a `number` or `null`
 *
 * @beta
 */
const toBeNumberOrNull = (received: unknown) => {
  const pass = predict(received)

  return {
    pass,
    message: pass ? passMessage(received) : failMessage(received)
  }
}

export { toBeNumberOrNull }
