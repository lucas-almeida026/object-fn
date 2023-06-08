const objectSome = <InputType extends object>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: InputType[keyof InputType],
    index: number,
    entries: [string, InputType[keyof InputType]][]
  ) => boolean
) => {
  const entries = Object.entries(object)
  return entries.some(
    ([key, value], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
}

export default objectSome