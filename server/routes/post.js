const express = require('express');
const router = express.Router()
const {
    index,
    store,
    update,
    destroy
} = require('../controller/PostController')
/*
|--------------------------------------------------------------------------
| Post Routes
|--------------------------------------------------------------------------
*/
router.route('/').get(index).post(store)
router.route('/:id').delete(destroy).put(update)
module.exports = router