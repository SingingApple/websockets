const express = require("express");
const { urlencoded } = require("express");
const app = express();

//middlewares
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
