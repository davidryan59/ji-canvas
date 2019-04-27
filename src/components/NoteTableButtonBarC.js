import { connect } from 'react-redux'

import NoteTableButtonBar from './NoteTableButtonBar'

import { actionPlayAllNotes, actionStopAllNotes, actionAddNote, actionDoNothing } from '../actions'

import { audioPlayAllNotes, audioStop } from '../audio'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  doNothing: () => dispatch(actionDoNothing()),
  addNote: () => dispatch(actionAddNote()),
  playAllNotes: () => {
    const [audioStopIdx, delayStopTimeS] = audioPlayAllNotes(ownProps.noteTable)
    setTimeout(() => {
      console.log(`Timeout all notes: audio stop ${audioStopIdx}`)
      audioStop(audioStopIdx)
      dispatch(actionStopAllNotes({audioStopIdx}))
    }, 1000 * delayStopTimeS)
    return dispatch(actionPlayAllNotes({audioStopIdx}))
  },
  stopAllNotes: () => {
    const idx = ownProps.audioStopIdx
    console.log(`Button: stop all notes, audio stop ${idx}`)
    audioStop(idx)
    dispatch(actionStopAllNotes({audioStopIdx: idx}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableButtonBar)
