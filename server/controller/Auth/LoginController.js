const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../models/User');
/**
 * Login a User.
 *
 * @desc Login User
 * @route POST /api/auth/login
 * @api public
 */
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' })
    }
    const validEmail = new User({ email });
    const error = validEmail.validateSync();
    if (error && error.errors && error.errors.email) {
        return res.status(400).json({ message: error.errors.email.message });
    }
    const user = await User.findOne({ email })
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(400).json({ message: 'The provided password is incorrect.' });
    }
    if (user && (await bcrypt.compare(password, user.password))) { 
        return res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        return res.status(400).json({ message: 'These credentials do not match our records.' })
    }
})

module.exports = { login }