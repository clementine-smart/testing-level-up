const { sumArray } = require('./functions')

test('sumArray can sum all contents of an array', () => {
  const array = [2, 3, 5, 5, 2]
  const expected = 17

  const actual = sumArray(array)

  expect(actual).toBe(expected)
})
