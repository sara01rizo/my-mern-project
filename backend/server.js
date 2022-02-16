const express = require('express')
const { env } = require('process')
const dotenv = require('dotenv').config()
const port = process.my-env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
