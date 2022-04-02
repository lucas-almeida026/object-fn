import objectMap from './object.map'

let counter = 0
const isArray = (val: any) => val instanceof Array

const objectFromDeepEntries = (arr: any): any => {
  if(counter++ >= 500){
    console.warn('[OBJECT.FROM_DEEP_ENTRIES]: maximum update depth exceeded')
    return {}
  }
  const entries = Object.fromEntries(arr)
  return objectMap(entries, (_, value) => {
    if(isArray(value) && value.every((el: any) => isArray(el))) {
      return objectFromDeepEntries(value)
    }
    return value
  })
}

export default objectFromDeepEntries