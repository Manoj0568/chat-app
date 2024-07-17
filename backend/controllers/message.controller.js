import { User } from "../models/user.model.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { getReceiverSocketId,io} from "../socket/socket.js";


export const sendmessage = async (req,res,next)=>{
 
   try {
    const {id:receiverId} = req.params
    const {message} = req.body
    const senderId = req.user._id

    let conversation = await Conversation.findOne({
        participants:{
            $all:[senderId,receiverId]
        }
    })

    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,receiverId]
            //as message is default an empty array we need not to create it
        })
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })
    console.log(newMessage)
    if(newMessage){
        conversation.messages.push(newMessage._id)
    }

    //socket.io will come here
    
    // await conversation.save()
    // await newMessage.save()

    //instead if executing syncronously it will take time so we can execute parallely

    await Promise.all([conversation.save(),newMessage.save()])

    const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}
    res.status(200).json(newMessage)
   } catch (error) {
     console.log(error)
     return res.status(400).json({error:"Internal system error"})
   }
}


export const getmessages = async(req,res,next)=>{
    try {
        const{id:userToChatId} = req.params
        const senderId = req.user._id

        const conversation =await  Conversation.findOne({
            participants:{
                $all:[senderId,userToChatId]
            }
        }).populate("messages") //to get messages inside the message key instead of an array of message id
        
        if(!conversation){
            return res.status(200).json([])
        }
        res.status(200).json(conversation.messages)

    } catch (error) {
        console.log(error)
        return res.status(400).json({error:"Internal system error"})
      }
}