require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5002
const Post = require('./model/Post')


app.use(cors())
app.use(express.json())


app.get('/', async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (e) {
        res.json(e)
    }
})

app.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (e) {
        res.json(e)
    }
})

app.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (e) {
        res.json(e)
    }
})

app.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)
    } catch (e) {
        res.json(e)
    }
})

app.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        )
        res.json(updatePost)
    } catch (e) {
        res.json(e)
    }
})


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected successfully")
})

app.listen(port, () => {
    console.log(`Server started on ${port} port`)
})
