import { connect } from 'react-redux'

import NoteTableButtonBar from './NoteTableButtonBar'

import { addNote, doNothing } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addNote: () => dispatch(addNote()),
  doNothing: () => dispatch(doNothing())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableButtonBar)
