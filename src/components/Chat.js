import { Button, Typography, Box } from '@mui/material'
import React from 'react'
import Messages from './Messages'
import TextBox from './TextBox'

function Chat(props) {
  const {user, logout} = props;
  return (
    <div>
      <Typography variant='h1'>Chat!</Typography>
      <Messages user={user}/>
      <TextBox user={user}/>
      <Box sx={{width:'15vh'}}/>
      <Typography variant='h6'>Currently logged in as {user}</Typography>
      <Button onClick={logout} variant='contained'>Log Out</Button>
    </div>
  )
}

export default Chat