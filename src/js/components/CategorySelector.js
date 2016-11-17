import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

import SelectableBox from './SelectableBox'
import BackButton from './BackButton'

class CategorySelector extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCategoryList: props.categoryList,
      goBackToArray: [],
      fadeOut: false
    }

    this.selectCategory = this.selectCategory.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  calculatePosition (index, boxCount) {
    const distance = 8.5
    const visionAngle = 90
    const calcFactor = (2 * (index + 0.5) * Math.PI / boxCount) / (360 / visionAngle) + (180 - visionAngle) * Math.PI / 360

    const x = distance * Math.cos(calcFactor)
    const y = 1.6
    const z = -distance * Math.sin(calcFactor)

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
      // untill actual products are available
      const dummyCategoryList = [{
        categoryName: 'Dummy',
        subcategories: false
      }]
      this.fadeOutCategories(this, dummyCategoryList)
    }
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
    window.setTimeout(() => {
      self.setState({ selectedCategoryList: [] })
      self.fadeInCategories(self, categoryList)
    }, 1000)
  }

  fadeInCategories (self, categoryList) {
    self.setState({
      fadeOut: false,
      selectedCategoryList: categoryList
    })
  }

  render () {
    return (
      <Entity>
        {this.state.selectedCategoryList.map((category, index) =>
          <SelectableBox
            key={index}
            category={category}
            position={this.calculatePosition(index, this.state.selectedCategoryList.length)}
            onSelect={this.selectCategory}
            fadeOut={this.state.fadeOut}
          />
        )}
        {this.state.goBackToArray.length !== 0 &&
          <BackButton
            goBack={this.goBack}
          />
        }
      </Entity>
    )
  }

}

CategorySelector.proptypes = {
  categoryList: PropTypes.array
}

export default CategorySelector
