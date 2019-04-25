import { combineReducers } from 'redux'
import undoable from 'redux-undo'

import noteTable from './noteTable'
import general from './general'

const globalReducer = combineReducers({
  noteTable,
  general
})

const globalUndoableReducer = undoable(globalReducer, {limit: 50})

export default globalUndoableReducer
