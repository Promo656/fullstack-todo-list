const express = require('express')
const router = express.Router()
const Post = require('../model/Post')

router.get('/', (req, res) => {
    console.log('We are on post')
})

router.post('/', ((req, res) => {
    console.log(req.body)
}))

module.exports = router