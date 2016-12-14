import React from 'react'
import {Entity} from 'aframe-react'

export default () => (
  <Entity>
    <Entity
      position='0 3.5 0'
      geometry={{ primitive: 'box', height: 7, width: 20, depth: 20 }}
      // material={{ shader: 'flat', src: 'url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)' }}
      material={{ color: '#ddd' }}
      scale='1 1 -1'
    />
    <Entity
      position='0 1.6 0'
      geometry={{ primitive: 'sphere', radius: 6.1 }}
      material={{ opacity: 0.5 }}
      scale='1 1 -1'
      onClick={() => { console.log('click') }}
    />
  </Entity>
)
