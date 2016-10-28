import React from 'react'
import { Background } from './Commons'

const style = {
  div: {
    width: 500,
    height: 300,
    background: 'white',
    margin: '20vh auto',
    boxSizing: 'border-box',
    padding: '20px',
    fontFamily: 'Noto, Roboto, sans-serif',
  },
}

export const Modal = ({ children, clear }) => {
  const id = 'modal'
  const close = (e) => { if (e.target.id === id) clear() }

  return (
    <Background opacity={0.1} id={id} onClick={close}>
      <div style={style.div}>
        {children}
      </div>
    </Background>
  )
}

Modal.propTypes = {
  children: React.PropTypes.node,
  clear: React.PropTypes.func,
}
