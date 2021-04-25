require('dotenv').config()

const express = require('express')
const app = express()

const initMongoServer = require('./config/db')

const cors = require('cors')

const port = process.env.PORT || 5002


app.use(cors())
app.use(express.json())
initMongoServer()

app.use(require('./routes'))

/*app.get('/post', async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post)
    } catch (e) {
        res.json(e)
    }
})
app.post('/post', async (req, res) => {
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
        const removedPost = await Post.deleteOne({_id: req.params.postId})
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
})*/

app.listen(port, () => {
    console.log(`Server started on ${port} port`)
})
