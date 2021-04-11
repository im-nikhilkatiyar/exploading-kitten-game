const express = require('express')
const router = express.Router();
const authentication = require('../middleware/auth')

// import controllers
const userDetails = require('../controler/create-user')
const GetAllUsers = require('../controler/get-all-users')

// use controllers with routes
router.post('/user', authentication, userDetails)
router.get('/users', GetAllUsers)

module.exports = router;