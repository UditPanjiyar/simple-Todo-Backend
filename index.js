const express = require("express")
const app = express();

// load config from env file
require("dotenv").config()
const PORT = process.env.PORT || 4000

app.use(express.json()); // middleware use instead of body parser

// import routes for todo api
const todoRoutes = require("./routes/todo")

// mount the todo api routes
app.use("/api/v1",todoRoutes)

app.listen(PORT,()=>{
    console.log(`server started at port no. ${PORT}`)
})

const dbConnect = require("./config/database")
dbConnect();

// defaukt route 
app.get("/", (req,res)=>{
    res.send(`<h1> this is home page <h1>`)
})


