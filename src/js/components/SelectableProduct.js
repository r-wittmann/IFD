import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

class SelectableProduct extends React.Component {

  render () {
    return (
      <Entity
        look-at='#main-camera'
        position={`${this.props.position.x} ${this.props.position.y - 2.5} ${this.props.position.z}`}
      >
        {!this.props.fadeOut && (
          <a-animation
            attribute='position'
            to={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
            dur='1000'
          />
        )}
        {this.props.fadeOut && (
          <a-animation
            attribute='position'
            to={`${this.props.position.x} ${this.props.position.y - 2.5} ${this.props.position.z}`}
            dur='1000'
          />
        )}
        <Entity
          geometry='primitive: box; depth: 0.1; height: 0.75; width: 1.5'
          material={{ src: 'url(../resources/bed.png)' }}
          onClick={() => this.props.onSelect()}
        >
          {/* this.props.category.categoryName.split(' ').map((line, index) =>
            <Entity
              key={index}
              text={`text: ${line}; size: 0.25`}
              material={{color: 'blue'}}
              position={`-0.8 ${0.1 - index * 0.4} 0.05`}
            />
          ) */}

        </Entity>
      </Entity>
    )
  }
}

SelectableProduct.proptypes = {
  product: PropTypes.array,
  position: PropTypes.object,
  onSelect: PropTypes.func,
  fadeOut: PropTypes.bool
}

export default SelectableProduct
