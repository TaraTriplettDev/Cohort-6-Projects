const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {

    first: String,

    last: String,

    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
    },

    email: {
        type: String, 
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        unique: true,
    },   
}
)
const User = mongoose.model("User", UserSchema);
module.exports = User;


const Router = require("./routes/routes.js")


require('dotenv').config()

const bcrypt = require('bcrypt')

const port = process.env.PORT || 5000;

app.use(express.json()) // Gives access to the req.body

app.use(cors({
    origin: "http://localhost:5173",
    //credentials: true
}))