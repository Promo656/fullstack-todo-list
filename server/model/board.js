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

module.exports = mongoose.model('Boards', BoardSchema)

