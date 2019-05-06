import React from 'react'
import { Column } from 'simple-flexbox'

import NoteTableRowC from './NoteTableRowC'

const NoteTableBody = ({noteTable}) => (
  <Column className='tableBody'>
    {noteTable.map( (noteRow, idx) =>
      <NoteTableRowC
        key={noteRow.noteId}
        idx={idx}
        len={noteTable.length}
        row={noteRow}
      />
    )}
  </Column>
)

export default NoteTableBody
