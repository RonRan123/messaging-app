import { Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

function Message(props) {
<<<<<<< HEAD
  const {username, text, createdAt, doc_id} = props.msg;

  const onDelete = () => {
      alert('you are about to delete. Are you sure?')
  }

=======
  const {username, text, createdAt} = props.msg;
>>>>>>> d80b6bb61c5cff5c5dcbd4504dcd10f185ed0a3b

  console.log(props);
  let date = new Date(null);
  date.setSeconds(createdAt._seconds);
//   let time = `${date.getMonth() +1 }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
<<<<<<< HEAD
  let time = date.toLocaleDateString('en-us', { timeZone:'UTC', weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}) 
=======
  let time = date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}) 

>>>>>>> d80b6bb61c5cff5c5dcbd4504dcd10f185ed0a3b
  return (
      <Paper>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <div>
                <Typography variant='h5'>Message from {username} at {time}</Typography>
                <Typography variant='h4'>{text}</Typography>
            </div>
            <IconButton color='primary' onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
          </Box>          
      </Paper>
  )
}

export default Message