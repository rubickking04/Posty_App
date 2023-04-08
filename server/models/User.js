const mongoose = require('mongoose')
const emailValidate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required.']
    },
    email: {
        type: String,
        required: [true, 'The email field is required.'],
        match: [emailValidate, 'Please provide a valid email address.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The password field is required.']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)