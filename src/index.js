const express = require('express')
require('./db/mongoose')
const Task = require('./models/tasks.js')
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/tasksRouter')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up and running on port ' + port)
})