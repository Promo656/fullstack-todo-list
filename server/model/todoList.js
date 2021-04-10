const mongoose = require('mongoose')

const TodoListSchema = mongoose.Schema({
    boardId: {
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

module.exports = mongoose.model('TodoList', TodoListSchema)


