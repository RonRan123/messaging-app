import { Button, IconButton, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

function Message(props) {
  const {username, text, createdAt, doc_id} = props.msg;

  const [isEditing, setIsEditing] = useState(false)

  const onDelete = (id) => {
      //alert('you are about to delete. Are you sure?')
      //console.log(id)
      axios.delete('http://localhost:9000/chat/message?id=' + id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const onEdit = (id) => {
    setIsEditing(!isEditing)
  }

  const editMessage = (e) => {
    if(e.keyCode === 13){
    console.log(e.target.value)
    axios.put('/chat/message', {
      id: doc_id,
      message: e.target.value
    }).catch(err => console.log(err))
    setIsEditing(false)
  }
  }

  //console.log(props);
  let date = new Date(null);
  date.setSeconds(createdAt);
//   let time = `${date.getMonth() +1 }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  let time = date.toLocaleDateString('en-us', { timeZone:'UTC', weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}) 
  return (
      <Paper>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <div>
                <Typography variant='h5'>Message from {username} at {time}</Typography>
                {isEditing ? <TextField onKeyDown={(e) => editMessage(e, doc_id)}/> :
                <Typography variant='h4'>{text}</Typography>}
            </div>
            <IconButton color='primary' onClick={() => onDelete(doc_id)}>
                <DeleteIcon />
            </IconButton>
            <IconButton color='primary' onClick={() => onEdit(doc_id)}>
                <EditIcon />
            </IconButton>
          </Box>          
      </Paper>
  )
}

export default Message