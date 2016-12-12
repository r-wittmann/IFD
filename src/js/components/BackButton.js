import React from 'react'
import { Entity } from 'aframe-react'

export default (props) => (
  <Entity
    position='0 -0.7 -1.5'
    onClick={props.goBack}
    look-at='#main-camera'
  >
    {!props.fadeOut && (
      <a-animation
        attribute='position'
        to='0 0.5 -1.5'
        dur='1000'
      />
    )}
    {props.fadeOut && (
      <a-animation
        attribute='position'
        to='0 -0.7 -1.5'
        dur='1000'
      />
    )}
    <Entity
      geometry={{ primitive: 'box', height: 0.15, width: 0.4, depth: 0.1 }}
      material={{ shader: 'flat', color: '#eee' }}
    />
    <Entity
      text={'text: << Back; size: 0.05'}
      material={{color: 'black'}}
      position='-0.125 -0.025 0.05'
    />
  </Entity>
)
