
const express = require('express')
const router = express.Router();

// import controller 
const createTodo = require("../controllers/createTodo");
const updateTodo = require('../controllers/updateTodo')
const deleteTodo = require('../controllers/deleteTodo')
const { getTodo, getTodoById } = require('../controllers/getTodo');


// define api routes
router.post("/createTodo" , createTodo); // particular route is mapped with controller
router.get('/getTodo',getTodo)
router.get("/getTodoById/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router

