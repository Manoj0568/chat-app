import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { PiChatsThin } from "react-icons/pi";

const MessageContainer = () => {

    const chatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col p-2'>
        {chatSelected?<>
        <div className='bg-slate-500 px-4 py-3 mb-2'>
            <span className="label-text">To:</span>
            <span className='text-gray-900 font-bold'> &nbsp;Manoj Massss</span>
        </div>
        
        <Messages/>
        <MessageInput/>
        </>:<NoChatSelected/>}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = ()=>{
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome Manoj</p>
                <p>Select a chat to start messaging</p>
                <PiChatsThin className='text-3xl md:text-6xl text-center' />
            </div>
             
        </div>
    )
}