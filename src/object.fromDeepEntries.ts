import objectMap from './object.map'

const isArray = (val: any) => val instanceof Array

const objectFromDeepEntriesRec = (arr: any, count = 0): any => {
  if (count >= 500) {
    console.warn('[OBJECT.FROM_DEEP_ENTRIES]: maximum recursive depth exceeded')
    return {}
  }
  const entries = Object.fromEntries(arr)
  return objectMap(entries, (_, value) => {
    if (isArray(value) && value.every((el: any) => isArray(el))) {
      return objectFromDeepEntriesRec(value, count + 1)
    }
    return value
  })
}

const objectFromDeepEntries = (arr: any[]): unknown => objectFromDeepEntriesRec(arr)

export default objectFromDeepEntries