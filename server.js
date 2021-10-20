const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()
const authRouter = require("./routes/auth")

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan())
server.use("/api/v1", authRouter)

server.listen(process.env.PORT, () =>{
    console.log("Server is running")
})