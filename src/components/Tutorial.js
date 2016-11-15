import React from 'react'
import { Background, Tooltip } from './Commons'

export class Tutorial extends React.Component {
  state = {
    id: 'tutorial',
    index: 0,
    text: '',
    position: {
      top: 0,
      left: 0,
    },
  }

  id = 'tutorial' // eslint-disable-line react/sort-comp

  next = () => {
    const index = this.state.index
    const exist = index < this.props.children.length

    if (exist) {
      const id = this.props.children[this.state.index].id

      const element = document.getElementById(id)
      const { top, left, height } = element.getBoundingClientRect()

      const position = { top: top + height + 12, left }
      const text = this.props.children[index].text

      this.setState({ position, text, index: this.state.index + 1 })
    } else {
      this.props.clear()
    }
  }

  componentDidMount = this.next

  render = () => (
    <Background opacity={0.1} id={this.id} onClick={this.next}>
      <Tooltip style={this.state.position}>
        {this.state.text}
      </Tooltip>
    </Background>
  )
}

Tutorial.propTypes = {
  clear: React.PropTypes.func,
  on: React.PropTypes.string,
  children: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.string,
      text: React.PropTypes.string,
    })
  ),
}
