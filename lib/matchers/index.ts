import { toEqualOneOf } from '@/matchers/toEqualOneOf'
import { toBeNumberOrNull } from '@/matchers/toBeNumberOrNull'
import { toBeStringOrNull } from '@/matchers/toBeStringOrNull'

type TailFn<T extends (...args: any) => any> = (
  args: Parameters<T> extends [infer _, infer Rest] ? Rest : Parameters<T>
) => ReturnType<T>

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualOneOf: TailFn<typeof toEqualOneOf>
      toBeNumberOrNull: TailFn<typeof toBeNumberOrNull>
      toBeStringOrNull: TailFn<typeof toBeStringOrNull>
    }
  }
}

export { toEqualOneOf }
