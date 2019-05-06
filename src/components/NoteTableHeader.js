import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { flexValues } from '../constants'

const NoteTableHeader = () => (
  <Row className='tableHeader' horizontal='center'>
    <Column className='headerCell' flex={flexValues.startMs} horizontal='center'>
      Start Time (ms)
    </Column>
    <Column className='headerCell' flex={flexValues.lenMs} horizontal='center'>
      Length (ms)
    </Column>
    <Column className='headerCell' flex={flexValues.freqHz} horizontal='center'>
      Frequency (Hz)
    </Column>
    <Column className='headerCell' flex={flexValues.volDb} horizontal='center'>
      Volume (dB)
    </Column>
    <Column className='headerCell' flex={flexValues.actions} horizontal='center'>
      Actions
    </Column>
  </Row>
)

export default NoteTableHeader
