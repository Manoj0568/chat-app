import express from 'express'
import dotenv from 'dotenv'
import authrouter from "./routes/auth.route.js"
import connectToMongoDB from './db/connectToMongoDB.js'
import messagerouter from "./routes/message.route.js"
import userrouter from "./routes/user.route.js"
import cookieParser from 'cookie-parser'
import { app, server } from './socket/socket.js'
import path from 'path'

app.use(express.json())
app.use(cookieParser())
dotenv.config()
const PORT = process.env.PORT  || 5000;

const __dirname = path.resolve()


app.use("/api/auth",authrouter)
app.use("/api/message",messagerouter)
app.use("/api/user",userrouter)
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend", "dist","index.html"))
})

// app.get("/",(req,res)=>{
//     res.send("hellow world")
// })
server.listen(PORT,(req,res,next)=>{
    connectToMongoDB();
    console.log(`server running on port http://localhost:${PORT}`)
})