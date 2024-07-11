import mongoose from "mongoose";

 const Schema = mongoose.Schema

 const conversationSchema = new Schema({
    participants:[
        {
            type:Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages:[
        {
            type:Schema.Types.ObjectId,
            ref:"Message",
            default:[]
        }
    ]
 },{timestamps:true})

 const Conversation = mongoose.model("Coversation",conversationSchema)

 export default Conversation;