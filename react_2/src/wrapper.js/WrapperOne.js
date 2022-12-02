import React from 'react'

function WrapperOne(props) {
    console.log(props)
  return (
    <div style={{backgroundColor: 'red'}}>{props.children}</div>
  )
}
/* container reactstrap */

export default WrapperOne