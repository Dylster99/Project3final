var express = require("express");

const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(require('serve-static')(__dirname + '/../../public'));

app.use(
    require('express-session')({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false
    }));
  
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds041248.mlab.com:41248/heroku_q3w93hkn");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
