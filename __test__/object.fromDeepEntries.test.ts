import fromDeepEntries from '../src/object.fromDeepEntries'

describe('in object.deepEntries', () => {
  test('', () => {
    const t = [
      ['a', 'a'],
      ['b', [
        ['c', 'c']
      ]]
    ]
    expect(fromDeepEntries(t)).toEqual({
      a: 'a',
      b: {
        c: 'c'
      }
    })
  })
})