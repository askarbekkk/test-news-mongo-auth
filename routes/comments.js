const express = require("express")
const {createComments, getAllComments, likeComment, disLikeComment} = require("../contoller/comments");

const router = express.Router()

router.post("/", createComments)
router.get("/", getAllComments)
router.patch("/:id", likeComment)
router.patch("/dislike/:id", disLikeComment)

module.exports = router