const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3005

app.use(express.json())

app.get("/test", (req, res) => {
    console.log("/TEST  HIT")
    res.json({ msg: "Success"})
})
// Define a Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
});

// Create a Model based on the Schema
const User = mongoose.model('User', userSchema);

// Create a new Document
const newUser = new User({
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
    password: "1234"
});

// Save the Document to the database
newUser.save()
    .then(() => console.log('User saved'))
    .catch(err => console.log(err));



