import objectLength from '../src/object.length'

describe('in object.length function', () => {
  test('', () => {
    const obj = {
      a: '1',
      b: '2',
      c: null
    }
    const l = objectLength(obj)
    expect(l).toBe(3)
  })
})