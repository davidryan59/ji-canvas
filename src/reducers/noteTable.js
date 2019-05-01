import noteRow from './noteRow'

const localStorageKey = 'noteTable'
let initialState = null

const loadNoteTable = () => {
  if (initialState) return initialState
  if (typeof(Storage) !== "undefined") {
    console.log('Accessing local storage to load note table')
    initialState = JSON.parse(localStorage.getItem(localStorageKey))
    if (initialState) {
      console.log('Note table loaded from local storage:')
      console.log(initialState)
    } else {
      console.log('No note table in local storage, initialising empty note table')
      initialState = []
    }
  } else {
    console.log('Cannot access local storage, initialising empty note table')
    return []
  }
  return initialState
}

const saveNoteTable = (noteTableStateToSave) => {
  if (typeof(Storage) !== "undefined") {
    console.log('Accessing local storage to save...')
    localStorage.setItem(localStorageKey, JSON.stringify(noteTableStateToSave))
    console.log('Note table saved to local storage:')
    console.log(localStorage[localStorageKey])
  } else {
    console.log('Cannot access local storage')
  }
  return noteTableStateToSave
}

const noteTable = (state = loadNoteTable(), action) => {
  console.log(action)

  const prefix = 'ROW_'
  const prefixLength = prefix.length
  const actionTypeLength = action.type.length
  if (prefixLength < actionTypeLength && action.type.substr(0, prefixLength) === prefix) {
    const newAction = {...action, type: action.type.substr(prefixLength)}
    return state.map( tRow => (tRow.noteId === action.noteId) ? noteRow(tRow, newAction) : tRow )
  }
  
  if (action.type === 'LOAD_STATE') {
    console.log('LOAD_STATE in noteTable reducer - currently does nothing')
    return state
  }
  
  if (action.type === 'SAVE_STATE') return saveNoteTable(state)
  
  if (action.type === 'ADD_NOTE') return [...state, noteRow(undefined, action)]

  const findIdxFromNoteId = noteId => {
    for (var idx = 0; idx < state.length; idx++) {
      const row = state[idx]
      if (noteId === row.noteId) return idx
    }
    return -1
  }

  // From here on, all cases below must depend on finding action.noteId, otherwise no change
  const idxFound = findIdxFromNoteId(action.noteId)
  if (idxFound === -1) return state  
  
  switch (action.type) {
    case 'MOVE_DOWN':
      return [
        ...state.slice(0, idxFound),
        state[idxFound + 1],
        state[idxFound],
        ...state.slice(idxFound + 2)
      ]
    case 'MOVE_UP':
      return [
        ...state.slice(0, idxFound - 1),
        state[idxFound],
        state[idxFound - 1],
        ...state.slice(idxFound + 1)
      ]
    case 'DUP_NOTE':
      return state.reduce( (accum, tRow, idx) => {
          accum.push(tRow)
          if (idx === idxFound) accum.push({...tRow, noteId: action.newNoteId})
          return accum
        }, []
      )
    case 'DEL_NOTE':
      return state.filter( (tRow, idx) => (idx !== idxFound) )
    default:
      return state
  }

}

export default noteTable
