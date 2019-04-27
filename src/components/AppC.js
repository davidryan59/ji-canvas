import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = (state, ownProps) => ({
  noteTable: state.present.noteTable,
  audioStopIdx: state.present.audioStopIdx
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
 
