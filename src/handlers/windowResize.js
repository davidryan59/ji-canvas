import { windowResizeAction } from '../actions'

const minChangePx = 60

const windowResize = (event, store) => {
  const windowState = store.getState().present.window
  const dispatch = store.dispatch
  
  const newX = event.target.innerWidth
  const newY = event.target.innerHeight
  const oldX = windowState.width
  const oldY = windowState.height
  
  const diffX = Math.abs(newX - oldX)
  const diffY = Math.abs(newY - oldY)
  const diff = Math.max(diffX, diffY)
  
  // Only dispatch action if change is more than a specific amount,
  // to avoid too many window resize actions
  if (minChangePx <= diff) dispatch(windowResizeAction({newX, newY}))
}

export default windowResize
