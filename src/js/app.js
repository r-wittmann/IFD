import React from 'react'
import ReactDOM from 'react-dom'

import 'aframe'
import 'aframe-animation-component'
import 'aframe-text-component'
import 'aframe-look-at-component'
import 'babel-polyfill'

import { Scene } from 'aframe-react'

import Camera from './components/Camera'
import Sky from './components/Sky'
import Light from './components/Light'
import Floor from './components/Floor'
import CategorySelector from './components/CategorySelector'

import categoryList from './category-list'

class VRScene extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cameraPosition: '0 0 0'
    }
  }

  render () {
    return (
      <Scene>
        <Camera position={this.state.cameraPosition} />
        <Sky />
        <Floor />
        <Light />
        <CategorySelector categoryList={categoryList} />
      </Scene>
    )
  }
}

ReactDOM.render(<VRScene />, document.querySelector('.scene-container'))
