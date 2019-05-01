import { connect } from 'react-redux'

import Score from './Score'

const mapStateToProps = (state, ownProps) => ({
  noteTable: state.present.noteTable
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)
 
