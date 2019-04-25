import { combineReducers } from 'redux'

import { noteId, startMs, lenMs, freqHz, volDb } from './noteCell'

const noteRow = combineReducers({
  noteId,
  startMs,
  lenMs,
  freqHz,
  volDb
})

export default noteRow
