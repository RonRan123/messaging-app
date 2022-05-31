import React, {useEffect, useState} from 'react';
import Chat from './Chat';
import Login from './Login';

function ChatApp() {
    const [username, setUsername] = useState();
    //  https://www.youtube.com/watch?v=rWfhwW9forg 
    // useEffect(() => {
    //     const data = localStorage.getItem('MY_MESSAGING_APP_USERNAME');
    //     const user = JSON.parse(data);
    //     console.log('user', user);
    //     if(user) setUsername(user);
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem('MY_MESSAGING_APP_USERNAME', JSON.stringify(username));
    //     console.log(username);
    // }, [username])
  return (
    <>
        {username? <Chat user={username} logout={() => setUsername(null)}/> : <Login setUsername={setUsername}/>}
    </>
  )
}

export default ChatApp