import React from 'react'

import NoteTableButtonBarC from './NoteTableButtonBarC'
import NoteTableWrapperC from './NoteTableWrapperC'
import StateViewerC from './StateViewerC'

const App = ({noteTable, audioStopIdx}) => (
  <div className='app'>
    <div className='title'>Just Intonation Canvas</div>
    <div className='subtitle'>Web scoring for justly intoned music</div>
    <div>&nbsp;</div>
    <NoteTableButtonBarC
      noteTable={noteTable}
      audioStopIdx={audioStopIdx}
    />
    <NoteTableWrapperC />
    <NoteTableButtonBarC
      noteTable={noteTable}
      audioStopIdx={audioStopIdx}
    />
    <StateViewerC />
  </div>
)

export default App
