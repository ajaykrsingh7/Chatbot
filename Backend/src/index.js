require("dotenv").config()

const express =require("express")
const app= express()
const cors = require("cors")
const connectDb = require("./config/db")
const userRouter =require ("./routes/user.route")
const chatRouter =require ("./routes/chat.route")

const cookieParser = require("cookie-parser")

connectDb()

app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173",   // your React frontend origin
  credentials: true
}))


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/auth",userRouter)
app.use("/api/chat",chatRouter)

app.listen(process.env.PORT,()=>{
  console.log(`server is started at ${process.env.PORT}`)
})


