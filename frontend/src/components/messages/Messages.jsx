import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages.js'
import useListenMessages from '../../hooks/useListenMessages.js'

const Messages = () => {
  useListenMessages()
  const {messages,loading} = useGetMessages()
  
  const lastMessageRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    },100)
  },[messages])
  return (
    <div className='px-2 flex-1 overflow-auto'>
      {!loading && messages.length>0 && messages.map((message)=>(
      <div key={message._id}
       ref={lastMessageRef}
      ><Message  message={message}/></div>
    ))}
    {loading && <span className='loading loading-spinner'></span>}
    {messages.length === 0 && <p className='text-center'>Send a message to start the conversation!</p>}
    
    </div>
  )
}

export default Messages