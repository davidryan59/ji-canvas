import getUniqueId from '../maths/getUniqueId'

let nextActionId = 0

export const actionDoNothing = () => ({
  type: 'DO_NOTHING',
  actionId: nextActionId++
})

export const windowResizeAction = ({newX, newY}) => ({
  type: 'WINDOW_RESIZE',
  width: newX,
  height: newY,
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
  actionId: nextActionId++,
  noteId: getUniqueId()
})

export const actionPlayNote = ({noteId, audioStopIdx}) => ({
  type: 'ROW_PLAY_NOTE',
  actionId: nextActionId++,
  noteId,
  audioStopIdx
})

export const actionStopNote = ({noteId, audioStopIdx}) => ({
  type: 'ROW_STOP_NOTE',
  actionId: nextActionId++,
  noteId,
  audioStopIdx
})

export const actionPlayAllNotes = ({audioStopIdx}) => ({
  type: 'PLAY_ALL_NOTES',
  actionId: nextActionId++,
  audioStopIdx
})

export const actionStopAllNotes = ({audioStopIdx}) => ({
  type: 'STOP_ALL_NOTES',
  actionId: nextActionId++,
  audioStopIdx
})

export const actionDuplicateNote = ({noteId}) => ({
  type: 'DUP_NOTE',
  actionId: nextActionId++,
  noteId,
  newNoteId: getUniqueId()
})

export const actionDeleteNote = ({noteId}) => ({
  type: 'DEL_NOTE',
  actionId: nextActionId++,
  noteId
})

export const actionMoveDown = ({noteId}) => ({
  type: 'MOVE_DOWN',
  actionId: nextActionId++,
  noteId
})

export const actionMoveUp = ({noteId}) => ({
  type: 'MOVE_UP',
  actionId: nextActionId++,
  noteId
})

export const actionUnlockInput = ({noteId, inputName}) => ({
  type: 'ROW_UNLOCK',
  actionId: nextActionId++,
  noteId,
  inputName
})

export const actionSetInput = ({noteId, inputName, val}) => ({
  type: 'ROW_SET',
  actionId: nextActionId++,
  noteId,
  inputName,
  val
})
