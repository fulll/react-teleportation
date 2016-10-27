import React from 'react'
import Teleport, { Modal, Alert } from '../src'

const teleport = new Teleport()

const alertProps = {
  title: 'Hi',
  description: 'Some text',
  right: {
    title: 'OK',
    action: () => teleport.clear(),
  },
  left: {
    title: 'Cancel',
    action: () => teleport.clear(),
  },
}

const Home = () => {
  const openModal = () => teleport.init(<Modal>Some text</Modal>)
  const openAlert = () => teleport.init(<Alert {...alertProps} />)

  const li = { cursor: 'pointer' }

  return (
    <div style={{ padding: '10px 40px' }}>
      <h1>Play with me</h1>
      <ul>
        <li onClick={openModal} style={li}>Open Modal</li>
        <li onClick={openAlert} style={li}>Open Alert</li>
      </ul>
    </div>

  )
}

export default Home
