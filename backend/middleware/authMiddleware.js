const jwt = require('jsonwebtoken')
const { eventNames } = require('../models/userModel')
const asyncHnadler = ('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHnadler(async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Get token from header
            // 1 bc we want the one index
            token = req.headers.authorization.split('')[1]

            //let's verify the token
            const decoded = jwt.verify(token, process.my-env.JWT_SECRET)

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Sorry, not authorized')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('Not authorized, sorry no token for you')
    }

})

module.exports = { protect }