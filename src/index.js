import React from 'react'
import ReactDOM from 'react-dom'
import { defer, uniqueId } from 'lodash'

const style = {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.1)',
  zIndex: 10,
}

export default class Teleport {

  i = uniqueId('teleport')
  m = document.body.appendChild(document.createElement('m'))
  M = () => <x style={style} id={this.i} onClick={this._close}>{this.el}</x>

  init = (el) => { this.el = el; this._render() }
  clear = () => { defer(ReactDOM.unmountComponentAtNode, this.m) }

  _render = () => { ReactDOM.render(<this.M />, this.m) }
  _close = (e) => { if (e.target.id === this.i) this.clear() }

}

export * from './modal/sample.js'
export * from './modal/Alert.js'
