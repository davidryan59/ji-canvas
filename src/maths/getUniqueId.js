const getUniqueId = () => {
  // Create a text string that is almost guaranteed unique,
  // from combination of a millisecond timestamp
  // and 4 random digits
  // You wouldn't expect to get any duplicates unless you generated
  // significantly more than sqrt(9000) IDs per millisecond, which is unlikely.
  const timeComponent = Date.now()
  const randomComponent = Math.floor(1000 + 8999 * Math.random())
  const result = `T${timeComponent}R${randomComponent}`
  return result
}

export default getUniqueId
