const UserController = require("../controllers/users.Controller");

module.exports = (app) => {
  app.get("/test", UserController.testRoute);

  app.post("/api/registration", UserController.registration);
  // console.log('registration part')
  app.post("/api/login", UserController.login);
  // console.log('login part')

  // app.get('/api/logout.id', UserController.logout)

  app.post("/api/authed", UserController.authed);

  // app.get('/test/UsersCreative/')

  app.get("/api/logout/:id", UserController.logout);
};
