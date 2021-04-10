require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 5002
const api = '/api/v1'

// const Post = require('./model/post')
const Board = require('./model/board')
const TodoList = require('./model/todoList')


app.use(cors())
app.use(express.json())

app.get(`${api}/getBoards`, async (req, res) => {
    try {
        const boards = await Board.find()
        res.status(200).json(boards)
    } catch (e) {
        console.log(e)
    }
})
app.post(`${api}/addNewBoard`, async (req, res) => {
    const board = new Board({
        title: req.body.title,
    })
    try {
        const saveBoard = await board.save()
        res.json(saveBoard)
    } catch (e) {
        res.json(e)
    }
})
app.delete(`${api}/deleteBoard/:boardId`, async (req, res) => {
    try {
        const removeBoard = await Board.deleteOne({_id: req.params.boardId})
        res.status(200).json(removeBoard)
    } catch (e) {
        res.json(e)
    }
})
app.patch(`${api}/renameBoard/:boardId`, async (req, res) => {
    try {
        const updateBoard = await Board.updateOne(
            {_id: req.params.boardId},
            {$set: {title: req.body.title}}
        )
        res.status(200).json(updateBoard)
    } catch (e) {
        res.json(e)
    }
})

app.get(`${api}/getTodolist`, async (req, res) => {
    try {
        const todoList = await TodoList.find()
        res.status(200).json(todoList)
    } catch (e) {
        res.json(e)
    }
})
app.post(`${api}/addNewTodolist`, async (req, res) => {
    const todolist = new TodoList({
        title: req.body.title,
        boardId: req.body.boardId
    })
    try {
        const savedTodoList = await todolist.save()
        res.json(savedTodoList)
    } catch (e) {
        res.json(e)
    }
})
app.delete(`${api}/deleteAllTodoListFromBoard/:boardId`, async (req, res) => {
    try {
        const removeAllTodoListFromBoard = await TodoList.remove({boardId: req.params.boardId})
        res.status(200).json(removeAllTodoListFromBoard)
    } catch (e) {
        res.json(e)
    }
})
app.delete(`${api}/deleteOneTodoList/:todoListId`, async (req, res) => {
    try {
        const removeTodoList = await TodoList.deleteOne({_id: req.params.todoListId})
        res.status(200).json(removeTodoList)
    } catch (e) {
        res.json({message: e})
    }
})
app.patch(`${api}/renameTodoList/:todoListId`, async (req, res) => {
    try {
        const updateTodoList = await TodoList.updateOne(
            {_id: req.params.todoListId},
            {$set: {title: req.body.title}}
        )
        res.status(200).json(updateTodoList)
    } catch (e) {
        res.json(e)
    }
})

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


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected successfully")
})

app.listen(port, () => {
    console.log(`Server started on ${port} port`)
})
