const express = require("express")
const {createComments} = require("../contoller/comments");

const router = express.Router()

router.post("/", createComments)
router.get("/", createComments)

module.exports = router