const objectEvery = <InputType extends object>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
) => {
  const entries = Object.entries(object)
  return entries.every(
    ([key, value], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
}

export default objectEvery