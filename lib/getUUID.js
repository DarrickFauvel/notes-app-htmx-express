export const getUUID = () => {
  const fullUUID = crypto.randomUUID()
  const array = fullUUID.split("-")
  const lastElement = array[array.length - 1]
  const shortUUID = lastElement
  return shortUUID
}
