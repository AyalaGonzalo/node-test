
const express = require('express')
const router = express.Router()
const index = require('../controller/homeController.js')

router.get('/', index)


module.exports = router