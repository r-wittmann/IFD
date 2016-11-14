import React, { PropTypes } from 'react'
import { Entity } from 'aframe-react'

class SelectableBox extends React.Component {

  render () {
    return (
      <Entity look-at='#main-camera'>
        {!this.props.fadeOut && (
          <a-animation
            attribute='position'
            from={`${this.props.position.x} ${this.props.position.y - 2.5} ${this.props.position.z}`}
            to={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
            dur='1000'
          />
        )}
        {this.props.fadeOut && (
          <a-animation
            attribute='position'
            from={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
            to={`${this.props.position.x} ${this.props.position.y - 2.5} ${this.props.position.z}`}
            dur='1000'
          />
        )}
        <Entity
          position='0 0 0.5'
          geometry='primitive: box; depth: 0.1; height: 1; width: 2'
          material={{color: 'red'}}
          onClick={() => this.props.onSelect(this.props.category)}
        >
          {this.props.category.categoryName.split(' ').map((line, index) =>
            <Entity
              key={index}
              text={`text: ${line}; size: 0.25`}
              material={{color: 'blue'}}
              position={`-0.8 ${0.1 - index * 0.4} 0.05`}
            />
          )}

        </Entity>
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
