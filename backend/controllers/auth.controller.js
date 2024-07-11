import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookies from "../utils/generateToken.js"



export const signup = async (req,res,next)=>{

    try {
        const {fullname,username,password,confirmPassword,gender} = req.body

        if(password !== confirmPassword){
            return res.status(400).json({error:"password not match"})
        }

        const user = await User.findOne({username})
        console.log(user)
        if(user){
            return res.status(400).json({error:"username already exits"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
        //hash password
        //https://avatar.iran.liara.run/public/boy?username=Scott

        const boyavatar = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlavatar = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const newUser = new User({
            fullname,
            username,
            password: hashedpassword,
            gender,
            profilepic: gender === "male" ? boyavatar : girlavatar
        })

        await newUser.save()

       if(newUser){
        generateTokenAndSetCookies(newUser._id,res)
        return res.status(200).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilepic: newUser.profilepic
        })
       }else{
        return res.status(500).json({error:"can able to crete new user"})
       }

    } catch (error) {
        console.log(error)
       return res.status(500).json({message:"error in saving the user in database"})
    }
    console.log("sign up route")
}
export const login = async (req,res,next)=>{
   try {
    const {username,password} = req.body
    const user = await User.findOne({username})
    const isPasswordCorrect = await bcrypt.compare(password,user?.password || "") //otherwise it will thorw error if user not found as undefined

    if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invlaid user id or password"})
    }

    generateTokenAndSetCookies(user._id,res)

    res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilepic: user.profilepic
    })
   } catch (error) {
        console.log(error)
       return res.status(500).json({message:"error in login controller"})
   }
}
export const logout = (req,res,next)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        console.log(error)
       return res.status(500).json({message:"error in logout controller"})
    }
}
