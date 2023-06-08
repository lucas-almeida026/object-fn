const objectEvery = <InputType extends object>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: InputType[keyof InputType],
    index: number,
    entries: [string, InputType[keyof InputType]][]
  ) => boolean
) => {
  const entries = Object.entries(object)
  return entries.every(
    ([key, value], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
}

export default objectEvery