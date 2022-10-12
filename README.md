# object-fn-ts
map, filter, reduce and other array methods but for objects

## Contents

### objectMap
Signature: \<InputType extends object, OutputType extends object\>(
  object: InputType, 
  fn: (
    key: keyof InputType, 
    value: any,
    index: number,
    entries: [string, any][]
  ) => any
) => OutputType


Example:
```typescript
const obj = {
  a: '1',
  b: '2'
}
objectMap<typeof obj, {[key in keyof typeof obj]: number}>(obj, (_, val) => parseInt(val)) // 👉 { a: 1, b: 2 }
```

### objectFilter
Signature: \<InputType extends object\>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
) => Partial<InputType>


Example:
```typescript
const obj = {
  a: '1',
  b: '2',
  c: null
}
objectFilter(obj, (key, val) => key !== 'a' && val !== null && val !== undefined) // 👉 { b: '2 }
```

### objectReduce
Signature: \<InputType extends object, OutputType extends object\>(
  object: InputType, 
  fn: (
    previousValue: OutputType, 
    key: string, 
    value: any,
    index: number,
    entries: [string, any][]
  ) => any,
  initialValue: OutputType
) => OutputType


Example:
```typescript
const obj = {
  a: 1,
  b: 2,
  c: 3
}

objectReduce(obj, (prev, key, val) => ({ sum: prev.sum + val }), { sum: 0 }) // 👉 { sum: 6 }
```


### objectSome
Signature: \<InputType extends object\>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
) => boolean

Example:
```typescript
const obj1 = {
  a: true,
  b: false,
  c: false
}
const obj2 = {
  a: false,
  b: false,
  c: false
}
objectSome(obj1, (_, val) => !!val) // 👉 true
objectSome(obj2, (_, val) => !!val) // 👉 false
```


### objectEvery
Signature: \<InputType extends object\>(
  object: InputType,
  fn: (
    key: keyof InputType,
    value: any,
    index: number,
    entries: [string, any][]
  ) => boolean
) => boolean

Example:
```typescript
const obj1 = {
  a: true,
  b: false,
  c: false
}
const obj2 = {
  a: false,
  b: false,
  c: false
}
objectEvery(obj1, (_, val) => !val) // 👉 false
objectEvery(obj2, (_, val) => !val) // 👉 true
```


### objectLength
Signature: (baseObject: object) => number


Example:
```typescript
const obj = {
  a: 'a',
  b: 'b',
}
const obj2 = {
  a: 'a',
  b: 'b',
  c: 'c'
}

objectLength(obj) // 👉 2
objectLength(obj2) // 👉 3
```

### objectIs
Signature: (val: any) => boolean


Example:
```typescript
const o = {
  a: 'a'
}
const a = ['a']

objectIs(o) // 👉 true
objectIs(a) // 👉 false
```

### objectDepth
Signature:  (o: object) => number


Example: 
```typescript
const a = {
  a: '1'
}
const b = {
  a: {
    b: '2'
  }
}
objectDepth(a) // 👉 1
objectDepth(b) // 👉 2
```


### objectDeepEntries
Signature: (o: object) => any[]

Example:
```typescript
const t = {
  a: 'a',
  b: {
    c: 'c'
  }
}
objectDeepEntries(t) // 👉 [ ['a', 'a'], ['b', [ ['c', 'c'] ] ] ]
```


### objectFromDeepEntries
Signature: (arr: any[]) => any

Example:
```typescript
const t = [
  ['a', 'a'],
  ['b', [
    ['c', 'c']
  ]]
]
fromDeepEntries(t) // 👉 { a: 'a', b: { c: 'c' } }
```

## CHANGE LOG
- v2.0.0 | 2022-10-12 :
  - Change folder structure (rm lib folder from release)