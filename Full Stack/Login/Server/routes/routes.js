const Usercontroller = require("../controllers/users.Controller")

module.exports = (app) => {

    app.get("/test", (req, res) => { 
        console.log("TEST route hit!!!")
        req.json({ msg: "Hello World!" })
    })

    app.get("/test", UserController.testRoute)
        
        (req, res) => {
        console.log("TEST route HIT!!!")
        req.json({ msg: "Hello World!" })
    }
}