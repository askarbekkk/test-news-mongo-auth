const express = require("express")
const {signUp, signIn, authenticate} = require("../contoller/auth")

const router = express.Router()

router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/authenticate", authenticate)


module.exports = router