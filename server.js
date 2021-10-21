const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
const chalk = require("chalk")
require("dotenv").config()
const authRouter = require("./routes/auth")

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan())

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(chalk.cyan("DB connected")))
    .catch(() => console.log(chalk.red("DB not connected")))

server.use("/api/v1", authRouter)

server.listen(process.env.PORT, () =>{
    console.log("Server is running")
})