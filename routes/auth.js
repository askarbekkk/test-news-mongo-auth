const express = require("express")
const {signUp, signIn, authenticate, getUserInfo, googleLogin} = require("../contoller/auth")

const router = express.Router()

router.get("/user/:id", getUserInfo)
router.post("/signup", signUp)
router.post("/signin", signIn)
router.post("/google-login", googleLogin)
router.get("/authenticate", authenticate)


module.exports = router