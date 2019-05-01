import { startingIdValue } from '../constants'

let nextActionId = startingIdValue
let nextNoteId = startingIdValue

export const actionDoNothing = () => ({
  type: 'DO_NOTHING',
  actionId: nextActionId++
})

export const actionLoadState = () => ({
  type: 'LOAD_STATE',
  actionId: nextActionId++
})

export const actionSaveState = () => ({
  type: 'SAVE_STATE',
  actionId: nextActionId++
})

export const actionAddNote = () => ({
  type: 'ADD_NOTE',
  noteId: nextNoteId++,
  actionId: nextActionId++
})

export const actionPlayNote = ({noteId, audioStopIdx}) => ({
  type: 'ROW_PLAY_NOTE',
  noteId,
  audioStopIdx,
  actionId: nextActionId++
})

export const actionStopNote = ({noteId, audioStopIdx}) => ({
  type: 'ROW_STOP_NOTE',
  noteId,
  audioStopIdx,
  actionId: nextActionId++
})

export const actionPlayAllNotes = ({audioStopIdx}) => ({
  type: 'PLAY_ALL_NOTES',
  audioStopIdx,
  actionId: nextActionId++
})

export const actionStopAllNotes = ({audioStopIdx}) => ({
  type: 'STOP_ALL_NOTES',
  audioStopIdx,
  actionId: nextActionId++
})

export const actionDuplicateNote = ({noteId}) => ({
  type: 'DUP_NOTE',
  noteId,
  newNoteId: nextNoteId++,
  actionId: nextActionId++
})

export const actionDeleteNote = ({noteId}) => ({
  type: 'DEL_NOTE',
  noteId,
  actionId: nextActionId++
})

export const actionMoveDown = ({noteId}) => ({
  type: 'MOVE_DOWN',
  noteId,
  actionId: nextActionId++
})

export const actionMoveUp = ({noteId}) => ({
  type: 'MOVE_UP',
  noteId
})

export const actionUnlockInput = ({noteId, inputName}) => ({
  type: 'ROW_UNLOCK',
  noteId,
  inputName,
  actionId: nextActionId++
})

export const actionSetInput = ({noteId, inputName, val}) => ({
  type: 'ROW_SET',
  noteId,
  inputName,
  val,
  actionId: nextActionId++
})
