import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

class ImageTurner extends React.Component {

  render () {
    return (
      <Entity position='0 -2 0'>
        {!this.props.fadeOut && (
          <a-animation
            attribute='position'
            to='0 0 0'
            dur='1000'
          />
        )}
        {this.props.fadeOut && (
          <a-animation
            attribute='position'
            to='0 -2 0'
            dur='1000'
          />
        )}
        <Entity
          look-at='#main-camera'
          geometry={{ primitive: 'box', width: 0.5, height: 0.25, depth: 0.1 }}
          material={{ src: 'url(../resources/arrowLeft.png)' }}
          position='-4 0.8 -4'
        />
        <Entity
          look-at='#main-camera'
          geometry={{ primitive: 'box', width: 0.5, height: 0.25, depth: 0.1 }}
          material={{ src: 'url(../resources/arrowRight.png)' }}
          position='4 0.8 -4'
        />
      </Entity>
    )
  }
}

ImageTurner.proptypes = {
  fadeOut: PropTypes.bool
}

export default ImageTurner
