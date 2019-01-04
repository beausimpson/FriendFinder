
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
        newFriend.scores = newFriend.scores.map((x) => parseInt(x))
        friendData.push(newFriend);

        var newFriendScore = 0;
        for (var i = 0; i < newFriend.scores.length; i++) {
            newFriendScore += newFriend.scores[i];
        }
        console.log(newFriendScore);

        var friendDataScore = 0;
        for (var i = 0; i < friendData.length; i++) {

            for (var j = 0; j < friendData[i].name.length; j++) {
                friendDataScore += friendData[i].scores[j];
            }
            if (friendDataScore - newFriendScore <= 5 || newFriendScore - friendDataScore <= 5) {
                res.json(friendData[i])
            }
        }
        console.log(friendDataScore);


    });

};