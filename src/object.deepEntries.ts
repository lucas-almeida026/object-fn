import objectIs from './object.is'

let counter = 0
const objectDeepEntries = (o: object): any[] => {
  if(counter++ >= 500){
    console.warn('[OBJECT.DEEP_ENTRIES]: maximum update depth exceeded')
    return []
  }
  const entries = Object.entries(o)
  return entries.map(([key, value]) => ([key, (objectIs(value) ? [ ...objectDeepEntries(value)] : value)]))
}

export default objectDeepEntries