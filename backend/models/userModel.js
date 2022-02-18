const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: ['Please add a password']    
    },
  },
  {
    tiestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
