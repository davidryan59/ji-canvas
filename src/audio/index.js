import {oscType, initialDelayTimeMs, rampUpTimeMs, rampDownTimeMs, maxNoteTimeMs} from '../constants'

const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
const stopNoteStore = []
const storeStopNoteArray = stopNoteArray => {
  stopNoteStore.push(stopNoteArray)
  const audioStopIdx = stopNoteStore.length - 1
  return audioStopIdx
}

const vol2Amp = (volDb) => {
  const checkedDb = parseFloat(volDb)
  if (isNaN(checkedDb) || checkedDb <= -100) return 0
  return 10 ** (0.05 * Math.min(0, checkedDb - 20))
}

const playNoteInner = (noteRow, startNow) => {
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
  const ctxTimeS = audioCtx.currentTime + 0.001 * initialDelayTimeMs + 0.001 * startMs
  const time3 = Math.max(0, Math.min(0.001 * maxNoteTimeMs, 0.001 * lenMs))
  const time1 = Math.max(0, Math.min(time3, 0.001 * rampUpTimeMs))
  const time2 = Math.max(time1, Math.min(time3, time3 - 0.001 * rampDownTimeMs))
  oscNode.frequency.setValueAtTime(freqHz, ctxTimeS)
  gainNode.gain.setValueAtTime(0, ctxTimeS)
  gainNode.gain.linearRampToValueAtTime(amplitude, ctxTimeS + time1)
  gainNode.gain.linearRampToValueAtTime(amplitude, ctxTimeS + time2)
  gainNode.gain.linearRampToValueAtTime(0, ctxTimeS + time3)
  oscNode.start(ctxTimeS)
  oscNode.stop(ctxTimeS + time3)
  const stopNote = delayTimeMs => {
    const currentAmp = gainNode.gain.value
    const firstTimeS = audioCtx.currentTime + 0.001
    const stopTimeS = firstTimeS + 0.001 * delayTimeMs
    gainNode.gain.linearRampToValueAtTime(currentAmp, firstTimeS)
    gainNode.gain.linearRampToValueAtTime(0, stopTimeS)
    oscNode.stop(stopTimeS)
  }
  const stopTimeS = ctxTimeS + time3
  return [stopNote, stopTimeS]
}

const playAndAdd = (noteRowArray, startNow) => {
  let maxStopTimeS = 0
  const audioStopIdx = storeStopNoteArray( noteRowArray.map( noteRow => {
    const [stopNote, stopTimeS] = playNoteInner(noteRow, startNow)
    maxStopTimeS = Math.max(maxStopTimeS, stopTimeS)
    return stopNote
  }))
  const delayStopTimeS = maxStopTimeS - audioCtx.currentTime
  return [audioStopIdx, delayStopTimeS]
}

export const audioPlayNote = noteRow => playAndAdd([noteRow], true)
export const audioPlayAllNotes = noteTable => playAndAdd(noteTable, false)

const stopDelayTimeMs = 10
export const audioStop = audioStopIdx => {
  const fnArray = stopNoteStore[audioStopIdx]
  if (!fnArray) {
    // console.log(`Notes at index ${audioStopIdx} have already stopped`)
    return
  }
  fnArray.forEach( fn => fn(stopDelayTimeMs) )
  stopNoteStore[audioStopIdx] = null
  // console.log(`Stopped notes playing at index ${audioStopIdx}`)
}
