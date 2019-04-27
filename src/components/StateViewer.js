import React from 'react'
import { Column, Row } from 'simple-flexbox'

const StateViewer = ({actionJSON, stateJSON}) => (
  <Column
    horizontal = 'center'
    vertical = 'center'
    className = 'StateViewer'
    style = {{
      padding: '5px',
      fontFamily: 'monospace',
      fontSize: 9
    }}
  >
    <Row>
      &nbsp;
    </Row>
    <Row>
      <b>state.present.lastAction</b>:&nbsp;&nbsp;{actionJSON}
    </Row>
    <Row>
      &nbsp;
    </Row>
    <Row>
      <b>state.present</b>:&nbsp;&nbsp;{stateJSON}
    </Row>
    <Row>
      &nbsp;
    </Row>
  </Column>
)

export default StateViewer
