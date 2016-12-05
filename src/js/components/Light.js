import React from 'react'
import { Entity } from 'aframe-react'

const Light = () => (
  <Entity>
    <Entity light={{type: 'ambient', color: '#ccc'}} />
    <Entity light={{type: 'directional', intensity: 0.3}} position='0 1 -1' />
    <Entity light={{type: 'directional', intensity: 0.4}} position='-1 1 0' />
    <Entity light={{type: 'directional', intensity: 0.4}} position='1 1 0' />
  </Entity>
)

export default Light
