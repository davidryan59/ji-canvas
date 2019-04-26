import { connect } from 'react-redux'

import App from './App'

const mapStateToProps = (state, ownProps) => ({
  noteTable: state.present.noteTable
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
 
