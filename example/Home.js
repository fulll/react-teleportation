import React from 'react'
import Teleport, { Modal, Alert, Lightbox } from '../src'

const alertProps = {
  title: 'Hi',
  description: 'Some text',
  right: {
    title: 'ok',
    action: () => Teleport.clear(),
  },
  left: {
    title: 'cancel',
    action: () => Teleport.clear(),
  },
}

const Home = () => {
  const openModal = () => Teleport.init(<Modal>Some text</Modal>)
  const openAlert = () => Teleport.init(<Alert {...alertProps} />)
  const openLightbox = () => Teleport.init(<Lightbox url="img/1.jpg" />)

  const li = { cursor: 'pointer' }

  return (
    <div style={{ padding: '10px 40px' }}>
      <h1>Play with me</h1>
      <ul>
        <li onClick={openModal} style={li}>Open Modal</li>
        <li onClick={openAlert} style={li}>Open Alert</li>
        <li onClick={openLightbox} style={li}>Open Lightbox</li>
      </ul>
    </div>
  )
}

export default Home
