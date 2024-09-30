const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config()

const bcrypt = require('bcrypt')

const port = process.env.PORT || 5000;

app.use(express.json()) // Gives access to the req.body

app.use(cors({
    origin: "http://localhost:5173",
    // credentials: true
}))

app.get("/test", (req, res) => {
    console.log("TEST route HIT!!!")
    res.json({ msg: "Hello World!"})
})

// app.post("/api/registration")

app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("connected to Database")
    })
    console.log(`Server is running on port: ${port} `)
})