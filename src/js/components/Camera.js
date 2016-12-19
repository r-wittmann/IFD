import React from 'react'
import { Entity } from 'aframe-react'

const Camera = (props) => (
  <Entity>
    <Entity id='main-camera' camera='userHeight: 1.6' look-controls wasd-controls='' {...props}>
      {/* hover cursor */}
      <a-entity
        raycaster='far: 8; near: 6.1;'
        cursor='fuse: true; fuseTimeout: 1'
      />
      <Entity
        raycaster='far: 4; near: 3.9;'
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
          delay='200'
        />
      </Entity>
      <Entity
        raycaster='far: 3.5; near: 1;'
        cursor='fuse: true; fuse-timeout: 3500'
        position='0 0 -1'
        geometry='primitive: torus; radius: 0.03; radius-tubular: 0.004; arc: 0.1;'
        material='color: orange; shader: flat'
      >
        <a-animation
          begin='click'
          easing='ease-in'
          attribute='geometry.arc'
          fill='backwards'
          from='360'
          to='0.1'
          dur='200' />
        <a-animation
          begin='cursor-fusing'
          easing='linear'
          attribute='geometry.arc'
          fill='backwards'
          from='0.1'
          to='360'
          dur='3000'
          delay='500'
        />
      </Entity>
    </Entity>
  </Entity>
)

export default Camera
