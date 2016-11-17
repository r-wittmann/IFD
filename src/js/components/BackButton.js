import React from 'react'
import { Entity } from 'aframe-react'

export default (props) => (
  <Entity
    position='0 2.3 -8'
    onClick={props.goBack}
    look-at='#main-camera'
  >
    <Entity
      geometry={{ primitive: 'box', height: 0.3, width: 0.6, depth: 0.1 }}
      material={{ shader: 'flat', color: 'red' }}
    />
    <Entity
      text={'text: << Back; size: 0.1'}
      material={{color: 'blue'}}
      position='-0.25 -0.025 0.05'
    />
  </Entity>
)
