import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { flexValues } from '../constants'

import { unlockInput, setInputBox } from '../actions'

import InputBoxC from './InputBoxC'

const NoteTableRow = ({idx, len, row, dupNote, delNote, moveDown, moveUp}) => (
  <Row className='tableRow'>
    <Column className='tableCell' flex={flexValues.noteId} horizontal='center' vertical='center'>
      <span>{row.noteId}</span>
    </Column>
    <Column className='tableCell' flex={flexValues.startMs} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "startMs"
        noteId = {row.noteId}
        data = {row.startMs}
        onUnlock = {unlockInput}
        onEditValue = {setInputBox}
      />
    </Column>
    <Column className='tableCell' flex={flexValues.lenMs} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "lenMs"
        noteId = {row.noteId}
        data = {row.lenMs}
        onUnlock = {unlockInput}
        onEditValue = {setInputBox}
      />
    </Column>
    <Column className='tableCell' flex={flexValues.freqHz} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "freqHz"
        noteId = {row.noteId}
        data = {row.freqHz}
        onUnlock = {unlockInput}
        onEditValue = {setInputBox}
      />
    </Column>
    <Column className='tableCell' flex={flexValues.volDb} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "volDb"
        noteId = {row.noteId}
        data = {row.volDb}
        onUnlock = {unlockInput}
        onEditValue = {setInputBox}
      />
    </Column>
    <Column className='tableCell' flex={flexValues.actions} horizontal='center' vertical='center'>
      <Row>
        <button className='play'>
          &#x25b6;
        </button>
        &nbsp;
        <button className='pause'>
          ||
        </button>
        &nbsp;&nbsp;&nbsp;
        <button className='duplicate' onClick={dupNote}>
          +1
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={moveDown} disabled={len<=idx+1?true:false} className={len<=idx+1?'move disabled':'move'}>
          &#x25bc;
        </button>
        &nbsp;
        <button onClick={moveUp} disabled={idx<1?true:false} className={idx<1?'move disabled':'move'}>
          &#x25b2;
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='delete' onClick={delNote}>
          X
        </button>
      </Row>
    </Column>
  </Row>
)

export default NoteTableRow
