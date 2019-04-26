import { connect } from 'react-redux'

import NoteTableButtonBar from './NoteTableButtonBar'

import { playAllNotes as actionPlayAllNotes, addNote, doNothing } from '../actions'

import { playAllNotes as audioPlayAllNotes } from '../audio'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNote: () => dispatch(addNote()),
  doNothing: () => dispatch(doNothing()),
  playAllNotes: () => {
    audioPlayAllNotes(ownProps.noteTable)
    return dispatch(actionPlayAllNotes())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableButtonBar)
