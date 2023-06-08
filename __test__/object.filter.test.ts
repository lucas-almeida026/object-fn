import objectFilter from '../src/object.filter'

describe('in object.filter function', () => {
  test('', () => {
    const obj = {
      a: '1',
      b: '2',
      c: null
    }
    const m = objectFilter<typeof obj, { b: string }>(obj, (key, val) => key !== 'a' && val !== null && val !== undefined)
    expect((m as any).a).toBe(undefined)
    expect((m as any).c).toBe(undefined)
    expect(m.b).toBe('2')
  })
})