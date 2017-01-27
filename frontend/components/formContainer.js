import React from 'react'
import Form from './form'

import {connect} from 'react-redux'







const mapStateToProps = state =>({
  testone: state.testone,
  testtwo: state.testtwo
})

export default connect(
  mapStateToProps
)(Form)