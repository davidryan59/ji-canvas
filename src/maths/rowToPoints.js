const rowToPoints = row => {
  const startMs = row.startMs.val
  const lenMs = row.lenMs.val
  const freqHz = row.freqHz.val
  const volDb = row.volDb.val
  
  const timeZeroMs = 0
  const baseFreqHz = 1000
  const minVolDb = -10
  const maxVolDb = 20
  
  const timeFactor = 0.2
  const freqFactor = 0.5
  const volFactor = 30
  
  const endMs = startMs + lenMs
  const volFraction = Math.max(0, Math.min(1, (volDb - minVolDb) / (maxVolDb - minVolDb)))
  
  const x0 = timeFactor * (startMs - timeZeroMs)
  const y0 = freqFactor * (baseFreqHz - freqHz)
  const d0 = volFactor * volFraction
  
  const x1 = timeFactor * (endMs - timeZeroMs)
  const y1 = freqFactor * (baseFreqHz - freqHz)
  const d1 = 0.5 * volFactor * volFraction
  
  const x01 = 0.1 * (9 * x0 + x1)
  const x09 = 0.1 * (x0 + 9 * x1)
  
  const points = [
    x0, y0,
    x01, y0 + d0,
    x09, y1 + d1,
    x1, y1,
    x09, y1 - d1,
    x01, y0 - d0,
    x0, y0
  ]
  
  return points
}

export default rowToPoints
