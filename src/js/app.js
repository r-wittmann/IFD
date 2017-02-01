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
import CategorySelector from './components/CategorySelector'

import categoryList from './category-list'
import productList from './product-list'

import ProductCamera from './components/productPlacement/Camera'
import ProductSky from './components/productPlacement/Sky'

class VRScene extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cameraPosition: '0 0 0',
      viewProduct: false
    }
    this.toggleProductView = this.toggleProductView.bind(this)
  }

  toggleProductView (bool) {
    this.setState({
      viewProduct: bool
    })
  }

  render () {
    return (
      !this.state.viewProduct
      ? <Scene>
        <Camera position={this.state.cameraPosition} />
        <Sky />
        <Light />
        <CategorySelector
          categoryList={categoryList}
          productList={productList}
          toggleProductView={this.toggleProductView}
          />
      </Scene>
      : <Scene>
        <ProductCamera />
        <ProductSky />
        <Light />
        {/* <ProductSetup />
          <Product /> */}
      </Scene>
      )
  }
}

ReactDOM.render(<VRScene />, document.querySelector('.scene-container'))
