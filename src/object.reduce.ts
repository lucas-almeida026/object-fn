const objectReduce = <InputType extends object, OutputType>(
  object: InputType, 
  fn: (
    previousValue: OutputType, 
    key: string, 
    value: InputType[keyof InputType],
    index: number,
    entries: [string, InputType[keyof InputType]][]
  ) => OutputType,
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