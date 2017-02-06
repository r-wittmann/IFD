import React from 'react'
import { Entity } from 'aframe-react'

const Camera = (props) => (
  <Entity>
    <Entity id='main-camera' camera='userHeight: 1.6' look-controls wasd-controls='' position='0 -6 9' {...props}>
      <Entity
        raycaster='far: 5; near: 1;'
        cursor='fuse: false'
        position='0 0 -1'
        geometry='primitive: ring; radiusInner: 0.015; radiusOuter: 0.02'
        material='color: green; shader: flat'
       />
    </Entity>
  </Entity>
)

export default Camera
