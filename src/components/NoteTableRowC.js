import { connect } from 'react-redux'

import NoteTableRow from './NoteTableRow'

import { playNote, pauseNote, dupNote, delNote, moveDown } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  playNote: () => dispatch(playNote({idx: ownProps.idx})),
  pauseNote: () => dispatch(pauseNote({idx: ownProps.idx})),
  dupNote: () => dispatch(dupNote({idx: ownProps.idx})),
  delNote: () => dispatch(delNote({noteId: ownProps.row.noteId})),
  moveDown: () => dispatch(moveDown({idx: ownProps.idx})),
  moveUp: () => dispatch(moveDown({idx: ownProps.idx - 1}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableRow)
