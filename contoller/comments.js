const Comments = require("../models/commentsModel")
const News = require("../models/newsModel")
const User = require("../models/authModel")

const createComments = async (req, res) => {
    try {
        const newComment = new Comments(req.body)
        const savedComment = await newComment.save()
        await News.findOneAndUpdate({_id: savedComment.news}, {$push: {comments: savedComment._id}}, {new: true})
        const author = await User.findById(savedComment.author)
        console.log(author)
        res.json({...savedComment._doc, author})
    } catch (e) {
        res.status(400).json({message: "Error to saved"})
    }
}

const getAllComments = async (req, res) => {
    try{
        const news = await News.find({}).populate("comments")
        res.json(news)
    } catch (e) {
        res.status(400).json({message: "Error to get comment"})
    }
}

const likeComment = async (req, res) => {
    try{
        const comment = await Comments.findByIdAndUpdate(req.params.id, {$inc : {'likes' : 1}}, {new:true})
        res.json(comment)
    } catch (e) {
        res.status(400).json({message: "Error to get comment"})
    }
}

const disLikeComment = async (req, res) => {
    try{
        const comment = await Comments.findByIdAndUpdate(req.params.id, {$inc : {'likes' : -1}}, {new:true})
        res.json(comment)
    } catch (e) {
        res.status(400).json({message: "Error to get comment"})
    }
}

const deleteComment = async (req, res) => {
    const comment = await Comments.findByIdAndDelete(req.params.id)
    res.json({status:"Successfully deleted"})
}

module.exports = {createComments, getAllComments, likeComment, disLikeComment, deleteComment}