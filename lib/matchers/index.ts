import { toEqualOneOf } from '@/matchers/toEqualOneOf'

type TailFn<T extends (...args: any) => any> = (
  args: Parameters<T> extends [infer _, infer Rest] ? Rest : Parameters<T>
) => ReturnType<T>

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualOneOf: TailFn<typeof toEqualOneOf>
    }
  }
}

export { toEqualOneOf }
