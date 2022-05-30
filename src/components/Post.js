import axios from 'axios'
import React, { useState } from 'react'
import { useRef } from 'react'

function Post () {

const text = useRef('')
const [message, setMessage] = useState('')
const [user, setUser] = useState('')

const postMessage = (msg) => {
    const time = Date.now()

    axios.post('/chat/message', {
        message: msg,
        dateCreated: time,
        username: user, 
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const handleSubmit = (e) => {
    e.preventDefault()
    postMessage(message, user)
    console.log(message + ' ' + user)
}

const onChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
}

const onChangeUser = (e) => {
    e.preventDefault()
    setUser(e.target.value)
}

return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            Message: <input type='text' onChange={(e) => onChange(e)} required></input>
            By: <input type='text' onChange={(e) => onChangeUser(e)} required></input>
            <input type='submit'/>
        </form>
    </div>
)
}

export default Post