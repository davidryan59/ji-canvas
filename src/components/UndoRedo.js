import React from 'react'

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <span>
    <button onClick={onUndo} disabled={!canUndo} className={canUndo?'text':'text disabled'}>
      &#x2190;
    </button>
    &nbsp;
    <button onClick={onRedo} disabled={!canRedo} className={canRedo?'text':'text disabled'}>
      &#x2192;
    </button>
  </span>
)

export default UndoRedo
