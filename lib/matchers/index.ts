import { toEqualOneOf } from '@/matchers/toEqualOneOf'
import { toBeNumberOrNull } from '@/matchers/toBeNumberOrNull'
import { toBeStringOrNull } from '@/matchers/toBeStringOrNull'

type TailFn<T extends (...args: any) => any, R> = Parameters<T> extends [
  infer _,
  infer Rest
]
  ? (args: Rest) => R
  : () => R

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Use `.toEqualOneOf` when checking if a value equal to a member of a given `Array`
       *
       * @beta
       */
      toEqualOneOf: TailFn<typeof toEqualOneOf, R>

      /**
       * Use `.toBeNumberOrNull` when checking if a value is a `number` or `null`
       *
       * @beta
       */
      toBeNumberOrNull: TailFn<typeof toBeNumberOrNull, R>

      /**
       * Use `.toBeStringOrNull` when checking if a value is a `string` or `null`
       *
       * @beta
       */
      toBeStringOrNull: TailFn<typeof toBeStringOrNull, R>
    }
  }
}

export { toEqualOneOf, toBeStringOrNull, toBeNumberOrNull }
