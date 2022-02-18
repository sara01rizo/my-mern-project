const mongoose = require('mongoose')
const { env } = require('process')
const dotenv = require('dotenv').config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.my-env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
