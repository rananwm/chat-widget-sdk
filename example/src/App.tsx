import React from 'react'
import { ChatWidget } from 'chat-widget-sdk'

const App = () => {
  return (
    <ChatWidget
      customerId='alkjdsf'
      position='right'
      styles={{
        chatContainer: {
          // left: 20,
          // right: 'auto',
          // bottom: 160,
          // maxHeight: 640,
        },
        toggleContainer: {
          // left: 20,
          // right: 'auto',
          // bottom: 80,
        },
        toggleButton: {}
      }}
    />
  )
}

export default App
