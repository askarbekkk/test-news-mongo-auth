const News = require('../models/newsModel')
const User = require('../models/authModel')


const createNews = async (req, res) => {
    try {
        const newPost = new News(req.body)
        const savedPost = await newPost.save()
        res.json(savedPost)
    } catch (e) {
        res.status(400).json({message: "Error to saved"})
    }
}

const getAllNews = async (req, res) => {
    try{
        const news = await News.find({}).populate("author")
        res.json(news)
    } catch (e) {
        res.status(400).json({message: "Error to get post"})
    }
}

module.exports = {createNews, getAllNews}