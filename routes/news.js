const express = require("express")
const {createNews, getAllNews} = require("../contoller/news");

const router = express.Router()

router.get("/", getAllNews)
router.post("/", createNews)



module.exports = router