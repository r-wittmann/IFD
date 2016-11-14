import React from 'react'
import { Entity } from 'aframe-react'

const Floor = () => (
  <Entity
    geometry='primitive: cylinder; height: 0.01; radius: 11'
    material={{color: '#262826'}}
  />
)

export default Floor
