import React from 'react'
import {Entity} from 'aframe-react'

export default (props) => (
  <Entity>
    <Entity
      // position='0 3.5 0'
      geometry={{ primitive: 'sphere', radius: 15 }}
      // material={{ src: 'url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)' }}
      material={{ src: 'url(../../resources/Sky2.jpg)' }}
      // material={{ color: '#ddd' }}
      scale='1 1 -1'
    >
      <Entity position='0 -9 0' rotation='0 180 0'>
        <Entity
          geometry={{ primitive: 'sphere', radius: 8 }}
          material={{ color: 'white', opacity: 0.5 }}

          onClick={() => props.toggleProductView()}
        >
          <Entity
            position='-6.5 -2 2'
            scale='2 2 2'
            collada-model='url(../../resources/model.dae)'
          />
        </Entity>
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
