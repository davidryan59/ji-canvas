import React from 'react'
import { Column, Row } from 'simple-flexbox'

import UndoRedoC from './UndoRedoC'

const flexCol1 = '50'
const flexCol2 = '10'
const flexCol3 = '20'
const flexCol4 = '20'

const NoteTableButtonBar = ({playAllNotes, addNote, doNothing}) => (
  <Row className='buttonBar'>
    <Column className='buttonCell' flex={flexCol1} horizontal='start'>
      <button className='mainAdd' onClick={addNote}>
        &nbsp;&nbsp; Add &nbsp;&nbsp; + &nbsp;&nbsp;
      </button>
    </Column>
    <Column className='buttonCell' flex={flexCol2} horizontal='center'>
      <button className="iconOnly" onClick={doNothing}>
        ·
      </button>
    </Column>
    <Column className='buttonCell' flex={flexCol3} horizontal='center'>
      &nbsp;
    </Column>
    <Column className='buttonCell' flex={flexCol4} horizontal='end'>
      <Row>
        <button className='play' onClick={playAllNotes}>
          &nbsp;&nbsp;&#x25b6;&nbsp;&nbsp;
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UndoRedoC />
      </Row>
    </Column>
  </Row>
)

export default NoteTableButtonBar
