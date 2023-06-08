import objectReduce from '../src/object.reduce'

describe('in object.reduce function', () => {
  test('', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    }
    const m = objectReduce(obj, (prev, _, val) => ({ sum: prev.sum + val }), { sum: 0 })
    expect(m.sum).toBe(6)
  })
})