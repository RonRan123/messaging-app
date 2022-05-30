import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Message from './Message';

function Messages(props) {
  const [messages, setMessages] = useState();
  useEffect( () => {
    async function fetchMessages(){
      const response = await fetch('/chat/messages');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      setMessages(body);
      console.log(body);
    }
    fetchMessages();
  } ,[])
  return (
    <div>
      <Typography variant='h2'>Messages!</Typography>
      {messages && messages.map(msg => <Message key={msg.doc_id} msg={msg}/>)}
    </div>
  )
}

export default Messages