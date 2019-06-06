//Dependencies//
var express = require("express");
var path = require("path");

//Express configuration//
var app = express();
var PORT = process.env.PORT || 3306;

//Sets up the Express app to handle data parsing//
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes - points the server to several route files//
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener - code effectively starts the server//
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});