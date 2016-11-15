import React from 'react'
import Teleport, { Modal, Alert, Lightbox, Tutorial } from '../src'

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

const li = {
  cursor: 'pointer',
  padding: 5,
}

const openModal = () => Teleport.init(<Modal>Some text</Modal>)
const openAlert = () => Teleport.init(<Alert {...alertProps} />)
const openLightbox = () => Teleport.init(<Lightbox url="img/1.jpg" />)
const openTutorial = () => Teleport.init(
  <Tutorial>
    {[
      { id: 'title', text: 'This is the title' },
      { id: 'open-lightbox', text: 'Click here to open a lightbox' },
    ]}
  </Tutorial>
)

const Home = () => (
  <div style={{ padding: '10px 40px', fontFamily: 'sans-serif' }}>
    <h1 id="title" style={{ fontFamily: 'sans-serif' }}>Play with me</h1>
    <ul>
      <li onClick={openModal} style={li}>Open Modal</li>
      <li onClick={openAlert} style={li}>Open Alert</li>
      <li onClick={openLightbox} style={li} id="open-lightbox">Open Lightbox</li>
      <li onClick={openTutorial} style={li}>Open Tutorial</li>
    </ul>
  </div>
)

export default Home
