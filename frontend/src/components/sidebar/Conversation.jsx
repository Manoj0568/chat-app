import React from 'react'
import useConversation from "../../zustand/useConversation.js"
const Conversation = ({conversation,lastIdx}) => {

  const {selectedConversation,setSelectedConversation, messages} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id

  
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500":""}`}
       onClick={()=>setSelectedConversation(conversation)}
      >
        <div className="avatar offline">
          <div className="w-12 rounded-full">
            <img src={conversation.profilepic} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.username}</p>
            <span className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info h-6 w-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div className="divider my-6s py-0 px-3 h-1"></div>
      </div>
    </>
  );
}

export default Conversation