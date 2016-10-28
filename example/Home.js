import React from 'react'
import Teleport, { Modal, Alert, Lightbox } from '../src'

const teleport = new Teleport()

const alertProps = {
  title: 'Hi',
  description: 'Some test',
  right: {
    title: 'cancel',
    action: () => teleport.clear(),
  },
  left: {
    title: 'ok',
    action: () => teleport.clear(),
  },
}

const Home = () => {
  const openModal = () => teleport.init(<Modal>Some text</Modal>)
  const openAlert = () => teleport.init(<Alert {...alertProps} />)
  const openLightbox = () => teleport.init(<Lightbox url="img/1.jpg" />)

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
