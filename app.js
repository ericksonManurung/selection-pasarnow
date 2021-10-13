require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const routes = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const { run } = require('./config/connection')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routes)
app.use(errorHandler)

run()

app.listen(port, () => {
    console.log(`you're server run at http://localhost:${port}`)
})