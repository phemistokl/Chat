import React from 'react'
import { Col, Alert, Panel } from 'react-bootstrap'

export default (props) => {

   return (
    <div>
      <Panel bsStyle="info">
        {props.message} 
      </Panel>
    </div>
  )
}
