const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../models/User');
/**
 * Register a User.
 *
 * @desc Register a new User
 * @route POST /api/auth/register
 * @api public
 */
const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide a name, email and password.' })
    }
    const userExists = await User.findOne({ email })
    if (userExists) { 
        return res.status(400).json({ message: 'User already exists' })
    }
    
    res.json({ message: 'Registration successful'})
})

module.exports = { register }