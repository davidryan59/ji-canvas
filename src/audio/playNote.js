export const playNote = (noteRow) => {
  const freqHz = noteRow.freqHz.val
  const lenMs = noteRow.lenMs.val
  const volDb = noteRow.volDb.val
  console.log(`Playing note at ${freqHz} Hz, for ${lenMs} ms, at ${volDb} dB...`)
}
