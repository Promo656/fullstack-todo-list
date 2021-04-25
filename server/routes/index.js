const router = require('express').Router()

const api = "/api/v1"

router.use(`${api}`, require('./boards'))
router.use(`${api}`, require('./todoLists'))
router.use(`${api}`, require('./tasks'))

router.use(`${api}`, require('./auth'))

module.exports = router