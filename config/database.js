const mongoose = require('mongoose')
// const dotEnv = require('dotenv')
// dotEnv.config()
require('dotenv').config()

const dbConnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL
        // ,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
        // }
    )
    .then(()=>{console.log("database connection successful")})
    .catch((err)=>{
        console.log("CONNECTION FAILED")
        console.error(err.message)
        // iska matlab kya?
        process.exit(1)
    })  

}
module.exports = dbConnect