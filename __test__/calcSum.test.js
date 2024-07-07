import { expect, test } from '@jest/globals'
import { calcSum } from './calcSum'

test('Test calcSum', () => {
  expect(calcSum(2, 3)).toBe(5)
})
