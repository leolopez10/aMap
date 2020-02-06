// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const mysql = require("mysql");
const geoCoder = require("./geoCoder");


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Views
const main_layout = require("./views/layouts/main_view");
const index_view = require("./views/index_view");

//MySQL connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.PASSWORD_DB,
    database: "location_DB"
})

//Test Connection to DB
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Requiring our HTML route
app.get("/", function(req, res) {
    connection.query("SELECT * FROM locations", function(err, data) {
            // console.log(data[0]);
            res.send(main_layout(index_view({ locations: data[0] })))

        })
        // res.sendFile(path.join(__dirname, "./public/map.html"));
});

// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});