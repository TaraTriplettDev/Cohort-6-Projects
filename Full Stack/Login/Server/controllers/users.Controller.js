const User = require(".../models/user.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

module.exports = {

    testRoute: (req, res) => {
        console.log("TEST route HIT!!!")
        res.json({ msg: "Hello World!" })
    },

    registration: (req, res) => {
        console.log("Registration HIT", req.body)

        const { username, password, first, last, email } = req.body

        User.findOne({ username: req.body.username })

            .then((found) => {
                console.log("found", found)

                if (!found) {

                    const hash = bcrypt.hashSync(password, 10)

                    const newUser = new User({
                        first: first,
                        last: last,
                        username: username,
                        email: email, 
                        password: hash
                    })

                    User.create(newUser)

                        .then(created => {

                            console.log("created", created)
                            created.save()
                        })
                
                } else {
                    res.json({ msg: "Invalid Registration"})
                }
            })
    },

    login: (req, res) => {
        console.log("LOGIN hit", req.body)
    }

    registerUser: (req, res) => {

    },
}