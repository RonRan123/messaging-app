import React from 'react'

function Message(props) {
  const {username, text, createdAt} = props.msg;
  console.log(props);
  let date = new Date(null);
  date.setSeconds(createdAt._seconds);
//   let time = `${date.getMonth() +1 }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
  let time = date.toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"}) 
  return (
    <div>
        <h3>Message from {username} at {time}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Message