import React from 'react'
import { IoSend } from "react-icons/io5";
const MessageInput = () => {
  return (
    
    <form className='p-2 my-2'>
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            placeholder='type here....' />

            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
             <IoSend className='text-white'/>
            </button>
        
        </div>
    </form>
  )
}

export default MessageInput