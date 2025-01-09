//import from model 
const Todo = require('../models/Todo')

//define route handler 

const createTodo = async (req, res) => {

    try {
        // extrsct title and description from request body
        const { title, description } = req.body;
        // create a new todo object & insert it in the database
        const response = await Todo.create({ title, description })
        // send a json response with success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "entry created successfully"
            }
        )

    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success: false,
                data: "internal server error",
                message: err.message
            }
        )
    }
}


module.exports = createTodo

