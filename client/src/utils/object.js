export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export const isNotEmpty = (obj) => {
  return Object.keys(obj).length > 0 && obj.constructor === Object
}
