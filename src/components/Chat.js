import { Typography } from '@mui/material'
import React from 'react'
import Messages from './Messages'
import TextBox from './TextBox'
import Post from './Post'

function Chat() {
  return (
    <div>
      <Typography variant='h1'>Chat!</Typography>
      <Messages />
      <TextBox />
      <Post />
    </div>
  )
}

export default Chat