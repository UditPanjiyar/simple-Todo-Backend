
const express = require('express')
const router = express.Router();

// import controller 
const createTodo = require("../controllers/createTodo")

// define api routes
router.post("/createTodo" , createTodo); // particular route is mapped with controller

const getTodo = require('../controllers/getTodo');
const getTodoById = require('../controllers/getTodo');
const updateTodo = require('../controllers/updateTodo')
const deleteTodo = require('../controllers/deleteTodo')

router.get('/getTodo',getTodo)
router.get("/getTodoById/:id",getTodoById)
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);


module.exports = router

