import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function TextBox() {
  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {username: e.target.username.value, message: e.target.message.value}
    console.log(obj)
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