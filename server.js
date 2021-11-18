const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")
// const fs = require("")
const chalk = require("chalk")
require("dotenv").config()
const authRouter = require("./routes/auth")
const newsRouter = require("./routes/news")
const stripeRouter = require("./routes/stripe")
const commentsRouter = require("./routes/comments")
const path = require("path");

const server = express()

server.use(cors())
server.use(express.json())
server.use(morgan())

server.use(express.static(path.join(__dirname, "./client/build")))

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log(chalk.cyan("DB connected")))
    .catch(() => console.log(chalk.red("DB not connected")))

server.use("/api/v1", authRouter)
server.use("/api/v1/news", newsRouter)
server.use("/api/v1/comments", commentsRouter)
server.use("/api/v1", stripeRouter)

server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"))
})

server.listen(process.env.PORT, () =>{
    console.log("Server is running")
})