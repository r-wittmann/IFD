import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

class BreadCrumbs extends React.Component {

  render () {
    return (
      <Entity look-at='#main-camera'>
        {this.props.breadCrumbs.map((crumb, index) => {
          <Entity text={`text: ${crumb}`} position='10 10 10' />
        }
        )}
      </Entity>
    )
  }
}

BreadCrumbs.proptypes = {
  breadCrumbs: PropTypes.array
}

export default BreadCrumbs
