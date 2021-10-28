const express = require("express")
const {createNews, getAllNews, getOneNews} = require("../contoller/news");

const router = express.Router()

router.get("/:id", getOneNews)
router.get("/", getAllNews)
router.post("/", createNews)



module.exports = router