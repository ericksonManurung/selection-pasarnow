const route = require('express').Router()
const routeUser = require('./user')
const routeTodo = require('./todo')
const { authentication } = require('../middlewares/auth')

route.use('/user', routeUser)
route.use(authentication)
route.use('/todo', routeTodo)

module.exports = route