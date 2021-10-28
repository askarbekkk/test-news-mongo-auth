const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, trim: true, required: true, max: 28},
    email: {type: String, trim: true, required: true, unique: true, lowercase: true},
    password: {type: String, trim: true, required: true},
    role: {type: String, default: "user"},
    news:[{type:mongoose.Schema.Types.ObjectId, ref: "news"}],
    image:{type: String, default:"https://source.unsplash.com/random"}
}, {timestamps: true})

userSchema.pre("save", function (next){
    let user = this
    bcrypt.hash(user.password, 10, function (err, hash){
        if (err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.authenticate = function (password) {
    const hash_password = this.password
    return  bcrypt.compare(password, hash_password)
}

module.exports = mongoose.model("users", userSchema)