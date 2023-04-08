/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the Express JS within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/ErrorHandler')
const port = process.env.PORT || 5000
const connectDB = require('./config/database')

connectDB()
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/posts', require('./routes/post'))
app.use('/api/auth', require('./routes/auth'))
app.use(errorHandler)




app.listen(port, () => {
    console.log('\n INFO '.blue.inverse + ` Server running on [http://localhost:${port}].`)
    console.log('\nPress Ctrl+C to terminate the server'.yellow)
})