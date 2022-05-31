import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Message from './Message';

function Messages(props) {
  const {messages, updateMessages} = props;
  const {user} = props;
  
  return (
    <div>
      <Typography variant='h2'>Messages!</Typography>
      {messages && messages.map(msg => <Message key={msg.doc_id} msg={msg} isMe={msg.username === user} update={updateMessages}/>)}
    </div>
  )
}

export default Messages