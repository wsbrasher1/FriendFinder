
var friends = require("../data/friends.js");
//Routing//
module.exports = function(app) {
app.get("/api/friends", function(req, res){
    res.json(friends);
});
    
app.post("/api/friends", function(req, res) {
    var match = {
        name: "",
        photo: "",
        scoreDifference: 100,
    };
console.log(req.body);
var matchData = req.body;
var matchScores = matchData.scores;
console.log(matchScores);
var totalDifference = 0;
for (var i = 0; i < friends.length; i++){
console.log(friends[i]);
totalDifference = 0;
for (var k = 0; k < friends[i].scores.length; k++){
    totalDifference += Math.abs(parseInt(matchScores[k]) - parseInt(friends[i].scores[k]));
    if(totalDifference <= match.scoreDifference){
        match.name = friends[i].name;
        match.photo = friends[i].photo;
        match.scoreDifference = totalDifference;
        }
    }
}
friends.push(matchData);
res.json(match);
})
}