export const vol2Amp = (volDb) => {
  const checkedDb = parseFloat(volDb)
  if (isNaN(checkedDb) || checkedDb <= -100) return 0
  return 10 ** (0.05 * Math.min(0, checkedDb - 20))
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
const oscType = 'triangle'
const deltaTimeS = 0.001
const rampUpTimeS = 0.03
const rampDownTimeS = 0.1
const maxNoteTimeS = 5

export const playNote = (noteRow, startNow) => {
  const startMs = (startNow) ? 0 : noteRow.startMs.val
  const freqHz = noteRow.freqHz.val
  const lenMs = noteRow.lenMs.val
  const volDb = noteRow.volDb.val
  const amplitude = vol2Amp(volDb)
  const ampText = ('' + amplitude).slice(0, 8)
  console.log(`Playing note at ${freqHz} Hz, for ${lenMs} ms, at ${volDb} dB (${ampText} amplitude)`)
  
  const oscNode = audioCtx.createOscillator()
  const gainNode = audioCtx.createGain()
  oscNode.connect(gainNode)
  gainNode.connect(audioCtx.destination)
  oscNode.type = oscType
  const ctxTimeS = audioCtx.currentTime + deltaTimeS + 0.001 * startMs
  const time0 = 0
  const time3 = Math.max(time0, Math.min(maxNoteTimeS, 0.001 * lenMs))
  const time1 = Math.max(time0, Math.min(time3, rampUpTimeS))
  const time2 = Math.max(time1, Math.min(time3, time3 - rampDownTimeS))
  oscNode.frequency.setValueAtTime(freqHz, ctxTimeS + time0)
  gainNode.gain.setValueAtTime(0, ctxTimeS + time0)
  gainNode.gain.linearRampToValueAtTime(amplitude, ctxTimeS + time1)
  gainNode.gain.linearRampToValueAtTime(amplitude, ctxTimeS + time2)
  gainNode.gain.linearRampToValueAtTime(0, ctxTimeS + time3)
  oscNode.start(ctxTimeS)
  oscNode.stop(ctxTimeS + time3)
}

export const playAllNotes = noteTable => noteTable.forEach( noteRow => playNote(noteRow) )
