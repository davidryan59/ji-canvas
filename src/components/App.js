import React from 'react'

import NoteTableWrapperC from './NoteTableWrapperC'
import StateViewerC from './StateViewerC'
import NoteTableButtonBarC from './NoteTableButtonBarC'

const App = () => (
  <div className='app'>
    <div className='title'>Just Intonation Canvas</div>
    <div className='subtitle'>Web scoring for justly intoned music</div>
    <NoteTableButtonBarC />
    <NoteTableWrapperC />
    <NoteTableButtonBarC />
    <StateViewerC />
  </div>
)

export default App
