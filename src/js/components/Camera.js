import React from 'react'
import { Entity } from 'aframe-react'

const Camera = (props) => (
  <Entity>
    <Entity id='main-camera' camera='userHeight: 1.6' look-controls wasd-controls='' {...props}>
      {/* hover cursor */}
      <a-entity
        raycaster='far: 8; near: 6.1;'
        cursor='fuse: true; fuseTimeout: 1;'
      />
      <Entity
        cursor='' // selection should work by clicking on desctop and by fusing on the mobile device
        position='0 0 -1'
        geometry='primitive: ring; radiusInner: 0.015; radiusOuter: 0.02'
        material='color: green; shader: flat'
      >
        <a-animation
          begin='click'
          easing='ease-in'
          attribute='scale'
          fill='backwards'
          from='0.1 0.1 0.1'
          to='1 1 1'
          dur='200' />
        <a-animation
          begin='cursor-fusing'
          easing='linear'
          attribute='scale'
          fill='backwards'
          from='1 1 1'
          to='0.1 0.1 0.1'
          dur='1200'
          delay='300'
        />
      </Entity>
    </Entity>
  </Entity>
)

export default Camera
