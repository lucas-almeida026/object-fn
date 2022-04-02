import objectSome from '../src/object.some'

describe('in object.some', () => {
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
    const m1 = objectSome(obj1, (_, val) => !!val)
    const m2 = objectSome(obj2, (_, val) => !!val)
    expect(m1).toBe(true)
    expect(m2).toBe(false)
  })
})