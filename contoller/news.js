const News = require('../models/newsModel')
const User = require('../models/authModel')


const createNews = async (req, res) => {
    try {
        const newPost = new News(req.body)
        const savedPost = await newPost.save()
        await User.findByIdAndUpdate(savedPost.author, {$push: {news: savedPost._id}})
        res.json(savedPost)
    } catch (e) {
        res.status(400).json({message: "Error to saved"})
    }
}

const getAllNews = async (req, res) => {
    try{
        const news = await News.find({}).populate("author", "-password")
        res.json(news)
    } catch (e) {
        res.status(400).json({message: "Error to get post"})
    }
}

const getOneNews = async (req, res) => {
    try{
        const news = await News
            .findOne({_id: req.params.id})
            .populate('comments', "-password")
            .populate({
            path: 'comments',
            populate: {
                path: 'author',
                select: "-password"
            }
        })
        res.json(news)
    } catch (e) {
        res.status(400).json({message: "Error to get post"})
    }
}

module.exports = {createNews, getAllNews, getOneNews}