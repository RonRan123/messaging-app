import { Paper, TextField, Typography } from '@mui/material';
import React from 'react'

function Message(props) {
  const {username, text, createdAt} = props.msg;

  console.log(props);
  let date = new Date(null);
  date.setSeconds(createdAt._seconds);
//   let time = `${date.getMonth() +1 }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  let time = date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}) 

  return (
      <Paper>
          <Typography variant='h5'>Message from {username} at {time}</Typography>
          <Typography variant='h4'>{text}</Typography>
      </Paper>
  )
}

export default Message