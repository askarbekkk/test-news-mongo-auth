const express = require("express")
const router = express.Router()
const {payment} = require("../contoller/stripe");

router.post("/payment", payment)

module.exports = router