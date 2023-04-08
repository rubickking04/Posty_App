/*
|--------------------------------------------------------------------------
| Post Controller
|--------------------------------------------------------------------------
| These functions are used to Create, Read, Update and Delete Posts.
| Enjoy building your API!
|
*/
const asyncHandler = require('express-async-handler');
const Post = require('../models/Post');
/**
 * Display a listing of the resource.
 * 
 * @desc Get Posts
 * @route GET /api/posts
 * @api private
 */
const index = asyncHandler(async (req, res) => {
    const posts = await Post.find()
    return res.status(200).json(posts)
})

/**
 * Store a newly created resource in storage.
 * 
 * @desc Crete Posts
 * @route POST /api/posts
 * @api private
 */
const store = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        return res.status(400)
        throw new Error('Please add a text field')
    }
    const post = await Post.create({
        text: req.body.text
    })
    return res.status(201).json(post)
})

/**
 * Update the specified resource in storage.
 * 
 * @desc Update Posts
 * @route PUT /api/posts/:id
 * @api private
 */
const update = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        return res.status(400)
        throw new Error('Post not found')
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    return res.status(200).json(updatedPost)
})

/**
 * Remove the specified resource from storage.
 * 
 * @desc Delete Posts
 * @route DELETE /api/posts/:id
 * @api private
 */
const destroy = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(400)
        throw new Error('Post not found')
    }
    await post.deleteOne()
    return res.status(200).json({
        id: req.params.id,
        message: 'Deleted Post'
    })
})

module.exports = {
    index,
    store,
    update,
    destroy
}