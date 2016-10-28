import React from 'react'
import { Background, Img } from './Commons'

export const Lightbox = ({ clear, url }) => {
  const id = 'lightbox'
  const close = (e) => { if (e.target.id === id) clear() }

  return (
    <Background opacity={0.9} onClick={close} id={id}>
      <Img src={url} alt={id} />
    </Background>
  )
}

Lightbox.propTypes = {
  children: React.PropTypes.node,
}

Lightbox.propTypes = {
  clear: React.PropTypes.func,
  url: React.PropTypes.string,
}
