const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHnadler = require('express-async-handler')
const User = require('../models/userModel')
const { eventNames } = require('../models/userModel')

// desc     Register new User
// route    POST /api/users
// access   Public 
const registerUser = asyncHnadler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exists
    const userExist = await User.findOne({email})

    if(userExist) {
        res.status(400)
        throw new Error('User already exist')
    }

    // Hash password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password)

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// desc     Authenticate a User
// route    POST /api/users/login
// access   Public 
const loginUser = asyncHnadler(async (req, res) => {
    const {email, password} = req.body

    //Check for the user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
       res.json({
           _id: user.id,
           name: user.name,
           email: user.email,
           token: generateToken(user._id)
       }) 
    } else {
        res.status(400)
        throw new Error('Invalid logins')
    }
})

// desc     Get User data
// route    GET /api/users/me
// access   Private 
const getMe = asyncHnadler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.my-env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser, loginUser, getMe
}