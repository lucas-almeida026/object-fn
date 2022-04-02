import objectDeepEntries from '../src/object.deepEntries'

describe('in object.deepEntries', () => {
  test('', () => {
    const t = {
      a: 'a',
      b: {
        c: 'c'
      }
    }
    expect(objectDeepEntries(t)).toEqual([
      ['a', 'a'],
      ['b', [
        ['c', 'c']
      ]]
    ])
  })
})