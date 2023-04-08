const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'The text field is required.']
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Post', postSchema)