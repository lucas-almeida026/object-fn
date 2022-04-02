import objectDepth from '../src/object.depth'

describe('in object.depth', () => {
  test('', () => {
    const a1 = {
      a: '1'
    }
    const a2 = {
      a: {
        b: '2'
      }
    }
    expect(objectDepth(a1)).toBe(1)
    expect(objectDepth(a2)).toBe(2)
  })
})