const initialiseWindowState = () => ({
  width: window.innerWidth,
  height: window.innerHeight  
})

const windowReducer = (state = initialiseWindowState(), action) => {
  if (action.type === 'WINDOW_RESIZE') return {
    width: action.width,
    height: action.height
  }
  return state
}

export default windowReducer
