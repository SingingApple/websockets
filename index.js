const express = require("express");
const { urlencoded } = require("express");
const socket = require("socket.io");
const app = express();

//middlewares
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

const server = app.listen(5000, () => {
  console.log("Listening to port 5000");
});

//Socket Setup
const io = socket(server);

io.on("connection", (socket) => {
  console.log(socket);
  console.log("Connection made");
});
