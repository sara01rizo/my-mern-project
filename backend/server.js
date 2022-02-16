const express = require('express')
const { env } = require('process')
const dotenv = require('dotenv').config()
const port = process.my-env.PORT || 5000

const app = express()

app.get('/api/goals', (req, res) => {
    res.json({ mesagge: 'Get goals'})
})

app.listen(port, () => console.log(`Server started on port ${port}`))
