const objectMap = <InputType extends object, OutputType extends object>(
  object: InputType, 
  fn: (
    key: keyof InputType, 
    value: any,
    index: number,
    entries: [string, any][]
  ) => any
): OutputType => {
  const entries = Object.entries(object)
  const mapped = entries.map(
    ([key, value], index, entries) => [ key, fn(key as keyof InputType, value, index, entries) ]
  )
  return Object.fromEntries(mapped)
}

export default objectMap