var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
app.listen(PORT, function() {
    console.log("Server Running on " + PORT);
});