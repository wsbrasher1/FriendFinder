//Dependencies//
var express = require("express");
var path = require("path");

//Express configuration//
var app = express();
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing//
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('app/public'))

//Routes - points the server to several route files//
require("./app/routes/apiRoutes.js")(app);
require("./app/routes/htmlRoutes.js")(app);

//Listener - code effectively starts the server//
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});