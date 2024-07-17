import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../zustand/useConversation.js'
import { extractTime } from '../../utils/extracTime.js'

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()

  const fromMe = authUser._id === message.senderId;

  const chatClassName = fromMe?'chat-end':'chat-start'

  const profilePic = fromMe? authUser.profilepic:selectedConversation?.profilepic

  const bubbleBgColor = fromMe? "bg-blue-500":"";
  const bubbleTxtColor = fromMe? 'text-white':"";

  const formatedTime = extractTime(message.createdAt)

  const shouldShake = message.shouldShake? "shake":""
  return (
    <div className={`chat ${chatClassName}`}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={profilePic} />
    </div>
  </div>
  <div className={`chat-bubble text-white  bg-blue-300 ${bubbleBgColor} ${shouldShake}`}>{message.message}</div>
  <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center text-green-400 ${bubbleTxtColor}`}>{formatedTime}<time className="text-xs opacity-50 text-white"></time></div>
</div>
  )
}

export default Message