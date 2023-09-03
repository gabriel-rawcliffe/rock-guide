export function dashedUrl(name: string, id: number) {
  const areaUrl = `${name.split(' ').join('-')}-${String(id)}`
  return areaUrl
}

export function areaIdFromUrl(string: string) {
  const arr = string.split('-')
  return Number(arr[arr.length - 1])
}

export function generateStarString(number: number) {
  if (typeof number !== 'number' || isNaN(number) || number < 0) {
    return ''
  }
  const starString = '⭐'.repeat(number)
  return starString
}
