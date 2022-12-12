const express = require('express')

const UserController = require('./users')

const router = express.Router()

router.get('/movie', UserController.getAllUsers)

module.exports = router