const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect(
            process.env.DB_CONNECTION,
            {useNewUrlParser: true, useUnifiedTopology: true}
        )
        console.log("Connected successfully")
    } catch (e) {
        console.log(e)
    }
}
