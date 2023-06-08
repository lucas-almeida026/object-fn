const objectMap = <InputType extends object, OutputType>(
  object: InputType, 
  fn: (
    key: keyof InputType, 
    value: InputType[keyof InputType],
    index: number,
    entries: [string, InputType[keyof InputType]][]
  ) => OutputType
): { [K in keyof InputType]: OutputType } => {
  const entries = Object.entries(object)
  const mapped = entries.map(
    ([key, value], index, entries) => [ key, fn(key as keyof InputType, value, index, entries) ]
  )
  return Object.fromEntries(mapped)
}

export default objectMap