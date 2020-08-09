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
  console.log("SocketId: ", socket.id);
  console.log("Socket Connection made");
  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
