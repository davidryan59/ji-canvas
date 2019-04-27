import noteRow from './noteRow'

const noteTable = (state = [], action) => {

  const prefix = 'ROW_'
  const prefixLength = prefix.length
  const actionTypeLength = action.type.length
  if (prefixLength < actionTypeLength && action.type.substr(0, prefixLength) === prefix) {
    const newAction = {...action, type: action.type.substr(prefixLength)}
    return state.map( tRow => (tRow.noteId === action.noteId) ? noteRow(tRow, newAction) : tRow )
  }
  
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
