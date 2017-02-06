import React from 'react'
import { Entity } from 'aframe-react'

class ClickDummy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      position: 0
    }
    this.next = this.next.bind(this)
  }

  next () {
    this.setState({
      position: Math.min(++this.state.position, 5)
    })
  }
  render () {
    return (
      <Entity look-at='#main-camera' position='0 -4.5 5'>
        <Entity
          geometry={{ primitive: 'box', width: 8, height: 5, depth: 0.1 }}
          material={{ src: `url(../resources/clickDummy/${this.state.position}.png)` }}
          onClick={() => this.next()}
        />
      </Entity>
    )
  }
}

export default ClickDummy
