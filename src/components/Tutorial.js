import React from 'react'
import { Background } from './Commons'

const style = {
  modal: {
    position: 'fixed',
    width: 200,
    height: 70,
    background: 'white',
    padding: 20,
    boxSizing: 'border-box',
    fontFamily: 'sans-serif',
  },
  arrow: {
    background: 'white',
    width: 12,
    height: 12,
    position: 'absolute',
    top: -6,
    transform: 'rotate(45deg)',
  },
}

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
      <div style={{ ...style.modal, ...this.state.position }}>
        <div style={style.arrow} />
        {this.state.text}
      </div>
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
