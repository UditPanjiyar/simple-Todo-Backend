const Todo = require('../models/Todo')

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title, description, updatedAt: Date.now() }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: `UPDATED successfully `,
        });

    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server Error in updated Todo",
        });
    }
}


module.exports = updateTodo;