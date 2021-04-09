const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const TodoListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

/*module.exports = mongoose.model('Task', TaskSchema)
module.exports = mongoose.model('TodoList', TodoListSchema)*/
module.exports = mongoose.model('Boards', BoardSchema)

