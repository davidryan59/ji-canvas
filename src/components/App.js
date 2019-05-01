import React from 'react'

import ScoreC from './ScoreC'
import NoteTableWrapperC from './NoteTableWrapperC'
import StateViewerC from './StateViewerC'
import NoteTableButtonBarC from './NoteTableButtonBarC'

const App = ({noteTable, audioStopIdx}) => (
  <div className='app'>
    <div className='title'>Just Intonation Canvas</div>
    <div className='subtitle'>Web scoring for justly intoned music</div>
    <ScoreC />
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
