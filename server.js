const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_1748ssq8:80qdjn5ck9cg5u7thg0uksp5o1@ds115758.mlab.com:15758/heroku_1748ssq8", 
{
  useMongoClient: true
});
var db = mongoose.connection;

db.on("error", function(err){
  console.log("Mongoose Error: ", err);
});

db.once("open", function(){
  console.log("Mongoose connection successful!");
});

// --------------------


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});