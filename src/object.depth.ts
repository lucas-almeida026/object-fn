import objectIs from './object.is'

const objectDepth = (o: object): number => {
  const values = Object.values(o)
  const objectChildrens = values.filter(val => objectIs(val))
  if(objectChildrens.length > 0){
    return 1 + Math.max(...objectChildrens.map(child => objectDepth(child)))
  }
  return 1
}

export default objectDepth