import React from 'react'
import ReactDOM from 'react-dom'
import { defer, uniqueId } from 'lodash'

const style = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 10,
}

class Teleport {

  i = uniqueId('teleport')
  m = document.body.appendChild(document.createElement('m'))
  M = () => <x style={style}>{React.cloneElement(this.el, { clear: this.clear })}</x>

  init = (el) => { this.el = el; this._render() }
  clear = () => { defer(ReactDOM.unmountComponentAtNode, this.m) }

  _render = () => { ReactDOM.render(<this.M />, this.m) }
}

export default new Teleport()

export * from './components/Modal.js'
export * from './components/Alert.js'
export * from './components/Lightbox.js'
