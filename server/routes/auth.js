const express = require('express');
const router = express.Router()
const { register } = require('../controller/Auth/RegisterController')
const { getData } = require('../controller/HomeController')
const { login } = require('../controller/Auth/LoginController')
// const { logout } = require('../controller/Auth/LogoutController')

router.post('/register',register)
router.get('/', getData)
router.post('/login', login)
module.exports = router