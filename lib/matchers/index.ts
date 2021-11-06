import { toEqualOneOf } from '@/matchers/toEqualOneOf'

declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualOneOf: typeof toEqualOneOf
    }
  }
}

export { toEqualOneOf }
