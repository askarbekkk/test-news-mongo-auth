const mongoose = require("mongoose")
const Schema = mongoose.Schema

const newsSchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    title: String,
    description: String
}, {timestamps: true})

module.exports = mongoose.model("news", newsSchema)