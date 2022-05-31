import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Message from './Message';

function Messages(props) {
  const {user} = props;
  const [messages, setMessages] = useState();
  const [count, setCount] = useState(0);
  const updateMessage = () => setCount(count + 1);
  useEffect( () => {
    async function fetchMessages(){
      const response = await fetch('/chat/messages');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      setMessages(body);
      //console.log(body);
    }
    fetchMessages();
  } ,[count])
  return (
    <div>
      <Typography variant='h2'>Messages!</Typography>
      {messages && messages.map(msg => <Message key={msg.doc_id} msg={msg} isMe={msg.username === user} update={updateMessage}/>)}
    </div>
  )
}

export default Messages