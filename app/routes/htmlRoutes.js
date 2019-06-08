var path = require("path");

module.exports = function(app){
    app.get("/survey", function(req, res){
        console.log("alright, alright, alright")
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.get("/", function(req, res){
        console.log("homeward bound")
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}