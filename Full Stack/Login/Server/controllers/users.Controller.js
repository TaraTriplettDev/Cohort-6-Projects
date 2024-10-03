const User = require("../models/users.model");
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
                        .then((created) => {
                            console.log('created==', created)
                            created.save()
                            res.json({ msg: 'successful reg', created })
                })
            } else {
                res.json({ msg: 'invalid Reg'})
            }
        })
    },

    login: (req, res) => {
        console.log("LOGIN hit", req.body)
        User.findOne({ username: req.body.username })
            .then((found) => {
                console.log('found', found)
                if (!found){
                    res.json({ msg: 'Invalid Login' })
                } else {


                    const passwordMatch = bcrypt.compareSync(req.body.password, found.password)
                }   if (!passwordMatch) {
                        res.jason({ msg: 'Invalid Login' })
                } else {
                    res.json({ msg: 'Happy Login!', found })
                }
            })
    },

    registerUser: (req, res) => {

    },
}