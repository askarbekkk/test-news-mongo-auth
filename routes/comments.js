const express = require("express")
const {createComments, getAllComments} = require("../contoller/comments");

const router = express.Router()

router.post("/", createComments)
router.get("/", getAllComments)

module.exports = router