const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const usersRouter = require("./routes/users")
const excercisesRouter = require("./routes/exercises")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_DB
mongoose.connect(uri,{useNewUrlParser : true,useCreateIndex : true})
const conn = mongoose.connection
conn.once("open",() => {
    console.log("DATABASE CONNECTED SUCCESSFULLY")
})

app.use("/users",usersRouter)
app.use("/exercises",excercisesRouter)

app.listen(port,() => {
    console.log(`LISTENING ON PORT ${port} ...`)
})