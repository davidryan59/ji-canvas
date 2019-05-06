import { combineReducers } from 'redux'
import undoable from 'redux-undo'

import windowReducer from './window'
import noteTable from './noteTable'
import lastAction from './lastAction'
import audioStopIdx from './audioStopIdx'

const globalReducer = combineReducers({
  window: windowReducer,
  noteTable,
  audioStopIdx,
  lastAction
})

const globalUndoableReducer = undoable(globalReducer, {limit: 50})

export default globalUndoableReducer
