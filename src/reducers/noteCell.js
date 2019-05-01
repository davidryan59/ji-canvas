import { validateStartMs, validateLenMs, validateFreqHz, validateVolDb } from '../validations'

const noteCell = (state = {}, action, inputName, getInitialVal, validateInput) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        val: getInitialVal(),
        editing: true
      }
    case 'UNLOCK':
      if (inputName !== action.inputName) return state
      return {
        ...state,
        editing: true
      }
    case 'SET':
      if (inputName !== action.inputName) return state
      const [isValid, val] = validateInput(state.val, action.val)
      return {
        ...state,
        editing: (isValid?undefined:true),
        val
      }
    default:
      return state
  }
}

export const noteId = (state = -1, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return action.noteId
    default:
      return state
  }
}

export const audioStopIdx = (state = null, action) => {
  switch (action.type) {
    case 'PLAY_NOTE':
      return action.audioStopIdx
    case 'STOP_NOTE':
      if (state === action.audioStopIdx) return null
      return state
    default:
      return state
  }
}

const startTimeIncrement = 80
let nextStartTimeMs = 0
export const startMs = (state, action) => noteCell(state, action,
  'startMs',
  () => nextStartTimeMs += startTimeIncrement * Math.floor(1 + 4 * Math.random()),
  validateStartMs
)

export const lenMs = (state, action) => noteCell(state, action,
  'lenMs',
  () => 100 * Math.floor(8 + 8 * Math.random()),
  validateLenMs
)

export const freqHz = (state, action) => noteCell(state, action,
  'freqHz',
  () => 80 * Math.floor(3 + 10 * Math.random()),
  validateFreqHz
)

export const volDb = (state, action) => noteCell(state, action,
  'volDb',
  () => Math.floor(-5 + 10 * Math.random()),
  validateVolDb
)
