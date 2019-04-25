import { connect } from 'react-redux'

import InputBox from './InputBox'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUnlock: e => dispatch(ownProps.onUnlock({...ownProps})),
  onEditValue: e => dispatch(ownProps.onEditValue({...ownProps, val: e.target.value}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBox)
 
