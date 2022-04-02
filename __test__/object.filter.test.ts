import objectFilter from '../src/object.filter'

describe('in object.filter function', () => {
  test('', () => {
    const obj = {
      a: '1',
      b: '2',
      c: null
    }
    const m = objectFilter(obj, (key, val) => key !== 'a' && val !== null && val !== undefined)
    expect(m.a).toBe(undefined)
    expect(m.c).toBe(undefined)
    expect(m.b).toBe('2')
  })
})