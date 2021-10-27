const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentsSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    news:{type:mongoose.Schema.Types.ObjectId, ref: "news"},
    content: {type: String, trim: true},
    likes: {type: Number, default: 0}
}, {timestamps: true})

module.exports = mongoose.model("comments", commentsSchema)