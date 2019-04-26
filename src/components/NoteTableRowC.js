import { connect } from 'react-redux'

import NoteTableRow from './NoteTableRow'

import { playNote as actionPlayNote, pauseNote, dupNote, delNote, moveDown } from '../actions'

import { playNote as audioPlayNote } from '../audio'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dupNote: () => dispatch(dupNote({idx: ownProps.idx})),
  delNote: () => dispatch(delNote({idx: ownProps.idx})),
  moveDown: () => dispatch(moveDown({idx: ownProps.idx})),
  moveUp: () => dispatch(moveDown({idx: ownProps.idx - 1})),
  playNote: () => {
    const startNow = true
    audioPlayNote(ownProps.row, startNow)
    return dispatch(actionPlayNote({idx: ownProps.idx}))
  },
  pauseNote: () => dispatch(pauseNote({idx: ownProps.idx}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteTableRow)
