import React from 'react'
import { Column, Row } from 'simple-flexbox'

import UndoRedoC from './UndoRedoC'

const flexCol1 = '50'
const flexCol2 = '20'
const flexCol3 = '10'
const flexCol4 = '40'

const NoteTableButtonBar = ({audioStopIdx, loadState, saveState, playAllNotes, stopAllNotes, addNote, doNothing}) => (
  <Row className='buttonBar'>
    <Column className='buttonCell' flex={flexCol1} horizontal='start'>
      <button className='mainAdd' onClick={addNote} tabIndex="-1">
        &nbsp;&nbsp; Add &nbsp;&nbsp; + &nbsp;&nbsp;
      </button>
    </Column>
    <Column className='buttonCell' flex={flexCol2} horizontal='center'>
      <button className="iconOnly" onClick={doNothing} tabIndex="-1">
        .
      </button>
    </Column>
    <Column className='buttonCell' flex={flexCol3} horizontal='center'>
      &nbsp;
    </Column>
    <Column className='buttonCell' flex={flexCol4} horizontal='end'>
      <Row>
        {
          (audioStopIdx === null)
          ?
          <span>
            <button className='load' onClick={loadState} tabIndex="-1">
              Load
            </button>
            &nbsp;&nbsp;
            <button className='save' onClick={saveState} tabIndex="-1">
              Save
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='play' onClick={playAllNotes} tabIndex="-1">
              &nbsp;&nbsp;&#x25b6;&nbsp;&nbsp;
            </button>
          </span>
          :    
          <button className='stop' onClick={stopAllNotes} tabIndex="-1">
            |=|
          </button>
        }
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UndoRedoC />
      </Row>
    </Column>
  </Row>
)

export default NoteTableButtonBar
