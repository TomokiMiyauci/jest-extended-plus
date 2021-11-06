import { equals } from 'expect/build/jasmineUtils'
import { iterableEquality } from 'expect/build/utils'

const predict = (item: unknown, list: unknown[]): boolean =>
  list.some((expect) => equals(item, expect, [iterableEquality]))

export { predict }
