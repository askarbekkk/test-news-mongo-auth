const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newsSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    title: String,
    description: String,
    comments:[{type:mongoose.Schema.Types.ObjectId, ref: 'comments'}],
    image:{type: String, default:"https://source.unsplash.com/random"}
}, {timestamps: true})

module.exports = mongoose.model("news", newsSchema)