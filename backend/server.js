import express from 'express'
import dotenv from 'dotenv'
import authrouter from "./routes/auth.route.js"
import connectToMongoDB from './db/connectToMongoDB.js'
import messagerouter from "./routes/message.route.js"
import userrouter from "./routes/user.route.js"
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())
dotenv.config()
const PORT = process.env.PORT  || 5000;


app.use("/api/auth",authrouter)
app.use("/api/message",messagerouter)
app.use("/api/user",userrouter)
// app.get("/",(req,res)=>{
//     res.send("hellow world")
// })
app.listen(PORT,(req,res,next)=>{
    connectToMongoDB();
    console.log(`server running on port http://localhost:${PORT}`)
})