const Users = require("../models/authModel")
const jwt = require("jsonwebtoken")

const signUp = (req, res) =>{
    const {name, email, password} = req.body
    Users.findOne({email}).exec((err, user) =>{
        if (user){
            return res.status(400).json({error: "Email already use"})
        }
        let newUser = new Users({name, email, password})
        newUser.save((err, savedUser) =>{
            if (err){
                return res.status(400).json({error: "Error to saved"})
            }
            return res.json({message: "User successfully sign up"})
        })
    })
}

const signIn = (req, res) =>{
    const {email, password} = req.body
    Users.findOne({email}).exec(async (error, user) =>{
        if (!user){
          return   res.status(400).json({error: "User not found"})
        }
        const correctPassword = await user.authenticate(password)
        if (!correctPassword){
          return   res.status(400).json({error:"Email or password is not correct"})
        }
        const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY, {expiresIn: "2d"})
        res.json({token: token, user: {_id: user._id, name: user.name, email: user.email, role: user.role}})
    })
}

const authenticate = (req, res) => {
    const userId = jwt.verify(req.body.token, process.env.SECRET_KEY)
    res.json([userId])
}

module.exports = {signUp, signIn, authenticate}