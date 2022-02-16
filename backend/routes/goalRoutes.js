const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ mesagge: 'Get goals'})
})

router.post('/', (req, res) => {
    res.status(200).json({ mesagge: 'Set goal'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ mesagge: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ mesagge: `Delete goal ${req.params.id}`})
})

module.exports = router

