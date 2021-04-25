const router = require('express').Router()
const Task = require('../model/board')

router.get(`/getTasks`, async (req, res) => {
    try {
        const task = await Task.find()
        res.status(200).json(task)
    } catch (e) {
        res.json(e)
    }
})
router.post(`/addNewTask`, async (req, res) => {
    const task = new Task({
        title: req.body.title,
        todoListId: req.body.todoListId,
        boardId: req.body.boardId
    })
    try {
        const saveTask = await task.save()
        res.status(200).json(saveTask)
    } catch (e) {
        res.json(e)
    }
})
router.delete(`/deleteAllTaskFromBoard/:boardId`, async (req, res) => {
    try {
        const removeAllTaskFromBoard = await Task.remove({boardId: req.params.boardId})
        res.status(200).json(removeAllTaskFromBoard)
    } catch (e) {
        res.json(e)
    }
})
router.delete(`/deleteAllTaskFromTodoList/:todoListId`, async (req, res) => {
    try {
        const removeAllTaskFromTodoList = await Task.remove({todoListId: req.params.todoListId})
        res.status(200).json(removeAllTaskFromTodoList)
    } catch (e) {
        res.json(e)
    }
})
router.patch(`/renameTask/:taskId`, async (req, res) => {
    try {
        const updateTask = await Task.updateOne(
            {_id: req.params.taskId},
            {$set: {title: req.body.title}}
        )
        res.status(200).json(updateTask)
    } catch (e) {
        res.json(e)
    }
})

module.exports = router