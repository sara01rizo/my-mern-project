const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHnadler = require('express-async-handler')
const User = require('../models/userModel')

// desc     Register new User
// route    POST /api/users
// access   Public 
const registerUser = asyncHnadler(async (req, res) => {
    const { name, email, passwors } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    res.json({ message: 'Register User'})
})

// desc     Authenticate a User
// route    POST /api/users/login
// access   Public 
const loginUser = asyncHnadler(async (req, res) => {
    res.json({ message: 'Login User'})
})

// desc     Get User data
// route    GET /api/users/me
// access   Public 
const getMe = asyncHnadler(async (req, res) => {
    res.json({ message: 'User display info'})
})

module.exports = {
    registerUser, loginUser, getMe
}