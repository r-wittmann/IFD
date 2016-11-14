import React from 'react'
import { Entity } from 'aframe-react'

const Light = (props) => (
  <Entity>
    <Entity light={{type: 'ambient', color: '#aaa'}} />
    <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0' />
    <Entity light={{type: 'directional', intensity: 0.5}} position='1 1 -1' />
  </Entity>
)

export default Light
