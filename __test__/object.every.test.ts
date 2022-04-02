import objectEvery from '../src/object.every'

describe('in object.every', () => {
  test('', () => {
    const obj1 = {
      a: true,
      b: false,
      c: false
    }
    const obj2 = {
      a: false,
      b: false,
      c: false
    }
    const m1 = objectEvery(obj1, (_, val) => !val)
    const m2 = objectEvery(obj2, (_, val) => !val)
    expect(m1).toBe(false)
    expect(m2).toBe(true)
  })
})