import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilepic:{
        type:String,
        default:""
    }
    //creted at updated at => member since it will give
},{timestamps:true})

export const User = mongoose.model("User",userSchema)

