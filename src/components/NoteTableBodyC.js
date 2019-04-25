import { connect } from 'react-redux'

import NoteTableBody from './NoteTableBody'

const mapStateToProps = (state, ownProps) => ({
  noteTable: state.present.noteTable
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableBody)
