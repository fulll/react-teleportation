import React from 'react'
import ReactDOM from 'react-dom'
import { defer, uniqueId, get } from 'lodash'

const style = clear => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: clear ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.1)',
  zIndex: 10,
})

export default class Teleport {
  constructor(cfg) {
    this.style = style(get(cfg, 'clear', false))
  }

  i = uniqueId('teleport')
  m = document.body.appendChild(document.createElement('m'))
  M = () => <x style={this.style} id={this.i} onClick={this._close}>{this.el}</x>

  init = (el) => { this.el = el; this._render() }
  clear = () => { defer(ReactDOM.unmountComponentAtNode, this.m) }

  _render = () => { ReactDOM.render(<this.M />, this.m) }
  _close = (e) => { if (e.target.id === this.i) this.clear() }

}

export * from './components/Modal.js'
export * from './components/Alert.js'
