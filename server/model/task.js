const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    boardId: {
        type: String,
        required: true
    },
    todoListId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Task', TaskSchema)


