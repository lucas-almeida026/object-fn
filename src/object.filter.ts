const objectFilter = <InputType extends object, OutputType = unknown>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: InputType[keyof InputType],
    index: number,
    entries: [string, InputType[keyof InputType]][]
  ) => boolean
): OutputType => {
  const entries = Object.entries(object)
  const filtered = entries.filter(
    ([ key, value ], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
  return Object.fromEntries(filtered) as OutputType
}

export default objectFilter