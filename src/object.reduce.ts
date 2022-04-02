const objectReduce = <InputType extends object, OutputType extends object>(
  object: InputType, 
  fn: (
    previousValue: OutputType, 
    key: string, 
    value: any,
    index: number,
    entries: [string, any][]
  ) => any,
  initialValue: OutputType
): OutputType => {
  const entries = Object.entries(object)
  const mapped = entries.reduce(
    (prev, [key, value], index, entries) => fn(prev, key, value, index, entries),
    initialValue
  )
  return mapped
}

export default objectReduce