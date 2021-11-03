const express = require("express")
const {createNews, getAllNews, getOneNews} = require("../contoller/news");
const verify = require("../middleware/authVerify")
const router = express.Router()

router.get("/:id", getOneNews)
router.get("/",verify, getAllNews)
router.post("/", createNews)



module.exports = router