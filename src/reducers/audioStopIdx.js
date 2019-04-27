const audioStopIdx = (state = null, action) => {
  switch (action.type) {
    case 'PLAY_ALL_NOTES':
      return action.audioStopIdx
    case 'STOP_ALL_NOTES':
      if (state === action.audioStopIdx) return null
      return state
    default:
      return state
  }
}

export default audioStopIdx
