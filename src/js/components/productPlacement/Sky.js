import React from 'react'
import {Entity} from 'aframe-react'

export default () => (
  <Entity>
    <Entity
      // position='0 3.5 0'
      geometry={{ primitive: 'sphere', radius: 20 }}
      material={{ src: 'url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)' }}
      // material={{ color: '#ddd' }}
      scale='1 1 -1'
    >
      <Entity position='-3 -3 0'>
        <Entity
          collada-model='url(../../resources/model.dae)'
      />
      </Entity>
      <a-animation
        attribute='rotation'
        dur='4000000'
        to='0 36000 0'
        repeat='indefinite'
        easing='linear'
              />
    </Entity>
  </Entity>
)
