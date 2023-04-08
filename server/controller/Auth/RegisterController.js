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
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)
    const user = await User.create({
        name,
        email,
        password: hashedPass
    })
    if (user) {
        return res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        return res.status(400).json({ message: 'Invalid user data' })
    }
    // res.json({ message: 'Registration successful'})
})

module.exports = { register }