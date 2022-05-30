import React from 'react'

function Message(props) {
  const {username, text, createdAt} = props.msg;
  console.log(props);
  return (
    <div>
        <h3>Message from {username} at </h3>
        <p>{text}</p>
    </div>
  )
}

export default Message