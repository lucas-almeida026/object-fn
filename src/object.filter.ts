const objectFilter = <InputType extends object>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
): Partial<InputType> => {
  const entries = Object.entries(object)
  const filtered = entries.filter(
    ([ key, value ], index, entries) => fn(key as keyof InputType, value, index, entries)
  )
  return Object.fromEntries(filtered) as Partial<InputType>
}

export default objectFilter