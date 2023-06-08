const objectIs = (val: any) => val instanceof Object && !(Array.isArray(val))

export default objectIs