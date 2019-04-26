import { connect } from 'react-redux'

import NoteTableRow from './NoteTableRow'

import { dupNote, delNote, moveDown } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dupNote: () => dispatch(dupNote({noteId: ownProps.row.noteId})),
  delNote: () => dispatch(delNote({noteId: ownProps.row.noteId})),
  moveDown: () => dispatch(moveDown({idx: ownProps.idx})),
  moveUp: () => dispatch(moveDown({idx: ownProps.idx - 1}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableRow)
