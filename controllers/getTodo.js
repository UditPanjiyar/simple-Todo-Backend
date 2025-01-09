const Todo = require("../models/Todo");

const getTodo = async (req, res) => {
  try {
    //fetch all todo item from database
    const todos = await Todo.find({});
    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire todo data is fetched",
    });
  } catch (err) {
    console.error(err);
    // console.log(err.message)
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};

const getTodoById = async (req,res) => {
  try {
    //extract todo item based on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    // data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "no data found with given id",
      });
    }
    // data for given id found
    res.status(200).json({
      success: true,
      data: todo,
      message: `Todo data for id =  ${id}  successfully fetched`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};

module.exports = getTodo
module.exports = getTodoById
