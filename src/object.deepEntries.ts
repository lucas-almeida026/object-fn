import objectIs from './object.is'

const objectDeepEntriesRec = (o: object, count = 0): unknown[] => {
  if (count >= 500) {
    console.warn('[OBJECT.DEEP_ENTRIES]: maximum recursive depth exceeded')
    return []
  }
  const entries = Object.entries(o)
  return entries.map(
    ([key, value]) =>
      ([key, (objectIs(value) ? [ ...objectDeepEntriesRec(value, count + 1)] : value)])
  )
}

const objectDeepEntries = (o: object) => objectDeepEntriesRec(o)


export default objectDeepEntries