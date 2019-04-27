import React from 'react'
import { Column } from 'simple-flexbox'

import NoteTableRowC from './NoteTableRowC'

// In React, when iterating over array, must supply unique 'key' prop
let nextKey = 0

const NoteTableBody = ({noteTable}) => (
  <Column className='tableBody'>
    {noteTable.map( (noteRow, idx) =>
      <NoteTableRowC
        idx={idx}
        len={noteTable.length}
        key={nextKey++}
        row={noteRow}
      />
    )}
  </Column>
)

export default NoteTableBody
