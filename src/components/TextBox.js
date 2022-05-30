import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import axios from 'axios'


function TextBox() {
  const onSubmit = (e) => {
    e.preventDefault();
    const time = Date.now()/1000;

    const obj = {username: e.target.username.value, message: e.target.message.value, dateCreated: time,}
    postMessage(obj);
    console.log(obj)
  }
  const postMessage = (msg) => {

    axios.post('/chat/message', msg)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

  return (
    <>
      <Typography variant='h3'>Type your message in the box below and submit!</Typography>
      <form onSubmit={onSubmit}>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <TextField name='username' label='Username'/>
          <TextField name='message' label='Message' sx={{width:500}}/>
          <Button variant='contained' type='submit'>Submit</Button>
        </Box>
      </form>
      
    </>
  )
}

export default TextBox