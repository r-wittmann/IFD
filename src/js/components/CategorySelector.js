import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

import SelectableBox from './SelectableBox'
import BreadCrumbs from './BreadCrumbs'

class CategorySelector extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCategoryList: props.categoryList,
      breadCrumbs: ['Rooms'],
      fadeOut: false
    }

    this.selectCategory = this.selectCategory.bind(this)
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
    const newBreadCrumbs = this.state.breadCrumbs
    newBreadCrumbs.push(selectedCategory.categoryName)

    this.setState({
      breadCrumbs: newBreadCrumbs
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
        <BreadCrumbs breadCrumbs={this.state.breadCrumbs} />
      </Entity>
    )
  }

}

CategorySelector.proptypes = {
  categoryList: PropTypes.array
}

export default CategorySelector
