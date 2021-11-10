const express = require("express")
const {payment} = require("../contoller/stripe");
const router = express.Router()

router.post("/payment", payment)