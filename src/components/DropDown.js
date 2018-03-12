import React from 'react'
import styled from 'styled-components'
import { kebabCase } from 'lodash'
import { Background } from './Commons'

const List = styled.div`
  position: absolute;
  ${({ position }) => (
    Object.keys(position).map(v => `${kebabCase(v)}: ${position[v]};`)
  )}
  background-color: #FDFDFD;
  box-shadow: 0px 1px 3px 0px #9E9BA0;
  overflow: hidden;
  transition: max-height 0.15s linear;
`

export const DropDownItem = styled.h1`
  padding: 10px 30px 10px 16px;
  margin: 0;
  box-sizing: border-box;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`

export class DropDown extends React.Component {
  state = {
    position: {
      maxHeight: 0,
    },
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.props.clear)
    setTimeout(this.measureMenu())
  }

  componentWillUnmount = () => window.removeEventListener('resize', this.props.clear)

  measureMenu = () => {
    const element = document.getElementById(this.props.menuId)

    if (element) {
      const { top, bottom, right, left } = element.getBoundingClientRect()
      const position = { maxHeight: 0 }

      const bottomSpace = window.innerHeight - bottom
      const listHeight = this.list.clientHeight
      if (bottomSpace < listHeight) position.bottom = `${window.innerHeight - top}px`
      else position.top = `${bottom}px`

      const listWidth = this.list.clientWidth
      if (listWidth > left) position.left = `${left}px`
      else position.right = `${window.innerWidth - right}px`

      this.setState({ position }, () => this.updateMaxHeight(`${listHeight}px`))
    }
  }

  updateMaxHeight = (maxHeight) => {
    const { position } = this.state
    this.setState({ position: { ...position, maxHeight } })
  }

  clear = () => { this.updateMaxHeight(0); setTimeout(this.props.clear, 150) }

  render = () => (
    <Background onClick={this.clear} opacity={0}>
      <List position={this.state.position}>
        <div ref={(ref) => { this.list = ref }}>
          <div style={{ padding: '8px 0', boxSizing: 'border-box' }}>
            {this.props.children}
          </div>
        </div>
      </List>
    </Background>
  )
}

DropDown.propTypes = {
  clear: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
  menuId: React.PropTypes.string.isRequired,
}
