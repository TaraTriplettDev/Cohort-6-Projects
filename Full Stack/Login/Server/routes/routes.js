const UserController = require("../controllers/users.Controller")

module.exports = (app) => {


    app.get("/test", UserController.testRoute)
        
    //       {req, res} => {

    //         console.log("TEST Route HIT!")

    //         res.json({ msg: "Hello World!" })
    //     }
        app.post("/api/registration", UserController.registration)

        app.post("/api/login", UserController.login)
    }