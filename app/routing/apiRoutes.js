
// routing
// required data
var friendData = require("../data/friends.js");


module.exports = function (app) {
    // API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        newFriend = req.body
        friendData.push(newFriend);
        res.json(newFriend)

        // newFriend.scores = newFriend.scores.map((x) =>parseInt(x))

        // for (var i = 0; i < friendData.length; i++) {
        //     // console.log(friendData[i].scores)
        //     for (var j = 0; j < friendData[i].scores.length; j++) {
        //         console.log(typeof friendData[i].scores[j])
        //     }
        // }

        // TODO: compare newFriend to friendData
        // take scores from new friend and compare to the scores of the friends in the friendData Array
        // returns the friend that has the smallest difference in scores
        // displays the name and picture of closest match in modal on screen 

    });

};