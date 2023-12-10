
const express = require('express')
const router = express.Router()

const getLogOut = require('../controller/auth/getLogOut.js')

router.get('/auth/logout', getLogOut)


module.exports = router