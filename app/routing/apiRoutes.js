var friends = require("../data/friends.js");
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  })
  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 50
    }
    var userData = req.body;
    var userScores = userData.scores;
    var totalScore = 0;
    // loops through friends object array
    for (var i = 0; i < friends.length; i++) {
      // loops through scores array for each friend[i]
      for (var j = 0; j < friends[i].scores[j]; j++) {
        // takes the absolute value of userscores array and friends scores array
        totalScore += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
        if (totalScore <= bestMatch.friendDiff) {
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDiff = totalScore;
        }
      }
    }

    friends.push(userData);
    res.json(bestMatch);
  })
}