
// routing
// required data
var friendData = require("../data/friends");


module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/tables", function(req, res) {

    });

};