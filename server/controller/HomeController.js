
const asyncHandler = require('express-async-handler');
// const User = require('./')
/**
 * Get users data from database
 *
 * @desc Get user information from database
 * @route GET /api/auth/
 * @api public
 */
const getData = asyncHandler(async (req, res) => {
    res.json({ message: 'Hello user'})
})

module.exports = { getData }