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
      categories: true,
      turnProducts: 0,
      productRotation: '0 50 0'
    }

    this.selectCategory = this.selectCategory.bind(this)
    this.goBack = this.goBack.bind(this)
    this.selectProduct = this.selectProduct.bind(this)
  }

  calculatePosition (index, boxCount) {
    let x, y, z
    const visionAngle = 110
    const categoryPosition = (2 * (index + 0.5) * Math.PI / boxCount) / (360 / visionAngle) + (180 - visionAngle) * Math.PI / 360
    const productPosition = 2 * index * Math.PI / boxCount

    if (this.state.categories) {
      x = 5 * Math.cos(categoryPosition)
      y = 1.6
      z = -5 * Math.sin(categoryPosition)
    } else {
      x = 6.2 * Math.cos(productPosition)
      y = 1.6
      z = -6.2 * Math.sin(productPosition)
    }

    return {x: x, y: y, z: z}
  }

  selectCategory (selectedCategory) {
    this.setState({
      fadeOut: true
    })

    const newGoBackToArray = this.state.goBackToArray
    newGoBackToArray.push(this.state.selectedCategoryList)

    this.setState({
      goBackToArray: newGoBackToArray
    })

    if (selectedCategory.subcategories) {
      this.fadeOutCategories(this, selectedCategory.subcategoryList)
    } else {
      console.log('switch to products')
      this.setState({
        categoryId: selectedCategory.id
      })
      this.fadeOutCategories(this)
    }
  }

  selectProduct (hovered, product) {
    if (hovered) {
      console.log('select Product')
    } else {
      this.setState({
        hoveredProduct: product.id
      })
    }
  }

  goBack () {
    this.setState({
      fadeOut: true
    })

    const newGoBackToArray = this.state.goBackToArray

    this.fadeOutCategories(this, newGoBackToArray.pop())

    this.setState({
      goBackToArray: newGoBackToArray
    })
  }

  fadeOutCategories (self, categoryList) {
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
          selectedCategoryList: []
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
      categories: false,
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
        {!this.state.categories &&
          <Entity>
            {this.state.productList[this.state.categoryId].map((product, index) =>
              <SelectableProduct
                key={index}
                product={product}
                position={this.calculatePosition(index, this.state.productList[this.state.categoryId].length)}
                onSelect={this.selectProduct}
                fadeOut={this.state.fadeOut}
                category={this.state.categoryId}
                hoverIn={product.id === this.state.hoveredProduct && !this.state.fadeOut}

              />
            )}
            {this.state.turnProducts === -1 &&
              <a-animation
                attribute='rotation'
                dur='4000000'
                to='0 36000 0'
                repeat='indefinite'
                easing='linear'
              />
            }
            {this.state.turnProducts === 1 &&
              <a-animation
                attribute='rotation'
                dur='4000000'
                to='0 -36000 0'
                repeat='indefinite'
                easing='linear'
              />
            }
          </Entity>
        }
        {!this.state.categories &&
          <ImageTurner
            fadeOut={this.state.fadeOut}
            turnImage={(direction) => this.setState({turnProducts: direction})}
          />
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
