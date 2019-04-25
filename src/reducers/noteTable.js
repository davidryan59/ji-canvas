import noteRow from './noteRow'

const noteTable = (state = [], action) => {

  const prefix = 'ROW_'
  const prefixLength = prefix.length
  const actionTypeLength = action.type.length
  if (prefixLength < actionTypeLength && action.type.substr(0, prefixLength) === prefix) {
    const newAction = {...action, type: action.type.substr(prefixLength)}
    return state.map( tRow => (tRow.noteId === action.noteId) ? noteRow(tRow, newAction) : tRow )
  }

  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        noteRow(undefined, action)
      ]
    case 'MOVE_UP':
      const idxu = action.idx
      return [
        ...state.slice(0, idxu-1),
        state[idxu],
        state[idxu-1],
        ...state.slice(idxu+1)
      ]
    case 'MOVE_DOWN':
      const idxd = action.idx
      return [
        ...state.slice(0, idxd),
        state[idxd+1],
        state[idxd],
        ...state.slice(idxd+2)
      ]
    case 'DUP_NOTE':
      return state.reduce( (accum, tRow) => {
          accum.push(tRow)
          if (tRow.noteId === action.noteId) accum.push({...tRow, noteId: action.newNoteId})
          return accum
        }, []
      )
    case 'DEL_NOTE':
      return state.filter( tRow => (tRow.noteId !== action.noteId) )
    default:
      return state
  }

}

export default noteTable
