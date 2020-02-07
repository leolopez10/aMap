// Requiring necessary npm packages
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const mysql = require("mysql");
const geocoder = require("./geoCoder");


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

//created data to store addresses
var locations = {};
// Requiring our HTML route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// app.get("/map", function(req, res) {
//     res.sendFile(path.join(__dirname, "./public/map.html"));
// })

app.post("/", function(req, res) {
    var userAddress = req.body.address;
    console.log(userAddress)
    geocoder.geocode(userAddress)
        .then(function(data) {
            console.log(data);
            // create an object that holds the user 's inputed location
            let chosenLocation = {

                formattedAddress: data[0].formattedAddress,
                longitude: data[0].longitude,
                latitude: data[0].latitude,
                street: data[0].streetName,
                city: data[0].city,
                state: data[0].stateCode,
                zipcode: data[0].zipcode
            };
            console.log(chosenLocation);
            return chosenLocation;

        })
        .then(function(response) {
            // console.log(response);
            locations = response;
            console.log(locations);
            return res.send(index_view({ response }));

        })
        .catch(function(err) {
            console.log(err);
        });

})

//API route


// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});