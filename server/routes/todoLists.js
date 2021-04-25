const router = require('express').Router()
const TodoList = require('../model/todoList')

router.get(`/getTodolist`, async (req, res) => {
    try {
        const todoList = await TodoList.find()
        res.status(200).json(todoList)
    } catch (e) {
        res.json(e)
    }
})
router.post(`/addNewTodolist`, async (req, res) => {
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
router.delete(`/deleteAllTodoListFromBoard/:boardId`, async (req, res) => {
    try {
        const removeAllTodoListFromBoard = await TodoList.remove({boardId: req.params.boardId})
        res.status(200).json(removeAllTodoListFromBoard)
    } catch (e) {
        res.json(e)
    }
})
router.delete(`/deleteOneTodoList/:todoListId`, async (req, res) => {
    try {
        const removeTodoList = await TodoList.deleteOne({_id: req.params.todoListId})
        res.status(200).json(removeTodoList)
    } catch (e) {
        res.json({message: e})
    }
})
router.patch(`/renameTodoList/:todoListId`, async (req, res) => {
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

module.exports = router