import { Button, Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import TextBox from './TextBox'

function Chat(props) {
  const {user, logout} = props;
  const [messages, setMessages] = useState();
  const [count, setCount] = useState(0);
  const updateMessages = () => setCount(count + 1);
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
      <Typography variant='h1'>Chat!</Typography>
      <Messages user={user} messages={messages} updateMessages={updateMessages}/>
      <TextBox user={user} update={updateMessages}/>
      <Box sx={{width:'15vh'}}/>
      <Typography variant='h6'>Currently logged in as {user}</Typography>
      <Button onClick={logout} variant='contained'>Log Out</Button>
    </div>
  )
}

export default Chat