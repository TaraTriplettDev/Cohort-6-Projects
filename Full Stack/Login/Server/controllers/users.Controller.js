const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

module.exports = {
  testRoute: (req, res) => {
    console.log("TEST route HIT!!!");
    res.json({ msg: "Hello World!" });
  },

  registration: (req, res) => {
    console.log("Registration HIT", req.body);

    const { username, password, first, last, email } = req.body;

    User.findOne({ username: req.body.username })
    .then((found) => {
      console.log("found", found);

      if (!found) {
        const hash = bcrypt.hashSync(password, 10);
        const newUser = new User({
          first: first,
          last: last,
          username: username,
          email: email,
          password: hash,
        });

        User.create(newUser).then((created) => {
          console.log("created==", created);
          created.save();
          res.json({ msg: "successful reg", created });
        });
      } else {
        res.json({ msg: "invalid Registration" });
      }
    });
  },

  login: (req, res) => {
    console.log("LOGIN hit", req.body);
    User.findOne({ username: req.body.username }).then((found) => {
      console.log("found", found);
      if (!found) {
        res.json({ msg: "Invalid Login" });
      } else {
        const passwordMatch = bcrypt.compareSync(
          req.body.password,
          found.password
        );
      }
      if (!passwordMatch) {
        res.jason({ msg: "Invalid Login" });
      } else {
        const payload = {
          username: found.username,
          _id: found._id,
          email: found.email,
        };

        const token = jwt.sign(payload, process.env.SECRETKEY, {
          expiresIn: "1h",
        });
        console.log("token", token);

        // found.token = token
        found.isOnline = true;
        found.save();

        res
          .cookie("jwt", token, {
            httpOnly: true,
            secure: false,
            maxAge: 3600000,
          })
          .status(200)
          .json({ message: "Logged in successfully", token: token, found });
      }
    });
  },

  logout: (req, res) => {
    console.log("req.params", req.params);
    User.findById(req.params.id).then((found) => {
      console.log("found", found);
      found.isOnline = false;
      found.save();
    });
  },

  createUser: (req, res) => {
    console.log("CREATE USER req.body", req.body);

    User.find({ username: req.body.username });

    then((found) => {
      if (found.length) {
        res.json({ message: "Error", Error: "Username already exists" });
      } else {
        console.log("else hit on create");

        const bash = bcrypt.hashSync(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          password: bash,
        });
        User.create(newUser)
          .then((created) => {
            res.json({ message: "success", user: created });
          })
          .catch((err) => {
            console.log("create user error", err);
          });
      }
    });
  },

  userAuth: (req, res) => {
    // console.log("req.cookies", req.cookies.jwt)
    // console.log("req.243234324", req.cookie)
    if (!req.cookies["jwt"]) {
      // console.log("cookie found")
      // console.log(cookieParser(req.headers.cookie))
      console.log("no cookie");
      res.json({ msg: "Not Authed" });
    }
    if (req.cookies["jwt"]) {
      console.log("about to verify");
      let decode = jwt.verify(req.cookies["jwt"], process.env.SECRETKEY);
      console.log("jwt verified", decode);
      if (decode._id) {
        // res.json({ message: "proceed", user: decode, _id:, decode._id })

        User.findById(decode._id).then((found) => {
          res.json(found);
        });
      } else {
        res.json({ message: "token expired" });
      }
    }
  },
};
