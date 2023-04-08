const mongoose = require('mongoose')
// const emailValidate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required.']
    },
    email: {
        type: String,
        required: [true, 'The email field is required.'],
        unique: true,
        lowercase: true,
        validate: {
            validator: function(email) {
                const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})(\.\w{2,3})?$/;
                return emailRegex.test(email);
            },
            message: 'Please provide a valid email address.'
        }
    },
    password: {
        type: String,
        required: [true, 'The password field is required.']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)