import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

import SelectableBox from './SelectableBox'
import SelectableProduct from './SelectableProduct'
import BackButton from './BackButton'
import ImageTurner from './ImageTurner'

class CategorySelector extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCategoryList: props.categoryList,
      productList: [],
      goBackToArray: [],
      fadeOut: false,
      categories: true
    }

    this.selectCategory = this.selectCategory.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  calculatePosition (index, boxCount) {
    const distance = 6
    const visionAngle = 110
    const categoryPosition = (2 * (index + 0.5) * Math.PI / boxCount) / (360 / visionAngle) + (180 - visionAngle) * Math.PI / 360
    const productPosition = 2 * index * Math.PI / boxCount

    const x = distance * Math.cos(this.state.categories ? categoryPosition : productPosition)
    const y = 1.6
    const z = -distance * Math.sin(this.state.categories ? categoryPosition : productPosition)

    return {x: x, y: y, z: z}
  }

  selectCategory (selectedCategory) {
    const newGoBackToArray = this.state.goBackToArray
    newGoBackToArray.push(this.state.selectedCategoryList)

    this.setState({
      goBackToArray: newGoBackToArray
    })

    if (selectedCategory.subcategories) {
      this.fadeOutCategories(this, selectedCategory.subcategoryList)
    } else {
      console.log('switch to products')
      this.fadeOutCategories(this)
    }
  }

  selectProduct () {
    console.log('select Product')
  }

  goBack () {
    const newGoBackToArray = this.state.goBackToArray

    this.fadeOutCategories(this, newGoBackToArray.pop())

    this.setState({
      goBackToArray: newGoBackToArray
    })
  }

  fadeOutCategories (self, categoryList) {
    self.setState({
      fadeOut: true
    })

    if (categoryList) {
      window.setTimeout(() => {
        self.setState({
          selectedCategoryList: [],
          productList: [],
          categories: true
        })
        self.fadeInCategories(self, categoryList)
      }, 1000)
    } else {
      window.setTimeout(() => {
        self.setState({
          selectedCategoryList: [],
          categories: false
        })
        self.fadeInProducts(self, this.props.productList)
      }, 1000)
    }
  }

  fadeInCategories (self, categoryList) {
    self.setState({
      fadeOut: false,
      selectedCategoryList: categoryList
    })
  }

  fadeInProducts (self, productList) {
    self.setState({
      fadeOut: false,
      productList
    })
  }

  showBackButton (self) {
    var showButton = true

    if (self.state.goBackToArray.length === 0) showButton = false
    if (self.state.goBackToArray.length === 0 && this.state.fadeOut) showButton = true

    // if (self.state.goBackToArray.length > 1) showButton = true
    // else if (self.state.goBackToArray.length === 1 && !self.state.fadeOut) showButton = true

    return showButton
  }

  render () {
    return (
      <Entity>
        {this.state.categories && this.state.selectedCategoryList.map((category, index) =>
          <SelectableBox
            key={index}
            category={category}
            position={this.calculatePosition(index, this.state.selectedCategoryList.length)}
            onSelect={this.selectCategory}
            fadeOut={this.state.fadeOut}
          />
        )}
        {!this.state.categories && this.state.productList.map((product, index) =>
          <SelectableProduct
            key={index}
            product={product}
            position={this.calculatePosition(index, this.state.productList.length)}
            onSelect={this.selectProduct}
            fadeOut={this.state.fadeOut}
          />
        )}
        {!this.state.categories &&
          <ImageTurner fadeOut={this.state.fadeOut} />
        }
        {this.showBackButton(this) &&
          <BackButton
            goBack={this.goBack}
            fadeOut={this.state.fadeOut}
          />
        }
      </Entity>
    )
  }

}

CategorySelector.proptypes = {
  categoryList: PropTypes.array,
  productList: PropTypes.array
}

export default CategorySelector
