import {io} from 'socket.io-client'
import { useState, useEffect} from 'react'
const socket= io('http://localhost:3001')

const ChatenVivo=()=>{
 const [Isconnected, setIsconnected]= useState(false)
 const [messages, setmessages]= useState([])
 const [Newmessage, setNewMessage]= useState('')

 useEffect(()=>{
    socket.on('connected', () => setIsconnected(true))
    socket.on('chat_message', (data)=>{
    setmessages(messages=>[...messages, data])
    })

     return ()=>{
        socket.off('connected');
        socket.off('chat_message');
     }

 }, [])


 const SendNewmessage=()=>{
    socket.emit('chat_message', {
        user: socket.id,
        message: Newmessage
    })
 }


    return (
        <div>
            <h2>{Isconnected ? 'Connected': 'Disconnected'}</h2>
            <ul>
            {messages.map((message)=>{
                <li>{message.user}: {message.message}</li>
            })}
            </ul>
            <input type='text' onChange={(e)=>setNewMessage(e.target.value)}></input>
            <button onClick={SendNewmessage}>Send</button>
        </div>
    )
}

export default ChatenVivo