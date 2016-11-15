import React from 'react'
import styled from 'styled-components'
import { Background, fontFamily } from './Commons'

const Div = styled.div`
  width: 500px;
  height: 300px;
  background: white;
  margin: 20vh auto;
  box-sizing: border-box;
  padding: 20px;
  font-family: ${fontFamily};
`

export const Modal = ({ children, clear }) => {
  const id = 'modal'
  const close = (e) => { if (e.target.id === id) clear() }

  return (
    <Background opacity={0.1} id={id} onClick={close}>
      <Div>
        {children}
      </Div>
    </Background>
  )
}

Modal.propTypes = {
  children: React.PropTypes.node,
  clear: React.PropTypes.func,
}
