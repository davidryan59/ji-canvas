import React from 'react'
import { Column, Row } from 'simple-flexbox'

import UndoRedoC from './UndoRedoC'

const flexCol1 = '70'
const flexCol2 = '10'
const flexCol3 = '10'
const flexCol4 = '10'

const NoteTableButtonBar = ({addNote, doNothing}) => (
  <Row className='buttonBar'>
    <Column className='buttonCell' flex={flexCol1} horizontal='start'>
      <button className='mainAdd' onClick={addNote}>
        &nbsp;&nbsp; Add &nbsp;&nbsp; + &nbsp;&nbsp;
      </button>
    </Column>
    <Column className='buttonCell' flex={flexCol2} horizontal='center'>
      &nbsp;
    </Column>
    <Column className='buttonCell' flex={flexCol3} horizontal='center'>
      <button className="iconOnly" onClick={doNothing}>
        ·
      </button>
    </Column>
    <Column className='buttonCell' flex={flexCol4} horizontal='end'>
      <UndoRedoC />
    </Column>
  </Row>
)

export default NoteTableButtonBar
