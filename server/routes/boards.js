const router = require('express').Router()
const Board = require('../model/board')

router.get(`/getBoards`, async (req, res) => {
    try {
        const boards = await Board.find()
        res.status(200).json(boards)
    } catch (e) {
        console.log(e)
    }
})
router.post(`/addNewBoard`, async (req, res) => {
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
router.delete(`/deleteBoard/:boardId`, async (req, res) => {
    try {
        const removeBoard = await Board.deleteOne({_id: req.params.boardId})
        res.status(200).json(removeBoard)
    } catch (e) {
        res.json(e)
    }
})
router.patch(`/renameBoard/:boardId`, async (req, res) => {
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

module.exports = router