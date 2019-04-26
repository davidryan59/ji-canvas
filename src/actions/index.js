import { startingIdValue } from '../constants'

let nextNoteId = startingIdValue

export const doNothing = () => ({
  type: 'DO_NOTHING',
})

export const addNote = () => ({
  type: 'ADD_NOTE',
  noteId: nextNoteId++
})

export const playNote = ({idx}) => ({
  type: 'PLAY_NOTE',
  idx
})

export const pauseNote = ({idx}) => ({
  type: 'PAUSE_NOTE',
  idx
})

export const dupNote = ({idx}) => ({
  type: 'DUP_NOTE',
  idx,
  newNoteId: nextNoteId++
})

export const delNote = ({noteId}) => ({
  type: 'DEL_NOTE',
  noteId
})

export const moveDown = ({idx}) => ({
  type: 'MOVE_DOWN',
  idx
})

export const unlockInput = ({noteId, inputName}) => ({
  type: 'ROW_UNLOCK',
  noteId,
  inputName
})

export const setInputBox = ({noteId, inputName, val}) => ({
  type: 'ROW_SET',
  noteId,
  inputName,
  val
})
