import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

class SelectableBox extends React.Component {

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
          geometry='primitive: box; depth: 0.1; height: 1; width: 2'
          material={{ src: `url(../resources/categories/${this.props.category.id}.png)` }}
          onClick={() => this.props.onSelect(this.props.category)}
        />
      </Entity>
    )
  }
}

SelectableBox.proptypes = {
  category: PropTypes.array,
  position: PropTypes.object,
  onSelect: PropTypes.func,
  fadeOut: PropTypes.bool
}

export default SelectableBox
