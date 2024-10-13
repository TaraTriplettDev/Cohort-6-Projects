const UserController = require("../controllers/users.Controller");
const FeedController = require("../controllers/feedController");
// const AuthCheck = require("../middleware/AuthCheck");
const User = require("../models/users.model");
module.exports = (app) => {


  app.get("/test", UserController.testRoute);

  app.get("/test", UserController.testRoute);

  app.post("/api/registration", UserController.registration);
  // console.log('registration part')
  app.post("/api/login", UserController.login);
  // console.log('login part')

  app.get('/api/logout.id', UserController.logout)

  app.get("/api/auth", UserController.userAuth);

  app.get("/api/finduser/:id", UserController.findUsers);

  app.get("/api/allUsers", UserController.allUsers);

  app.get("/api/addFriend/", AuthCheck, UserController.addFriend);


  // app.get('/test/UsersCreative/')

  // *********************************************
  // Feed Routes

  app.get("/api/getFeeds", FeedController.getFeeds);
  app.post("/api/createFeed", FeedController.createFeed);

};

// app.get("/test", userController, testRoute)