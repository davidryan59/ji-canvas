import { validateStartMs, validateLenMs, validateFreqHz, validateVolDb } from '../validations'

const inputBox = (state = {}, action, inputName, getInitialVal, validateInput) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        val: getInitialVal(),
        editing: undefined
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

const startTimeIncrement = 80
let nextStartTimeMs = 0
export const startMs = (state, action) => inputBox(state, action,
  'startMs',
  () => nextStartTimeMs += startTimeIncrement * Math.floor(1 + 4 * Math.random()),
  validateStartMs
)

export const lenMs = (state, action) => inputBox(state, action,
  'lenMs',
  () => 200 * Math.floor(1 + 4 * Math.random()),
  validateLenMs
)

export const freqHz = (state, action) => inputBox(state, action,
  'freqHz',
  () => 15 * Math.floor(3 + 64 * Math.random()),
  validateFreqHz
)

export const volDb = (state, action) => inputBox(state, action,
  'volDb',
  () => Math.floor(-5 + 10 * Math.random()),
  validateVolDb
)
