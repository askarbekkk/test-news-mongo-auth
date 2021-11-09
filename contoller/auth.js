const Users = require("../models/authModel")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const signUp = (req, res) => {
    const {name, email, password} = req.body
    Users.findOne({email}).exec((err, user) => {
        if (user) {
            return res.status(400).json({error: "Email already use"})
        }
        let newUser = new Users({_id: new mongoose.Types.ObjectId(),name, email, password})
        newUser.save((err, savedUser) => {
            if (err) {
                return res.status(400).json({error: "Error to saved"})
            }
            return res.json({message: "User successfully sign up"})
        })
    })
}

const signIn = (req, res) => {
    const {email, password} = req.body
    Users.findOne({email}).exec(async (error, user) => {
        if (!user) {
            return res.status(400).json({error: "User not found"})
        }
        const correctPassword = await user.authenticate(password)
        if (!correctPassword) {
            return res.status(400).json({error: "Email or password is not correct"})
        }
        const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "2d"})
        res.json({token: token, user: {_id: user._id, name: user.name, email: user.email, role: user.role}})
    })
}

const authenticate = (req, res) => {
    const token = req.header("auth-token")
    try {
        const userId = jwt.verify(token, process.env.SECRET_KEY)
        Users.findOne({_id: userId._id}).exec(async (error, user) => {
            res.json({
                token,
                user: {_id: user._id, name: user.name, email: user.email, role: user.role}
            })
        })
    } catch (e) {
        res.status(401).json({message: "Not authorized"})
    }
}

const getUserInfo = async (req, res) =>{
    try{
        const {id} = req.params
        const user = await Users.findOne({_id: id}).populate("news")
        res.json({
            _id: user._id,
            email: user.email,
            role: user.role,
            name: user.name,
            news: user.news
        })
    } catch (e) {
        res.status(400).res.json({message: "Error to get user"})
    }
}

const googleLogin = () => {

}


module.exports = {signUp, signIn, authenticate, getUserInfo, googleLogin}