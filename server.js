const express = require("express");
const os = require("os");
const app = express();

var port = process.env.PORT || 3000;
app.use(express.static("build"));
// tslint:disable-next-line:no-console
app.listen(port, () => console.log("Listening on port " + port));