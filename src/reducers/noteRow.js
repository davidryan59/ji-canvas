import { combineReducers } from 'redux'

import { noteId, startMs, lenMs, freqHz, volDb, audioStopIdx } from './noteCell'

const noteRow = combineReducers({
  noteId,
  startMs,
  lenMs,
  freqHz,
  volDb,
  audioStopIdx
})

export default noteRow
