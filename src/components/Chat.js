import { Typography } from '@mui/material'
import React from 'react'
import Messages from './Messages'
import TextBox from './TextBox'

function Chat() {
  return (
    <div>
      <Typography variant='h1'>Chat!</Typography>
      <Messages />
      <TextBox />
    </div>
  )
}

export default Chat