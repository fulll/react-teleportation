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
    padding: '0 20px',
  },
}

export const Modal = () => (
  <div style={style.div}>
    <h3>This is a modal</h3>
  </div>
)
