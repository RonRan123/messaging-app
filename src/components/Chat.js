import React from 'react'
import Messages from './Messages'
import TextBox from './TextBox'
import Post from './Post'

function Chat() {
  return (
    <div>
        <h1>Chat!</h1>
        <Messages />
        <Post />
    </div>
  )
}

export default Chat