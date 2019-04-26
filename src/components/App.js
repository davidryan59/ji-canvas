import React from 'react'

import NoteTableWrapperC from './NoteTableWrapperC'
import StateViewerC from './StateViewerC'
import NoteTableButtonBarC from './NoteTableButtonBarC'

const App = ({noteTable}) => (
  <div className='app'>
    <div className='title'>Just Intonation Canvas</div>
    <div className='subtitle'>Web scoring for justly intoned music</div>
    <NoteTableButtonBarC
      noteTable={noteTable}
    />
    <NoteTableWrapperC />
    <NoteTableButtonBarC
      noteTable={noteTable}
    />
    <StateViewerC />
  </div>
)

export default App
