import React, { useEffect } from 'react'
import {useSocketContext} from "../context/socketContext.jsx"
import useConversation from "../zustand/useConversation.js"
import notificationSound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
	const { socket } = useSocketContext();
    
	const { messages, setMessages } = useConversation();

	useEffect(() => {
        
		socket?.on("newMessage", (newMessage) => {
            console.log("working here")
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages]);
};
// const useListenMessages = () => {
//   const {socket} = useSocketContext()
//   const {messages,setMessages} = useConversation()

//   useEffect(()=>{
//    socket?.on("newMessage",(newMessage)=>{
//     newMessage.shouldShake = true;
//     setMessages([...messages,newMessage])
//    })
//     return ()=>socket.off("newMessage")
//   },[socket,setMessages,messages])
// }

export default useListenMessages