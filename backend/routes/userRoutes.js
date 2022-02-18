const express = require('express')
const router = express.Router()
const {registeruser} = require('../controllers/userController')

router.post('/', registerUser)

module.exports = router