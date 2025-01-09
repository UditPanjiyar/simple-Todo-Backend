const Todo = require('../models/Todo')

const deleteTodo = async (req, res) => {
    try {
        const {id} = req.body;
        await Todo.findOneAndDelete(id)
        res.json({
            success:true,
            message:"todo deleted"
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error in delete Todo",
        });
    }
}


module.exports = deleteTodo;