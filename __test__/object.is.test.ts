import objectIs from '../src/object.is'

describe('in object.is', () => {
  test('', () => {
    const o = {
      a: 'a'
    }
    const a = ['a']
    expect(objectIs(o)).toBe(true)
    expect(objectIs(a)).toBe(false)
  }) 
})