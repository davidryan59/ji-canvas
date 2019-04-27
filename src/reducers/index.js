import { combineReducers } from 'redux'
import undoable from 'redux-undo'

import noteTable from './noteTable'
import lastAction from './lastAction'
import audioStopIdx from './audioStopIdx'

const globalReducer = combineReducers({
  noteTable,
  lastAction,
  audioStopIdx
})

const globalUndoableReducer = undoable(globalReducer, {limit: 50})

export default globalUndoableReducer
