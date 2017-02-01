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
          position='-2 0.8 -6'
          geometry={{ primitive: 'box', width: 5, height: 5, depth: 0.1 }}
          material={{ color: 'white', opacity: 0 }}
          onClick={() => this.props.turnImage(0)}
        />
        <Entity
          look-at='#main-camera'
          geometry={{ primitive: 'box', width: 0.7, height: 0.35, depth: 0.1 }}
          material={{ src: 'url(../resources/arrowLeft.png)' }}
          position='-2 0.8 -5.99'
          onClick={() => this.props.turnImage(1)}
        />
        <Entity
          look-at='#main-camera'
          position='2 0.8 -6'
          geometry={{ primitive: 'box', width: 5, height: 5, depth: 0.1 }}
          material={{ color: 'white', opacity: 0 }}
          onClick={() => this.props.turnImage(0)}
        />
        <Entity
          look-at='#main-camera'
          geometry={{ primitive: 'box', width: 0.7, height: 0.35, depth: 0.1 }}
          material={{ src: 'url(../resources/arrowRight.png)' }}
          position='2 0.8 -5.99'
          onClick={() => this.props.turnImage(-1)}
        />
      </Entity>
    )
  }
}

ImageTurner.proptypes = {
  fadeOut: PropTypes.bool,
  turnImage: PropTypes.func
}

export default ImageTurner
