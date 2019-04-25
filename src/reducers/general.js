const general = (state = {}, action) => {
  return {...state, lastAction: action}
}

export default general
