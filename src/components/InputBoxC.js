import { connect } from 'react-redux'

import InputBox from './InputBox'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUnlock: e => dispatch(ownProps.onUnlock({...ownProps})),
  onEditValue: e => {
    dispatch(ownProps.onEditValue({...ownProps, val: e.target.value}))
    // If an invalid value has been entered,
    // input box will remain visible and its value needs
    // to be reset to reverted value in state
    e.target.value = ownProps.data.val
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBox)
 
