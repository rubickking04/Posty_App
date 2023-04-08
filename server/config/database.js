/*
|--------------------------------------------------------------------------
| Database Connections
|--------------------------------------------------------------------------
|
| Let's bring in Mongoose from Mongoose.
|
| Here you may specify which of the database connections below you wish
| to use as your default connection for all database work. Of course
| you may use many connections at once using the Database library.
|
*/

const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('\n INFO '.blue.inverse + ' Database connected successfully. \n')
        console.log(`MongoDB Connected to ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB