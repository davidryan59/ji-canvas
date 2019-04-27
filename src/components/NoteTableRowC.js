import { connect } from 'react-redux'

import NoteTableRow from './NoteTableRow'

import { actionPlayNote, actionStopNote, actionDuplicateNote, actionDeleteNote, actionMoveDown, actionMoveUp } from '../actions'

import { audioPlayNote, audioStop } from '../audio'

const mapStateToProps = (state, ownProps) => ({
  canPlay: (state.present.audioStopIdx === null)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dupNote: () => dispatch(actionDuplicateNote({noteId: ownProps.row.noteId})),
  delNote: () => dispatch(actionDeleteNote({noteId: ownProps.row.noteId})),
  moveDown: () => dispatch(actionMoveDown({noteId: ownProps.row.noteId})),
  moveUp: () => dispatch(actionMoveUp({noteId: ownProps.row.noteId})),
  playNote: () => {
    const [audioStopIdx, delayStopTimeS] = audioPlayNote(ownProps.row)
    setTimeout(() => {
      console.log(`Timeout 1 note: audio stop ${audioStopIdx}`)
      audioStop(audioStopIdx)
      dispatch(actionStopNote({noteId: ownProps.row.noteId, audioStopIdx}))
    }, 1000 * delayStopTimeS)
    return dispatch(actionPlayNote({noteId: ownProps.row.noteId, audioStopIdx}))
  },
  stopNote: () => {
    const idx = ownProps.row.audioStopIdx
    const noteId = ownProps.row.noteId
    console.log(`Button: stop 1 note ${noteId}, audio stop ${idx}`)
    audioStop(idx)
    dispatch(actionStopNote({noteId: noteId, audioStopIdx: idx}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableRow)
