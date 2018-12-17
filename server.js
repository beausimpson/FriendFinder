// dependencies
var express = require("express");
var path = require("path");

// sets up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// required routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener -- starts server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});