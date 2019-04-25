const checkFloat = (defaultVal, oldVal, newVal, minVal, maxVal, decimalPlaces) => {
  const newValNum = parseFloat(newVal)
  if (isNaN(newValNum) || newValNum < minVal || maxVal < newValNum) {
    const oldValNum = parseFloat(oldVal)
    if (isNaN(oldValNum)) return [false, defaultVal]
    return [false, oldValNum]
  }
  const roundedNumStr = newValNum.toFixed(decimalPlaces)   // String!
  const roundedNum = 1 * roundedNumStr
  return [true, roundedNum]
}

export const validateStartMs = (oldVal, newVal) => checkFloat(0, oldVal, newVal, 0, 600000, 1)
export const validateLenMs = (oldVal, newVal) => checkFloat(250, oldVal, newVal, 0, 10000, 1)
export const validateFreqHz = (oldVal, newVal) => checkFloat(256, oldVal, newVal, 20, 22050, 3)
export const validateVolDb = (oldVal, newVal) => checkFloat(0, oldVal, newVal, -100, 20, 2)
