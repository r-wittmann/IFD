import React from 'react'
import {Entity} from 'aframe-react'

export default () => (
  <Entity
    geometry={{ primitive: 'sphere', radius: 30 }}
    material={{ shader: 'flat', src: 'url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)' }}
    scale='1 1 -1'
  />
)
