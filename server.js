const express = require("express");
const os = require("os");
const app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt-nodejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Used locally
userPass = require("fs")
  .readFileSync("mongoCreds.txt")
  .toString()
  .split(":");
console.log(userPass[0] + " " + userPass[1]);
username = userPass[0] ? userPass[0] : process.env.mongouser;
password = userPass[1] ? userPass[1] : process.env.mongopass;

mongoose.connect(
  "mongodb://" +
    username +
    ":" +
    password +
    "@ds115753.mlab.com:15753/andy-website"
);

var userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// hash the password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
var User = mongoose.model("User", userSchema);

var port = process.env.PORT || 3000;
app.use(express.static("./build"));

app.post("/user/create", (req, res) => {
  console.log(req.body);
  var newUser = new User(req.body);
  newUser
    .save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/user/login", (req, res) => {});

// tslint:disable-next-line:no-console
app.listen(port, () => console.log("Listening on port " + port));
