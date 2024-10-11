const User = require("../models/users.model");
const Feed = require("../models/feed.model");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

module.exports = {



    getFeeds: (req, res) => {

    },

    createFeed: (req, res) => {
        console.log("req.body", req.body)
        Feed.create(req.body)
        .then(created => {
            console.log("created", created)
        })
    }

}