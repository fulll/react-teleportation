import React from 'react'

const style = {
  div: {
    border: '1px solid lightgrey',
    width: 500,
    height: 300,
    background: 'white',
    margin: '20vh auto',
    borderRadius: 3,
    boxSizing: 'border-box',
    padding: '20px',
    fontFamily: 'Noto, Roboto, sans-serif',
  },
}

export const Modal = ({ children }) => (
  <div style={style.div}>
    {children}
  </div>
)

Modal.propTypes = {
  children: React.PropTypes.node,
}
