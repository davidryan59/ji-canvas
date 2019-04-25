import React from 'react'

const InputBox = ({preLabel, data, postLabel, onUnlock, onEditValue}) => (
  <span style={{textAlign: 'center'}}>
    {
      data.editing
      ?
      ""
      :
      <button onClick={onUnlock} className="iconOnly">
        &#x270E;
      </button>
    }    
    &nbsp;&nbsp;
    <label>{preLabel}</label>
    &nbsp;&nbsp;
    {
      data.editing
      ?
      <input
        defaultValue = {data.val}
        onBlur = {onEditValue}
        style = {{width:'70%', boxSizing:'border-box', fontFamily:'monospace', textAlign:'right'}}
      />
      :
      data.val
    }
    &nbsp;&nbsp;
    {postLabel}
  </span>
)

export default InputBox


// onBlur fires when input box has lost focus, e.g. Enter key is pressed,
// which is really what we want.

// onChange fires on every keypress, definitely not what we want.
