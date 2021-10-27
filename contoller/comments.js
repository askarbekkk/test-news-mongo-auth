const Comments = require("../models/commentsModel")
const News = require("../models/newsModel")
const User = require("../models/authModel")

const createComments = async (req, res) => {
    try {
        const newComment = new Comments(req.body)
        const savedComment = await newComment.save()
        await News.findOneAndUpdate({author: savedComment.author}, {$push: {comments: savedComment._id}})
        await User.findByIdAndUpdate(savedComment.author, {$push: {comments: savedComment._id}})
        res.json(savedComment)
    } catch (e) {
        res.status(400).json({message: "Error to saved"})
    }
}

module.exports = {createComments}