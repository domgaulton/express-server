const express = require("express");

// See documentation https://expressjs.com/en/starter/installing.html
const app = express();

// with express request and response are shortened
app.get("/", (req, res) => {
  res.send("home page message");
});

// set a URL
app.get("/profile", (req, res) => {
  const user = {
    name: "Sally",
    age: 30
  };
  // able to send header type JSON very easily
  res.send(user);
});

app.listen(3000);
