import objectMap from '../src/object.map'

describe('in object.map function', () => {
  test('', () => {
    const obj = {
      a: '1',
      b: '2'
    }
    const m = objectMap(obj, (_, val) => parseInt(val))
    expect(m.a).toBe(1)
    expect(m.b).toBe(2)
  })
})