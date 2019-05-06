import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { flexValues } from '../constants'

import { actionUnlockInput, actionSetInput } from '../actions'

import InputBoxC from './InputBoxC'

const NoteTableRow = ({idx, len, row, canPlay, playNote, stopNote, dupNote, delNote, moveDown, moveUp}) => (
  <Row className='tableRow'>
    <Column className='tableCell' flex={flexValues.startMs} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "startMs"
        noteId = {row.noteId}
        data = {row.startMs}
        onUnlock = {actionUnlockInput}
        onEditValue = {actionSetInput}
        tabIndex = "1"
      />
    </Column>
    <Column className='tableCell' flex={flexValues.lenMs} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "lenMs"
        noteId = {row.noteId}
        data = {row.lenMs}
        onUnlock = {actionUnlockInput}
        onEditValue = {actionSetInput}
        tabIndex = "2"
      />
    </Column>
    <Column className='tableCell' flex={flexValues.freqHz} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "freqHz"
        noteId = {row.noteId}
        data = {row.freqHz}
        onUnlock = {actionUnlockInput}
        onEditValue = {actionSetInput}
        tabIndex = "3"
      />
    </Column>
    <Column className='tableCell' flex={flexValues.volDb} horizontal='center' vertical='center'>
      <InputBoxC
        inputName = "volDb"
        noteId = {row.noteId}
        data = {row.volDb}
        onUnlock = {actionUnlockInput}
        onEditValue = {actionSetInput}
        tabIndex = "4"
      />
    </Column>
    <Column className='tableCell' flex={flexValues.actions} horizontal='center' vertical='center'>
      <Row>
        {
          (canPlay)
          ?
          (
            (row.audioStopIdx === null)
            ?
            <button className='play' onClick={playNote} tabIndex="-1">
              &#x25b6;
            </button>          
            :
            <button className='stop' onClick={stopNote} tabIndex="-1">
              |=|
            </button>          
          )
          :
          null
        }
        &nbsp;&nbsp;&nbsp;
        <button className='duplicate' onClick={dupNote} tabIndex="-1">
          +1
        </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={moveUp} disabled={idx<1?true:false} className={idx<1?'move disabled':'move'} tabIndex="-1">
          &#x25b2;
        </button>
        &nbsp;
        <button onClick={moveDown} disabled={len<=idx+1?true:false} className={len<=idx+1?'move disabled':'move'} tabIndex="-1">
          &#x25bc;
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='delete' onClick={delNote} tabIndex="-1">
          X
        </button>
      </Row>
    </Column>
  </Row>
)

export default NoteTableRow
