const route = require('express').Router()
const TodoController = require('../controllers/TodoController')

route.get('/', TodoController.readTodo)
route.post('/', TodoController.createTodo)
route.put('/:id', TodoController.putTodo)
route.patch('/:id', TodoController.patchTodo)
route.delete('/:id', TodoController.deleteTodo)

module.exports = route